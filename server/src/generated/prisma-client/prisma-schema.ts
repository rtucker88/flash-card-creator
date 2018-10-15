export const typeDefs = /* GraphQL */ `type AggregateArticle {
  count: Int!
}

type AggregateParagraph {
  count: Int!
}

type AggregateSentence {
  count: Int!
}

type AggregateTranslation {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateWord {
  count: Int!
}

type Article {
  id: ID!
  title: String!
  paragraphs(where: ParagraphWhereInput, orderBy: ParagraphOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Paragraph!]
  createdBy: User!
  createdAt: DateTime!
  updatedAt: DateTime!
  fromLanguage: String!
  toLanguage: String!
}

type ArticleConnection {
  pageInfo: PageInfo!
  edges: [ArticleEdge]!
  aggregate: AggregateArticle!
}

input ArticleCreateInput {
  title: String!
  paragraphs: ParagraphCreateManyInput
  createdBy: UserCreateOneInput!
  fromLanguage: String!
  toLanguage: String!
}

type ArticleEdge {
  node: Article!
  cursor: String!
}

enum ArticleOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  fromLanguage_ASC
  fromLanguage_DESC
  toLanguage_ASC
  toLanguage_DESC
}

type ArticlePreviousValues {
  id: ID!
  title: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  fromLanguage: String!
  toLanguage: String!
}

type ArticleSubscriptionPayload {
  mutation: MutationType!
  node: Article
  updatedFields: [String!]
  previousValues: ArticlePreviousValues
}

input ArticleSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ArticleWhereInput
  AND: [ArticleSubscriptionWhereInput!]
  OR: [ArticleSubscriptionWhereInput!]
  NOT: [ArticleSubscriptionWhereInput!]
}

input ArticleUpdateInput {
  title: String
  paragraphs: ParagraphUpdateManyInput
  createdBy: UserUpdateOneRequiredInput
  fromLanguage: String
  toLanguage: String
}

input ArticleWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  paragraphs_every: ParagraphWhereInput
  paragraphs_some: ParagraphWhereInput
  paragraphs_none: ParagraphWhereInput
  createdBy: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  fromLanguage: String
  fromLanguage_not: String
  fromLanguage_in: [String!]
  fromLanguage_not_in: [String!]
  fromLanguage_lt: String
  fromLanguage_lte: String
  fromLanguage_gt: String
  fromLanguage_gte: String
  fromLanguage_contains: String
  fromLanguage_not_contains: String
  fromLanguage_starts_with: String
  fromLanguage_not_starts_with: String
  fromLanguage_ends_with: String
  fromLanguage_not_ends_with: String
  toLanguage: String
  toLanguage_not: String
  toLanguage_in: [String!]
  toLanguage_not_in: [String!]
  toLanguage_lt: String
  toLanguage_lte: String
  toLanguage_gt: String
  toLanguage_gte: String
  toLanguage_contains: String
  toLanguage_not_contains: String
  toLanguage_starts_with: String
  toLanguage_not_starts_with: String
  toLanguage_ends_with: String
  toLanguage_not_ends_with: String
  AND: [ArticleWhereInput!]
  OR: [ArticleWhereInput!]
  NOT: [ArticleWhereInput!]
}

input ArticleWhereUniqueInput {
  id: ID
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createArticle(data: ArticleCreateInput!): Article!
  updateArticle(data: ArticleUpdateInput!, where: ArticleWhereUniqueInput!): Article
  updateManyArticles(data: ArticleUpdateInput!, where: ArticleWhereInput): BatchPayload!
  upsertArticle(where: ArticleWhereUniqueInput!, create: ArticleCreateInput!, update: ArticleUpdateInput!): Article!
  deleteArticle(where: ArticleWhereUniqueInput!): Article
  deleteManyArticles(where: ArticleWhereInput): BatchPayload!
  createParagraph(data: ParagraphCreateInput!): Paragraph!
  updateParagraph(data: ParagraphUpdateInput!, where: ParagraphWhereUniqueInput!): Paragraph
  updateManyParagraphs(data: ParagraphUpdateInput!, where: ParagraphWhereInput): BatchPayload!
  upsertParagraph(where: ParagraphWhereUniqueInput!, create: ParagraphCreateInput!, update: ParagraphUpdateInput!): Paragraph!
  deleteParagraph(where: ParagraphWhereUniqueInput!): Paragraph
  deleteManyParagraphs(where: ParagraphWhereInput): BatchPayload!
  createSentence(data: SentenceCreateInput!): Sentence!
  updateSentence(data: SentenceUpdateInput!, where: SentenceWhereUniqueInput!): Sentence
  updateManySentences(data: SentenceUpdateInput!, where: SentenceWhereInput): BatchPayload!
  upsertSentence(where: SentenceWhereUniqueInput!, create: SentenceCreateInput!, update: SentenceUpdateInput!): Sentence!
  deleteSentence(where: SentenceWhereUniqueInput!): Sentence
  deleteManySentences(where: SentenceWhereInput): BatchPayload!
  createTranslation(data: TranslationCreateInput!): Translation!
  updateManyTranslations(data: TranslationUpdateInput!, where: TranslationWhereInput): BatchPayload!
  deleteManyTranslations(where: TranslationWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createWord(data: WordCreateInput!): Word!
  updateWord(data: WordUpdateInput!, where: WordWhereUniqueInput!): Word
  updateManyWords(data: WordUpdateInput!, where: WordWhereInput): BatchPayload!
  upsertWord(where: WordWhereUniqueInput!, create: WordCreateInput!, update: WordUpdateInput!): Word!
  deleteWord(where: WordWhereUniqueInput!): Word
  deleteManyWords(where: WordWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Paragraph {
  id: ID!
  sentences(where: SentenceWhereInput, orderBy: SentenceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Sentence!]
}

type ParagraphConnection {
  pageInfo: PageInfo!
  edges: [ParagraphEdge]!
  aggregate: AggregateParagraph!
}

input ParagraphCreateInput {
  sentences: SentenceCreateManyInput
}

input ParagraphCreateManyInput {
  create: [ParagraphCreateInput!]
  connect: [ParagraphWhereUniqueInput!]
}

type ParagraphEdge {
  node: Paragraph!
  cursor: String!
}

enum ParagraphOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ParagraphPreviousValues {
  id: ID!
}

type ParagraphSubscriptionPayload {
  mutation: MutationType!
  node: Paragraph
  updatedFields: [String!]
  previousValues: ParagraphPreviousValues
}

input ParagraphSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ParagraphWhereInput
  AND: [ParagraphSubscriptionWhereInput!]
  OR: [ParagraphSubscriptionWhereInput!]
  NOT: [ParagraphSubscriptionWhereInput!]
}

input ParagraphUpdateDataInput {
  sentences: SentenceUpdateManyInput
}

input ParagraphUpdateInput {
  sentences: SentenceUpdateManyInput
}

input ParagraphUpdateManyInput {
  create: [ParagraphCreateInput!]
  update: [ParagraphUpdateWithWhereUniqueNestedInput!]
  upsert: [ParagraphUpsertWithWhereUniqueNestedInput!]
  delete: [ParagraphWhereUniqueInput!]
  connect: [ParagraphWhereUniqueInput!]
  disconnect: [ParagraphWhereUniqueInput!]
}

input ParagraphUpdateWithWhereUniqueNestedInput {
  where: ParagraphWhereUniqueInput!
  data: ParagraphUpdateDataInput!
}

input ParagraphUpsertWithWhereUniqueNestedInput {
  where: ParagraphWhereUniqueInput!
  update: ParagraphUpdateDataInput!
  create: ParagraphCreateInput!
}

input ParagraphWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  sentences_every: SentenceWhereInput
  sentences_some: SentenceWhereInput
  sentences_none: SentenceWhereInput
  AND: [ParagraphWhereInput!]
  OR: [ParagraphWhereInput!]
  NOT: [ParagraphWhereInput!]
}

input ParagraphWhereUniqueInput {
  id: ID
}

type Query {
  article(where: ArticleWhereUniqueInput!): Article
  articles(where: ArticleWhereInput, orderBy: ArticleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Article]!
  articlesConnection(where: ArticleWhereInput, orderBy: ArticleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ArticleConnection!
  paragraph(where: ParagraphWhereUniqueInput!): Paragraph
  paragraphs(where: ParagraphWhereInput, orderBy: ParagraphOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Paragraph]!
  paragraphsConnection(where: ParagraphWhereInput, orderBy: ParagraphOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ParagraphConnection!
  sentence(where: SentenceWhereUniqueInput!): Sentence
  sentences(where: SentenceWhereInput, orderBy: SentenceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Sentence]!
  sentencesConnection(where: SentenceWhereInput, orderBy: SentenceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SentenceConnection!
  translations(where: TranslationWhereInput, orderBy: TranslationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Translation]!
  translationsConnection(where: TranslationWhereInput, orderBy: TranslationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TranslationConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  word(where: WordWhereUniqueInput!): Word
  words(where: WordWhereInput, orderBy: WordOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Word]!
  wordsConnection(where: WordWhereInput, orderBy: WordOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WordConnection!
  node(id: ID!): Node
}

type Sentence {
  id: ID!
  words(where: WordWhereInput, orderBy: WordOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Word!]
}

type SentenceConnection {
  pageInfo: PageInfo!
  edges: [SentenceEdge]!
  aggregate: AggregateSentence!
}

input SentenceCreateInput {
  words: WordCreateManyInput
}

input SentenceCreateManyInput {
  create: [SentenceCreateInput!]
  connect: [SentenceWhereUniqueInput!]
}

type SentenceEdge {
  node: Sentence!
  cursor: String!
}

enum SentenceOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SentencePreviousValues {
  id: ID!
}

type SentenceSubscriptionPayload {
  mutation: MutationType!
  node: Sentence
  updatedFields: [String!]
  previousValues: SentencePreviousValues
}

input SentenceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SentenceWhereInput
  AND: [SentenceSubscriptionWhereInput!]
  OR: [SentenceSubscriptionWhereInput!]
  NOT: [SentenceSubscriptionWhereInput!]
}

input SentenceUpdateDataInput {
  words: WordUpdateManyInput
}

input SentenceUpdateInput {
  words: WordUpdateManyInput
}

input SentenceUpdateManyInput {
  create: [SentenceCreateInput!]
  update: [SentenceUpdateWithWhereUniqueNestedInput!]
  upsert: [SentenceUpsertWithWhereUniqueNestedInput!]
  delete: [SentenceWhereUniqueInput!]
  connect: [SentenceWhereUniqueInput!]
  disconnect: [SentenceWhereUniqueInput!]
}

input SentenceUpdateWithWhereUniqueNestedInput {
  where: SentenceWhereUniqueInput!
  data: SentenceUpdateDataInput!
}

input SentenceUpsertWithWhereUniqueNestedInput {
  where: SentenceWhereUniqueInput!
  update: SentenceUpdateDataInput!
  create: SentenceCreateInput!
}

input SentenceWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  words_every: WordWhereInput
  words_some: WordWhereInput
  words_none: WordWhereInput
  AND: [SentenceWhereInput!]
  OR: [SentenceWhereInput!]
  NOT: [SentenceWhereInput!]
}

input SentenceWhereUniqueInput {
  id: ID
}

type Subscription {
  article(where: ArticleSubscriptionWhereInput): ArticleSubscriptionPayload
  paragraph(where: ParagraphSubscriptionWhereInput): ParagraphSubscriptionPayload
  sentence(where: SentenceSubscriptionWhereInput): SentenceSubscriptionPayload
  translation(where: TranslationSubscriptionWhereInput): TranslationSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  word(where: WordSubscriptionWhereInput): WordSubscriptionPayload
}

type Translation {
  from: String!
  to: String!
}

type TranslationConnection {
  pageInfo: PageInfo!
  edges: [TranslationEdge]!
  aggregate: AggregateTranslation!
}

input TranslationCreateInput {
  from: String!
  to: String!
}

type TranslationEdge {
  node: Translation!
  cursor: String!
}

enum TranslationOrderByInput {
  from_ASC
  from_DESC
  to_ASC
  to_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TranslationPreviousValues {
  from: String!
  to: String!
}

type TranslationSubscriptionPayload {
  mutation: MutationType!
  node: Translation
  updatedFields: [String!]
  previousValues: TranslationPreviousValues
}

input TranslationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TranslationWhereInput
  AND: [TranslationSubscriptionWhereInput!]
  OR: [TranslationSubscriptionWhereInput!]
  NOT: [TranslationSubscriptionWhereInput!]
}

input TranslationUpdateInput {
  from: String
  to: String
}

input TranslationWhereInput {
  from: String
  from_not: String
  from_in: [String!]
  from_not_in: [String!]
  from_lt: String
  from_lte: String
  from_gt: String
  from_gte: String
  from_contains: String
  from_not_contains: String
  from_starts_with: String
  from_not_starts_with: String
  from_ends_with: String
  from_not_ends_with: String
  to: String
  to_not: String
  to_in: [String!]
  to_not_in: [String!]
  to_lt: String
  to_lte: String
  to_gt: String
  to_gte: String
  to_contains: String
  to_not_contains: String
  to_starts_with: String
  to_not_starts_with: String
  to_ends_with: String
  to_not_ends_with: String
  AND: [TranslationWhereInput!]
  OR: [TranslationWhereInput!]
  NOT: [TranslationWhereInput!]
}

type User {
  id: ID!
  email: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  email: String
}

input UserUpdateInput {
  email: String
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type Word {
  id: ID!
  value: String!
  unknown: Boolean!
}

type WordConnection {
  pageInfo: PageInfo!
  edges: [WordEdge]!
  aggregate: AggregateWord!
}

input WordCreateInput {
  value: String!
  unknown: Boolean
}

input WordCreateManyInput {
  create: [WordCreateInput!]
  connect: [WordWhereUniqueInput!]
}

type WordEdge {
  node: Word!
  cursor: String!
}

enum WordOrderByInput {
  id_ASC
  id_DESC
  value_ASC
  value_DESC
  unknown_ASC
  unknown_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type WordPreviousValues {
  id: ID!
  value: String!
  unknown: Boolean!
}

type WordSubscriptionPayload {
  mutation: MutationType!
  node: Word
  updatedFields: [String!]
  previousValues: WordPreviousValues
}

input WordSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: WordWhereInput
  AND: [WordSubscriptionWhereInput!]
  OR: [WordSubscriptionWhereInput!]
  NOT: [WordSubscriptionWhereInput!]
}

input WordUpdateDataInput {
  value: String
  unknown: Boolean
}

input WordUpdateInput {
  value: String
  unknown: Boolean
}

input WordUpdateManyInput {
  create: [WordCreateInput!]
  update: [WordUpdateWithWhereUniqueNestedInput!]
  upsert: [WordUpsertWithWhereUniqueNestedInput!]
  delete: [WordWhereUniqueInput!]
  connect: [WordWhereUniqueInput!]
  disconnect: [WordWhereUniqueInput!]
}

input WordUpdateWithWhereUniqueNestedInput {
  where: WordWhereUniqueInput!
  data: WordUpdateDataInput!
}

input WordUpsertWithWhereUniqueNestedInput {
  where: WordWhereUniqueInput!
  update: WordUpdateDataInput!
  create: WordCreateInput!
}

input WordWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  value: String
  value_not: String
  value_in: [String!]
  value_not_in: [String!]
  value_lt: String
  value_lte: String
  value_gt: String
  value_gte: String
  value_contains: String
  value_not_contains: String
  value_starts_with: String
  value_not_starts_with: String
  value_ends_with: String
  value_not_ends_with: String
  unknown: Boolean
  unknown_not: Boolean
  AND: [WordWhereInput!]
  OR: [WordWhereInput!]
  NOT: [WordWhereInput!]
}

input WordWhereUniqueInput {
  id: ID
}
`;
