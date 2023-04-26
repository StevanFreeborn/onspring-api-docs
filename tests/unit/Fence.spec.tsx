import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Prism from 'prismjs';
import Fence from '../../src/app/components/Fence';

describe('Fence component', () => {
  it('renders a code block with highlighted syntax', () => {
    const content = 'console.log(app)';
    const language = 'javascript';
    const highlightedCode = `
      console
      <span class="token function">log</span>
      <span class="token punctuation">(</span>
      app
      <span class="token punctuation">)</span>
      <span class="token punctuation">;</span>
    `;

    jest
      .spyOn(Prism, 'highlight')
      .mockReturnValue(highlightedCode);

    const { container } = render(
      <Fence content={content} language={language} />
    );

    const codeBlocks =
      container.getElementsByTagName('code');
    expect(codeBlocks).toHaveLength(1);

    const codeBlock = codeBlocks[0];
    expect(codeBlock).toBeInTheDocument();
    expect(codeBlock.innerHTML).toEqual(highlightedCode);
    expect(Prism.highlight).toHaveBeenCalledWith(
      content,
      Prism.languages[language],
      language
    );
  });
});
