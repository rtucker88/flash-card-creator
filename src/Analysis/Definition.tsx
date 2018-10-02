import * as React from 'react';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import { CircularProgress } from '@material-ui/core';

const GET_DEFINITION = gql`
  query GetDefinition($word: String!) {
    getDefinitions(word: $word) {
      to
    }
  }
`;

interface IDefinitionProps {
  word: string;
}

// TODO: Enhance this with the additional definitions provided
const Definition: React.StatelessComponent<IDefinitionProps> = ({ word }) => {
  return (
    <Query query={GET_DEFINITION} variables={{ word }}>
      {({ loading, error, data }) => {
        if (loading) {
          return <CircularProgress />;
        }
        if (error) {
          return `Error!: ${error}`;
        }

        if (data.getDefinitions.length) {
          return <span>{data.getDefinitions[0].to}</span>;
        }

        return null;
      }}
    </Query>
  );
};

export default Definition;
