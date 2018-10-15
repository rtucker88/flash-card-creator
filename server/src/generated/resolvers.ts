import { GraphQLResolveInfo } from "graphql";

export interface ITypeMap {
  Context: any;

  QueryParent: any;
  MutationParent: any;
  UserParent: any;
  ArticleParent: any;
  ParagraphParent: any;
  SentenceParent: any;
  WordParent: any;
  TranslationParent: any;
}

export namespace QueryResolvers {
  export type ArticlesResolver<T extends ITypeMap> = (
    parent: T["QueryParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["ArticleParent"][] | Promise<T["ArticleParent"][]>;

  export interface ArgsArticle {
    id: string;
  }

  export type ArticleResolver<T extends ITypeMap> = (
    parent: T["QueryParent"],
    args: ArgsArticle,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["ArticleParent"] | null | Promise<T["ArticleParent"] | null>;

  export type UsersResolver<T extends ITypeMap> = (
    parent: T["QueryParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"][] | Promise<T["UserParent"][]>;

  export interface ArgsUser {
    id: string;
  }

  export type UserResolver<T extends ITypeMap> = (
    parent: T["QueryParent"],
    args: ArgsUser,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;

  export interface ArgsParagraph {
    id: string;
  }

  export type ParagraphResolver<T extends ITypeMap> = (
    parent: T["QueryParent"],
    args: ArgsParagraph,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["ParagraphParent"] | null | Promise<T["ParagraphParent"] | null>;

  export interface ArgsSentence {
    id: string;
  }

  export type SentenceResolver<T extends ITypeMap> = (
    parent: T["QueryParent"],
    args: ArgsSentence,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["SentenceParent"] | null | Promise<T["SentenceParent"] | null>;

  export interface ArgsTranslation {
    fromLanguage: string;
    toLanguage: string;
    query: string;
  }

  export type TranslationResolver<T extends ITypeMap> = (
    parent: T["QueryParent"],
    args: ArgsTranslation,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["TranslationParent"][] | Promise<T["TranslationParent"][]>;

  export interface ArgsGetUnknownWordsFromArticle {
    id: string;
  }

  export type GetUnknownWordsFromArticleResolver<T extends ITypeMap> = (
    parent: T["QueryParent"],
    args: ArgsGetUnknownWordsFromArticle,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["WordParent"][] | Promise<T["WordParent"][]>;

  export interface ArgsWord {
    id: string;
  }

  export type WordResolver<T extends ITypeMap> = (
    parent: T["QueryParent"],
    args: ArgsWord,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["WordParent"] | null | Promise<T["WordParent"] | null>;

  export interface Type<T extends ITypeMap> {
    articles: (
      parent: T["QueryParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["ArticleParent"][] | Promise<T["ArticleParent"][]>;
    article: (
      parent: T["QueryParent"],
      args: ArgsArticle,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["ArticleParent"] | null | Promise<T["ArticleParent"] | null>;
    users: (
      parent: T["QueryParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"][] | Promise<T["UserParent"][]>;
    user: (
      parent: T["QueryParent"],
      args: ArgsUser,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;
    paragraph: (
      parent: T["QueryParent"],
      args: ArgsParagraph,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["ParagraphParent"] | null | Promise<T["ParagraphParent"] | null>;
    sentence: (
      parent: T["QueryParent"],
      args: ArgsSentence,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["SentenceParent"] | null | Promise<T["SentenceParent"] | null>;
    translation: (
      parent: T["QueryParent"],
      args: ArgsTranslation,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["TranslationParent"][] | Promise<T["TranslationParent"][]>;
    getUnknownWordsFromArticle: (
      parent: T["QueryParent"],
      args: ArgsGetUnknownWordsFromArticle,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["WordParent"][] | Promise<T["WordParent"][]>;
    word: (
      parent: T["QueryParent"],
      args: ArgsWord,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["WordParent"] | null | Promise<T["WordParent"] | null>;
  }
}

export namespace MutationResolvers {
  export interface ArgsCreateUser {
    email: string;
  }

  export type CreateUserResolver<T extends ITypeMap> = (
    parent: T["MutationParent"],
    args: ArgsCreateUser,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | Promise<T["UserParent"]>;

  export interface ArgsCreateArticle {
    title: string;
    content: string;
    authorEmail: string;
    fromLanguage: string;
    toLanguage: string;
  }

  export type CreateArticleResolver<T extends ITypeMap> = (
    parent: T["MutationParent"],
    args: ArgsCreateArticle,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["ArticleParent"] | Promise<T["ArticleParent"]>;

  export interface ArgsDeleteArticle {
    id: string;
  }

  export type DeleteArticleResolver<T extends ITypeMap> = (
    parent: T["MutationParent"],
    args: ArgsDeleteArticle,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["ArticleParent"] | null | Promise<T["ArticleParent"] | null>;

  export interface ArgsMarkWordUnknown {
    id: string;
    unknown: boolean;
  }

  export type MarkWordUnknownResolver<T extends ITypeMap> = (
    parent: T["MutationParent"],
    args: ArgsMarkWordUnknown,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["WordParent"] | null | Promise<T["WordParent"] | null>;

  export interface Type<T extends ITypeMap> {
    createUser: (
      parent: T["MutationParent"],
      args: ArgsCreateUser,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | Promise<T["UserParent"]>;
    createArticle: (
      parent: T["MutationParent"],
      args: ArgsCreateArticle,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["ArticleParent"] | Promise<T["ArticleParent"]>;
    deleteArticle: (
      parent: T["MutationParent"],
      args: ArgsDeleteArticle,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["ArticleParent"] | null | Promise<T["ArticleParent"] | null>;
    markWordUnknown: (
      parent: T["MutationParent"],
      args: ArgsMarkWordUnknown,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["WordParent"] | null | Promise<T["WordParent"] | null>;
  }
}

export namespace UserResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type EmailResolver<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    email: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace ArticleResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T["ArticleParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type TitleResolver<T extends ITypeMap> = (
    parent: T["ArticleParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type ParagraphsResolver<T extends ITypeMap> = (
    parent: T["ArticleParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["ParagraphParent"][] | Promise<T["ParagraphParent"][]>;

  export type CreatedByResolver<T extends ITypeMap> = (
    parent: T["ArticleParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | Promise<T["UserParent"]>;

  export type FromLanguageResolver<T extends ITypeMap> = (
    parent: T["ArticleParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type ToLanguageResolver<T extends ITypeMap> = (
    parent: T["ArticleParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type CreatedAtResolver<T extends ITypeMap> = (
    parent: T["ArticleParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UpdatedAtResolver<T extends ITypeMap> = (
    parent: T["ArticleParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T["ArticleParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    title: (
      parent: T["ArticleParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    paragraphs: (
      parent: T["ArticleParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["ParagraphParent"][] | Promise<T["ParagraphParent"][]>;
    createdBy: (
      parent: T["ArticleParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | Promise<T["UserParent"]>;
    fromLanguage: (
      parent: T["ArticleParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    toLanguage: (
      parent: T["ArticleParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    createdAt: (
      parent: T["ArticleParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    updatedAt: (
      parent: T["ArticleParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace ParagraphResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T["ParagraphParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type SentencesResolver<T extends ITypeMap> = (
    parent: T["ParagraphParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["SentenceParent"][] | Promise<T["SentenceParent"][]>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T["ParagraphParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    sentences: (
      parent: T["ParagraphParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["SentenceParent"][] | Promise<T["SentenceParent"][]>;
  }
}

export namespace SentenceResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T["SentenceParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type WordsResolver<T extends ITypeMap> = (
    parent: T["SentenceParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["WordParent"][] | Promise<T["WordParent"][]>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T["SentenceParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    words: (
      parent: T["SentenceParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["WordParent"][] | Promise<T["WordParent"][]>;
  }
}

export namespace WordResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T["WordParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type ValueResolver<T extends ITypeMap> = (
    parent: T["WordParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UnknownResolver<T extends ITypeMap> = (
    parent: T["WordParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => boolean | Promise<boolean>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T["WordParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    value: (
      parent: T["WordParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    unknown: (
      parent: T["WordParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => boolean | Promise<boolean>;
  }
}

export namespace TranslationResolvers {
  export type FromResolver<T extends ITypeMap> = (
    parent: T["TranslationParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type ToResolver<T extends ITypeMap> = (
    parent: T["TranslationParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type<T extends ITypeMap> {
    from: (
      parent: T["TranslationParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    to: (
      parent: T["TranslationParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export interface IResolvers<T extends ITypeMap> {
  Query: QueryResolvers.Type<T>;
  Mutation: MutationResolvers.Type<T>;
  User: UserResolvers.Type<T>;
  Article: ArticleResolvers.Type<T>;
  Paragraph: ParagraphResolvers.Type<T>;
  Sentence: SentenceResolvers.Type<T>;
  Word: WordResolvers.Type<T>;
  Translation: TranslationResolvers.Type<T>;
}
