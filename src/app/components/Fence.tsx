import Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-python';
import './prism-custom.css';

export default function Fence({
  content,
  language,
}: {
  content: string;
  language: string;
}) {
  const html = Prism.highlight(
    content,
    Prism.languages[language],
    language
  );
  return (
    <code
      className={`language-${language}`}
      dangerouslySetInnerHTML={{ __html: html }}
      content={content}
    ></code>
  );
}
