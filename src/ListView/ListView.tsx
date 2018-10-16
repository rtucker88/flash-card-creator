import * as React from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

import gql from 'graphql-tag';

import {
  Button,
  createStyles,
  Divider,
  Theme,
  Tooltip,
  Typography,
  withStyles,
  WithStyles
} from '@material-ui/core';
import List from '@material-ui/core/List';
import { Add as AddIcon } from '@material-ui/icons';

import PaperLayout from '../PaperLayout';
import ListItem from './ListItem';

export const GET_ARTICLES = gql`
  {
    articles {
      title
      id
      createdAt
      fromLanguage
      toLanguage
    }
  }
`;

interface IListViewData {
  articles: [
    {
      id: string;
      title: string;
      createdAt: string;
      fromLanguage: string;
      toLanguage: string;
    }
  ];
}

const styles = (theme: Theme) =>
  createStyles({
    fab: {
      bottom: theme.spacing.unit * 2,
      position: 'absolute',
      right: theme.spacing.unit * 2
    }
  });

interface IListViewProps extends WithStyles<typeof styles> {}

const ListView: React.StatelessComponent<IListViewProps> = ({ classes }) => {
  return (
    <Query<IListViewData> query={GET_ARTICLES}>
      {({ loading, data, error }) => {
        if (loading) {
          return null;
        }
        if (error) {
          return null;
        }

        return (
          <PaperLayout>
            <Typography variant="title" gutterBottom={true}>
              Articles
            </Typography>
            <List>
              {data!.articles.map((article, idx) => (
                <React.Fragment key={article.id}>
                  <ListItem
                    id={article.id}
                    title={article.title}
                    createdAt={article.createdAt}
                    fromLanguage={article.fromLanguage}
                    toLanguage={article.toLanguage}
                  />
                  {idx !== data!.articles.length - 1 ? <Divider /> : null}
                </React.Fragment>
              ))}
            </List>
            <Link to="/upload">
              <Tooltip title="Add an Article">
                <Button
                  variant="fab"
                  color="primary"
                  aria-label="Add"
                  className={classes.fab}
                >
                  <AddIcon />
                </Button>
              </Tooltip>
            </Link>
          </PaperLayout>
        );
      }}
    </Query>
  );
};

export default withStyles(styles)(ListView);
