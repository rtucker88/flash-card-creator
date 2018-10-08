import { MutationResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";

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
      paragraphs: {
        create: {
          sentences: {
            create: {
              words: {
                create: {
                  value: "hello"
                }
              }
            }
          }
        }
      },
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
