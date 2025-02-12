# Getting Started

## Node

This project uses Node v20.2.0 and has an `.nvmrc`. If you have `nvm` installed you can run `nvm use` to switch to the correct version.

If you don't have `nvm` installed you can install it [here](https://github.com/nvm-sh/nvm).

## Workflow

### Linking

The recommended workflow to test within the Solana Next.js site is to run TSDX in dev mode:

```bash
yarn start
```

After modules have compiled and watcher is running, build the tailwind css file:

```bash
yarn build-tailwind
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` cause a rebuild to `/dist`.

You can then symlink the package to Solana's codebase so you can import your modules from the dev build.

To link:

```bash
# In the root of this project
yarn link
```

Navigate to your local build of Solana's Next site and run:

```bash
# In the root of the Solana Next.js site
yarn link @solana-foundation/solana-lib
```

You can now import from `@solana-foundation/solana-lib` and test locally.

### Storybook

Run inside another terminal:

```bash
yarn storybook
```

This loads the stories from all files with `.stories`.

Storybook runs on port `http://localhost:6006/` by default.

## File Architecture

This is the basic folder structure for this project:

```txt
├── src
│   ├── components
│   │   └── CoolComponent
│   │       ├── coolComponent.stories.tsx
│   │       └── index.tsx
│   ├── molecules
│   │   └── Button
│   │       ├── button.stories.tsx
│   │       └── index.tsx
│   ├── index.tsx       # Entry Point
│   └── tailwind.css    # Style Entry
│

```

## Development

### Configuration

Code quality is set up for you with `prettier`, `husky`, and `lint-staged`. Adjustments can (and will) still be made, this is just a bare-bones setup.

### TypeScript

`tsconfig.json` is set up to interpret `dom` and `esnext` types, as well as `react` for `jsx`. To prevent import errors we will add `import React from 'react'` at the top of each file that uses it.

### Exports

Per Palmer Group guidelines, [always use named exports.](https://github.com/palmerhq/typescript#exports) Code split inside your React app instead of your React library.

> This library uses relative paths for imports. Absolute paths may still pass the build, but they will break when imported into another project.

### Styles

Due to complications with `Bootstrap` all Tailwind utility classes are prefixed with `tw-`.

The entry point for the project is `src/tailwind.css`.

### Icons

An icon sprite is currently generated from the `src/assets/icons` directory. To add to the icon sprite just add an SVG to the directory and run `yarn gen:icons` to create a new sprite.

> To be less limiting in the style of icon, the generation process does NOT strip away inlined `fill` or `stroke` tags. So it's important that you process the SVG beforehand to be compliant with the needs of the icon.

## Build

### Module Formats

CJS, ESModules, and UMD module formats are supported.

The appropriate paths are configured in `package.json` and `dist/index.js` accordingly. Please report if any issues are found.

### Rollup

TSDX uses [Rollup](https://rollupjs.org) as a bundler and generates multiple rollup configs for various module formats and build settings. See [Optimizations](#optimizations) for details.

Rollup uses a minifier called Terser that doesn't support typescript optional chaining. Because of this, we need to use vanilla null checks throughout this project.
