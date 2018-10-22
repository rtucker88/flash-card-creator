import * as React from 'react';
import Word, { IWordData } from './Word';

import { shouldUpdate } from 'recompose';

export interface ISentenceData {
  id: string;
  words: [
    {
      id: string;
      value: string;
      unknown: boolean;
    }
  ];
}

interface ISentenceProps {
  fromLanguage: string;
  sentence: ISentenceData;
  toLanguage: string;
}

const Sentence: React.StatelessComponent<ISentenceProps> = ({
  fromLanguage,
  sentence,
  toLanguage
}) => {
  return (
    <>
      {sentence.words.map(word => {
        return (
          <Word
            key={word.id}
            word={word}
            fromLanguage={fromLanguage}
            toLanguage={toLanguage}
          />
        );
      })}
    </>
  );
};

const getNumberOfUnknownWords = (words: IWordData[]): number => {
  return words.map(word => word.unknown).filter(unknown => unknown).length;
};

const enhance = shouldUpdate<ISentenceProps>((props, nextProps) => {
  return (
    getNumberOfUnknownWords(props.sentence.words) !==
    getNumberOfUnknownWords(nextProps.sentence.words)
  );
});

export default enhance(Sentence);
