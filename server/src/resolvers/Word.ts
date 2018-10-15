import { WordResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";

export interface WordParent {
  id: string;
  value: string;
  unknown: boolean;
}

export const Word: WordResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  value: parent => parent.value,
  unknown: parent => parent.unknown
};
