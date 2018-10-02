import * as React from 'react';
import { compose, onlyUpdateForKeys, withHandlers } from 'recompose';

import { ISentence } from '../resources/article';
import Word from './Word';

interface ISentenceProps {
  sentence: ISentence;
  onWordClick: (word: number) => void;
}

type ICombinedSentenceProps = ISentenceProps & ISentencePropHandlers;

const Sentence: React.StatelessComponent<ICombinedSentenceProps> = ({
  handleWordClick,
  sentence
}) => {
  return (
    <>
      {sentence.words.map((word, wordIndex) => {
        return (
          <React.Fragment key={wordIndex}>
            <Word
              onClick={handleWordClick(wordIndex)}
              unknown={word.unknown}
              word={word.text}
            />
          </React.Fragment>
        );
      })}
    </>
  );
};

interface ISentencePropHandlers {
  handleWordClick: (word: number) => () => void;
}

const enhance = compose<ICombinedSentenceProps, ISentenceProps>(
  withHandlers<ISentenceProps, ISentencePropHandlers>({
    handleWordClick: ({ onWordClick }) => (word: number) => () => {
      onWordClick(word);
    }
  }),
  onlyUpdateForKeys(['sentence'])
);

export default enhance(Sentence);
