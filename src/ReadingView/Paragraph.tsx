import * as React from 'react';
import Sentence, { ISentenceData } from './Sentence';

import { flatten } from 'lodash';
import { shouldUpdate } from 'recompose';

interface IParagraphProps {
  fromLanguage: string;
  paragraph: IParagraphData;
  toLanguage: string;
}

export interface IParagraphData {
  sentences: ISentenceData[];
  id: string;
}

const Paragraph: React.StatelessComponent<IParagraphProps> = ({
  fromLanguage,
  paragraph,
  toLanguage
}) => {
  return (
    <p>
      {paragraph.sentences.map(sentence => {
        return (
          <Sentence
            key={sentence.id}
            sentence={sentence}
            fromLanguage={fromLanguage}
            toLanguage={toLanguage}
          />
        );
      })}
    </p>
  );
};

const getNumberOfUnknownWords = (sentences: ISentenceData[]): number => {
  return flatten(
    sentences.map(sentence => sentence.words.map(word => word.unknown))
  ).filter(unknown => unknown).length;
};

const enhance = shouldUpdate<IParagraphProps>((props, nextProps) => {
  return (
    getNumberOfUnknownWords(props.paragraph.sentences) !==
    getNumberOfUnknownWords(nextProps.paragraph.sentences)
  );
});

export default enhance(Paragraph);
