import { TranslationResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";

export interface TranslationParent {
  id: string;
  from: string;
  to: string;
}

export const Translation: TranslationResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  from: parent => parent.from,
  to: parent => parent.to
};
