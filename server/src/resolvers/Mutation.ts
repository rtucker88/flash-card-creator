import { MutationResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { sentences } from "sbd";

export interface MutationParent {}

export const Mutation: MutationResolvers.Type<TypeMap> = {
  createArticle: (_parent, args, ctx) => {
    const paragraphs = getParagraphs(args.content);

    return ctx.db.createArticle({
      title: args.title,
      createdBy: {
        connect: {
          email: args.authorEmail
        }
      },
      paragraphs,
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
const getParagraphs = (article: string) => {
  return {
    create: article
      .split("\n")
      .filter(para => para !== "")
      .map(para => ({
        sentences: getSentences(para)
      }))
  };
};

const getSentences = (paragraph: string) => {
  return {
    create: sentences(paragraph).map((sentence: string) => ({
      words: getWords(sentence)
    }))
  };
};

const getWords = (sentence: string) => {
  return {
    create: sentence.split(" ").map(word => ({
      value: word
    }))
  };
};
