import { IResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";

import { Query } from "./Query";
import { Mutation } from "./Mutation";
import { Article } from "./Article";
import { Paragraph } from "./Paragraph";
import { Sentence } from "./Sentence";
import { Translation } from "./Translation";
import { User } from "./User";
import { Word } from "./Word";

export const resolvers: IResolvers<TypeMap> = {
  Query,
  Mutation,
  Article,
  Paragraph,
  Sentence,
  Translation,
  User,
  Word
};
