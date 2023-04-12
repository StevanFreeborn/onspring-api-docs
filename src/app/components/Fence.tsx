import Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
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
    ></code>
  );
}
