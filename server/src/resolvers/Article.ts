import { ArticleResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";

export interface ArticleParent {
  id: string;
  fromLanguage: string;
  toLanguage: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}

export const Article: ArticleResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  fromLanguage: parent => parent.fromLanguage,
  toLanguage: parent => parent.toLanguage,
  title: parent => parent.title,
  createdAt: parent => parent.createdAt,
  updatedAt: parent => parent.updatedAt,
  createdBy: (parent, _args, ctx) =>
    ctx.db.article({ id: parent.id }).createdBy(),
  paragraphs: (parent, _args, ctx) =>
    ctx.db.article({ id: parent.id }).paragraphs()
};
