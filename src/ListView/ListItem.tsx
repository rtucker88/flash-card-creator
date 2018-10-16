import * as React from 'react';
import { Mutation, MutationFn, MutationUpdaterFn } from 'react-apollo';

import { formatRelative } from 'date-fns';
import gql from 'graphql-tag';

import { IconButton, ListItemSecondaryAction } from '@material-ui/core';
import UIListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Delete } from '@material-ui/icons';

import StyledLink from '../StyledLink';
import { GET_ARTICLES } from './ListView';

const DELETE_ARTICLE = gql`
  mutation DeleteArticle($id: ID!) {
    deleteArticle(id: $id) {
      id
    }
  }
`;

interface IArticlesData {
  articles: [{ id: string }];
}

const updateDeleteArticle: MutationUpdaterFn<{
  deleteArticle: { id: string };
}> = (cache, { data }) => {
  const readQuery = cache.readQuery<IArticlesData>({
    query: GET_ARTICLES
  });

  const updatedArticles = {
    articles: readQuery!.articles.filter(
      article => article.id !== data!.deleteArticle.id
    )
  };

  cache.writeQuery({
    data: updatedArticles,
    query: GET_ARTICLES
  });
};

interface IListItemProps {
  id: string;
  title: string;
  createdAt: string;
  fromLanguage: string;
  toLanguage: string;
}

const ListItem: React.StatelessComponent<IListItemProps> = ({
  id,
  title,
  createdAt,
  fromLanguage,
  toLanguage
}) => (
  <Mutation mutation={DELETE_ARTICLE} update={updateDeleteArticle}>
    {(deleteArticleFn, {}) => (
      <UIListItem key={id}>
        <StyledLink to={`/reading/${id}`}>
          <ListItemText
            primary={title}
            secondary={`Created ${formatRelative(
              createdAt,
              new Date()
            )} / ${getLanguageText(fromLanguage, toLanguage)}`}
          />
        </StyledLink>
        <ListItemSecondaryAction>
          <IconButton
            aria-label="Delete"
            onClick={deleteArticle(deleteArticleFn, id)}
          >
            <Delete />
          </IconButton>
        </ListItemSecondaryAction>
      </UIListItem>
    )}
  </Mutation>
);

const deleteArticle = (deleteArticleFn: MutationFn, id: string) => (
  _: React.MouseEvent<HTMLButtonElement>
) => deleteArticleFn({ variables: { id } });

const getLanguageText = (fromLanguage: string, toLanguage: string): string => {
  return `${getLanguageFromCode(fromLanguage)} to ${getLanguageFromCode(
    toLanguage
  )}`;
};

// TODO: Add never helper
const getLanguageFromCode = (language: string): string => {
  switch (language) {
    case 'DE':
      return 'German';
    case 'FR':
      return 'French';
    case 'EN':
    default:
      return 'English';
  }
};

export default ListItem;
