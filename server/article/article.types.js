const Article = `
    type Word {
        text: String
        unknown: Boolean
        defintiion: [Definition]
    }

    type Sentence {
        words: [Word]
    }

    type Paragraph {
        sentences: [Sentence]
    }

    type Article {
        id: ID!
        paragraphs: [Paragraph]
        fromLanguage: String
        toLanguage: String
    }

    input ArticleDraft {
        paragraphs: [Paragraph]
        fromLanguage: String
        toLanguage: String
    }

    type Query {
        article(id: ID!): Article
    }

    type Mutation {
        createArticle(articleDraft: ArticleDraft!): ArticleDraft
        updateArticle(id: ID!, articleDraft: ArticleDraft!): Article
    }
`;

export default Article;
