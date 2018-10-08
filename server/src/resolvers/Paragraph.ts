import { ParagraphResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";

export interface ParagraphParent {
  id: string;
}

export const Paragraph: ParagraphResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  sentences: (parent, _args, ctx) =>
    ctx.db.paragraph({ id: parent.id }).sentences()
};
