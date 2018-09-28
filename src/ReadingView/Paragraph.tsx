import * as React from 'react';
import { compose, onlyUpdateForKeys, withHandlers } from 'recompose';

import { IParagraph } from '../resources/article';
import Sentence from './Sentence';

interface IParagraphProps {
  paragraph: IParagraph;
  onWordClick: (sentence: number, word: number) => void;
}

type ICombinedParagraphProps = IParagraphProps & IParagraphPropHandlers;

const Paragraph: React.StatelessComponent<ICombinedParagraphProps> = ({
  handleSentenceClick,
  paragraph
}) => {
  return (
    <p>
      {paragraph.sentences.map((sentence, sentenceIndex) => {
        return (
          <Sentence
            key={sentenceIndex}
            onWordClick={handleSentenceClick(sentenceIndex)}
            sentence={sentence}
          />
        );
      })}
    </p>
  );
};

interface IParagraphPropHandlers {
  handleSentenceClick: (sentence: number) => (word: number) => void;
}

const enhance = compose<ICombinedParagraphProps, IParagraphProps>(
  withHandlers<IParagraphProps, IParagraphPropHandlers>({
    handleSentenceClick: ({ onWordClick }) => (sentence: number) => (
      word: number
    ) => {
      onWordClick(sentence, word);
    }
  }),
  onlyUpdateForKeys(['paragraph'])
);

export default enhance(Paragraph);
