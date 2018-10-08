import { QueryResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";

export interface QueryParent {}

export const Query: QueryResolvers.Type<TypeMap> = {
  articles: (_parent, _args, ctx) => ctx.db.articles(),
  article: (_parent, args, ctx) => ctx.db.article({ id: args.id }),
  users: (_parent, _args, ctx) => ctx.db.users(),
  user: (_parent, args, ctx) => ctx.db.user({ id: args.id }),
  paragraph: (_parent, args, ctx) => ctx.db.paragraph({ id: args.id }),
  sentence: (_parent, args, ctx) => ctx.db.sentence({ id: args.id }),
  translation: (_parent, args, ctx) => ctx.db.translation({ id: args.id }),
  word: (_parent, args, ctx) => ctx.db.word({ id: args.id })
};
