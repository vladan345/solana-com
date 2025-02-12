/* eslint-disable no-console */
import fs from 'fs/promises';
import path from 'path';
import { parseArgs } from 'util';
import svgSpreact from 'svg-spreact';

/**
 * A quick utility to create an SVG sprite from a directory of SVGs.
 *
 * @requires
 * svg-spreact — `yarn add svg-spreact -D`
 *
 * @summary
 * Takes all SVG's (and only SVG's) from a directory.
 * Optimizes all SVG's and strips styles from them (uses SVGO).
 * Writes a new sprite to the output destination.
 *
 * @argument {string} --srcDir, -s - The absolute path to the source directory of SVG's.
 * @argument {string} --outputPath, -o - The absolute path to the file where the sprite is to be written to.
 * @argument {string} --typePath, -t - The absolute path to the file for the icon types.
 *
 * If you dont want to use arguments, you can just add as defaults to the
 * `parseArgs` options below
 */

//! IMPORTANT — this is the rootDir for THIS directory only. Requires refactoring to be exposed as a package utility.
const root = new URL('..', import.meta.url).pathname;
const {
  values: { srcDir, outputPath, typePath },
} = parseArgs({
  options: {
    srcDir: {
      type: 'string',
      short: 's',
      default: 'src/assets/icons',
    },
    outputPath: {
      type: 'string',
      short: 'o',
      default: '.storybook/public/sprite.svg',
    },
    typePath: {
      type: 'string',
      short: 't',
      default: 'src/molecules/Icon/iconIds.ts',
    },
  },
});

if (!srcDir) {
  console.log(
    '\x1b[31m%s\x1b[0m',
    "\nA source directory is required. \nYou can identify the source directory with the '--srcDir' or '-s' flags."
  );
  process.exit(1);
}
console.log('\x1b[36m%s\x1b[0m', `\nConverting SVG's from ${srcDir}`);

// SVGO optimization configuration https://github.com/svg/svgo
const config = {
  plugins: [
    { name: 'removeStyleElement', active: true },
    { name: 'removeScriptElement', active: true },
    { name: 'removeViewBox', active: false },
    { name: 'removeTitle', active: false },
    {
      name: 'removeAttrs',
      params: {
        attrs: ['(class|style)', 'xlink:href', 'xmlns:xlink', 'data-name'],
      },
    },
  ],
  multipass: true,
};

const readFolder = async folder => {
  let svgs = [];
  const files = await fs.readdir(folder);
  const filtered = files.filter(file => path.extname(file) === '.svg');
  const filenames = filtered.map(file => file.replace('.svg', ''));
  for (let file of filtered) {
    const data = await fs.readFile(path.resolve(folder, file));
    svgs = [...svgs, data.toString()];
  }
  console.log(`${filenames.length} assets found...`);
  return Promise.resolve({ svgs, filenames });
};

const createSprite = ({ svgs, filenames }) => {
  const processId = n => filenames[n];
  return svgSpreact(svgs, {
    tidy: true,
    processId,
    className: 'icon',
    optimize: true,
    svgoConfig: config,
  });
};

const pathExists = async input => {
  try {
    await fs.access(input);
    return true;
  } catch {
    return false;
  }
};

const createAndWrite = async (writePath, data) => {
  const directory = path.dirname(writePath);
  if (!(await pathExists(directory))) {
    await fs.mkdir(directory, { recursive: true });
    console.log(`Created ${directory}`);
  }

  await fs.writeFile(writePath, data, { flag: 'w' });
  console.log(`'${path.basename(writePath)}' written to ${directory}`);
};

const rawSvgData = await readFolder(path.resolve(root, srcDir));
const { defs } = await createSprite(rawSvgData);
await createAndWrite(path.resolve(root, outputPath), defs);

const typesTemplate = `export type IconIds = '${rawSvgData.filenames.join("' | '")}'\n`;
await createAndWrite(path.resolve(root, typePath), typesTemplate);

console.log('\x1b[32m%s\x1b[0m', 'Done\n');
