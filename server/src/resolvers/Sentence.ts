import { SentenceResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";

export interface SentenceParent {
  id: string;
}

export const Sentence: SentenceResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  words: (parent, _args, ctx) => ctx.db.sentence({ id: parent.id }).words()
};
