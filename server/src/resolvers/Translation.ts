import { TranslationResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";

export interface TranslationParent {
  from: string;
  to: string;
}

export const Translation: TranslationResolvers.Type<TypeMap> = {
  from: parent => parent.from,
  to: parent => parent.to
};
