import { QueryResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";

import * as dictcc from "dictcc-js";

export interface QueryParent {}

export const Query: QueryResolvers.Type<TypeMap> = {
  articles: (_parent, _args, ctx) => ctx.db.articles(),
  article: (_parent, args, ctx) => ctx.db.article({ id: args.id }),
  users: (_parent, _args, ctx) => ctx.db.users(),
  user: (_parent, args, ctx) => ctx.db.user({ id: args.id }),
  paragraph: (_parent, args, ctx) => ctx.db.paragraph({ id: args.id }),
  sentence: (_parent, args, ctx) => ctx.db.sentence({ id: args.id }),
  translation: (_parent, { fromLanguage, toLanguage, query }) => {
    return new Promise((resolve, rej) => {
      dictcc.translate(fromLanguage, toLanguage, query, (res, err) => {
        if (err) {
          return rej(err);
        }

        return resolve(res.map(val => ({ from: val.from, to: val.to })));
      });
    });
  },
  word: (_parent, args, ctx) => ctx.db.word({ id: args.id }),
  getUnknownWordsFromArticle: async (_parent, { id }, ctx) => []
};
