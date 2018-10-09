import { MutationResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import {
  ParagraphCreateManyInput,
  SentenceCreateManyInput,
  WordCreateManyInput
} from "../generated/prisma-client";
import { sentences } from "sbd";

export interface MutationParent {}

export const Mutation: MutationResolvers.Type<TypeMap> = {
  createArticle: (_parent, args, ctx) => {
    return ctx.db.createArticle({
      title: args.title,
      createdBy: {
        connect: {
          email: args.authorEmail
        }
      },
      paragraphs: getParagraphs(args.content),
      fromLanguage: args.fromLanguage,
      toLanguage: args.toLanguage
    });
  },
  createUser: (_parent, args, ctx) =>
    ctx.db.createUser({
      email: args.email
    }),
  deleteArticle: (_parent, { id }, ctx) => ctx.db.deleteArticle({ id }),
  markWordUnknown: (_parent, { id, unknown }, ctx) =>
    ctx.db.updateWord({
      where: { id },
      data: { unknown }
    })
};

// TODO: Figure out a better place for this
const getParagraphs = (article: string): ParagraphCreateManyInput => {
  return {
    create: article
      .split("\n")
      .filter(para => para !== "")
      .map(para => ({
        sentences: getSentences(para)
      }))
  };
};

const getSentences = (paragraph: string): SentenceCreateManyInput => {
  return {
    create: sentences(paragraph).map((sentence: string) => ({
      words: getWords(sentence)
    }))
  };
};

const getWords = (sentence: string): WordCreateManyInput => {
  return {
    create: sentence.split(" ").map(word => ({
      value: word
    }))
  };
};
