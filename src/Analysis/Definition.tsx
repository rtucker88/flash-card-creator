import * as React from 'react';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import { CircularProgress } from '@material-ui/core';

const GET_TRANSLATION = gql`
  query GetTranslations(
    $fromLanguage: String!
    $toLanguage: String!
    $query: String!
  ) {
    translation(
      fromLanguage: $fromLanguage
      toLanguage: $toLanguage
      query: $query
    ) {
      to
    }
  }
`;

interface IDefinitionProps {
  fromLanguage: string;
  toLanguage: string;
  query: string;
}

// TODO: Enhance this with the additional definitions provided
const Definition: React.StatelessComponent<IDefinitionProps> = ({
  fromLanguage,
  toLanguage,
  query
}) => {
  return (
    <Query
      query={GET_TRANSLATION}
      variables={{ fromLanguage, toLanguage, query }}
    >
      {({ loading, error, data }) => {
        if (loading) {
          return <CircularProgress />;
        }
        if (error) {
          return `Error!: ${error}`;
        }

        if (data.translation.length) {
          return <span>{data.translation[0].to}</span>;
        }

        return null;
      }}
    </Query>
  );
};

export default Definition;
