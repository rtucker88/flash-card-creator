import { sentences } from 'sbd';

export interface IArticle {
  paragraphs: IParagraph[];
  title: string;
}

export interface IParagraph {
  sentences: ISentence[];
}

export interface ISentence {
  words: IWord[];
}

export interface IWord {
  text: string;
  unknown: boolean;
}

export const createArticleFromText = (
  article: string,
  title: string
): IArticle => {
  const paragraphs = getParagraphs(article);

  return { paragraphs, title };
};

const getParagraphs = (article: string): IParagraph[] => {
  return article
    .split('\n')
    .filter(para => para !== '')
    .map(para => ({
      sentences: getSentences(para)
    }));
};

const getSentences = (paragraph: string): ISentence[] => {
  return sentences(paragraph).map((sentence: string) => ({
    words: getWords(sentence)
  }));
};

const getWords = (sentence: string): IWord[] => {
  return sentence.split(' ').map(word => ({
    text: word,
    unknown: false
  }));
};
