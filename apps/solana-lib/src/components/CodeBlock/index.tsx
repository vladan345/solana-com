import React, { useEffect, FC, useCallback, useRef } from 'react';
import { Section } from '../../molecules/Section';
import { pre, copyBar, wrapper, copyButton, currentLanguage } from './CodeBlock.styles';
import Prism from 'prismjs';
// Import additional PrismJS languages
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-rust';
import 'prismjs/components/prism-solidity';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-latex';

interface CodeBlockProps {
  code: string;
  language: 'jsx' | 'typescript' | 'tsx' | 'rust' | 'solidity' | 'json' | 'bash' | 'latex';
}

export const CodeBlock: FC<CodeBlockProps> = ({ code, language }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code, language]);

  const copyButtonRef = useRef<HTMLButtonElement | null>(null);
  // Copy to clipboard function
  const copyToClipboard = useCallback(() => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        //update the button text to say "copied!" for a few seconds then back to "copy code"
        const copyButton = copyButtonRef.current;
        if (copyButton) {
          copyButton.innerText = 'Copied!';
          setTimeout(() => {
            copyButton.innerText = 'Copy code';
          }, 2000);
        }
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  }, [code]);

  return (
    <Section fullWidth>
      <div className={wrapper()}>
        <div className={copyBar()}>
          <span className={currentLanguage()}>{language}</span>
          <button ref={copyButtonRef} onClick={copyToClipboard} className={copyButton()}>
            Copy code
          </button>
        </div>
        <pre className={pre()}>
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
    </Section>
  );
};
