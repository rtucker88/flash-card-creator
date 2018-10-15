import * as React from 'react';
import { compose } from 'recompose';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { Link, RouteComponentProps } from 'react-router-dom';

import {
  createStyles,
  Theme,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import PaperLayout from '../PaperLayout';
import Paragraph, { IParagraphData } from './Paragraph';

export const GET_ARTICLE = gql`
  query Article($id: ID!) {
    article(id: $id) {
      title
      id
      fromLanguage
      toLanguage
      paragraphs {
        sentences {
          words {
            value
            unknown
            id
          }
          id
        }
        id
      }
    }
  }
`;

const styles = (theme: Theme) =>
  createStyles({
    button: {
      marginLeft: theme.spacing.unit,
      marginTop: theme.spacing.unit * 3
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end'
    },
    nextLink: {
      textDecoration: 'none'
    }
  });

type ICombinedReadingViewProps = WithStyles<typeof styles> &
  RouteComponentProps<{ articleId: string }>;

interface IReadingViewData {
  article: IArticleData;
}

export interface IArticleData {
  title: string;
  paragraphs: IParagraphData[];
}

const ReadingView: React.StatelessComponent<ICombinedReadingViewProps> = ({
  classes,
  match
}) => {
  return (
    <Query<IReadingViewData>
      query={GET_ARTICLE}
      variables={{ id: match.params.articleId }}
    >
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
              {data!.article.title}
            </Typography>
            <Grid container={true} spacing={24}>
              <Grid item={true} sm={12}>
                {data!.article.paragraphs.map((paragraph: any) => {
                  return <Paragraph key={paragraph.id} paragraph={paragraph} />;
                })}
              </Grid>
            </Grid>
            <div className={classes.buttons}>
              <Link
                to={`/analysis/${match.params.articleId}`}
                className={classes.nextLink}
              >
                <Button
                  color="primary"
                  className={classes.button}
                  variant="contained"
                >
                  Finish Reading
                </Button>
              </Link>
            </div>
          </PaperLayout>
        );
      }}
    </Query>
  );
};

const enhance = compose<ICombinedReadingViewProps, {}>(withStyles(styles));

export default enhance(ReadingView);
