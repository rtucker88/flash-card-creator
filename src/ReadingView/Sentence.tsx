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
  sentence: ISentenceData;
}

const Sentence: React.StatelessComponent<ISentenceProps> = ({ sentence }) => {
  return (
    <>
      {sentence.words.map(word => {
        return <Word key={word.id} word={word} />;
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
