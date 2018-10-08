import { ITypeMap } from "../../generated/resolvers";

import { QueryParent } from "../Query";
import { MutationParent } from "../Mutation";
import { UserParent } from "../User";
import { ArticleParent } from "../Article";
import { ParagraphParent } from "../Paragraph";
import { SentenceParent } from "../Sentence";
import { WordParent } from "../Word";
import { TranslationParent } from "../Translation";

import { Context } from "./context";

export interface TypeMap extends ITypeMap {
  Context: Context;
  QueryParent: QueryParent;
  MutationParent: MutationParent;
  UserParent: UserParent;
  ArticleParent: ArticleParent;
  ParagraphParent: ParagraphParent;
  SentenceParent: SentenceParent;
  WordParent: WordParent;
  TranslationParent: TranslationParent;
}
