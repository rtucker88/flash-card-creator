import * as React from 'react';
import { compose, withState } from 'recompose';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {
  createStyles,
  Theme,
  WithStyles,
  withStyles
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Redirect } from 'react-router-dom';

import { Paper, Typography } from '@material-ui/core';
import gql from 'graphql-tag';
import { Mutation, MutationFn, MutationUpdaterFn } from 'react-apollo';
import { GET_ARTICLE } from 'src/ReadingView/ReadingView';

const CREATE_ARTICLE = gql`
  mutation CreateArticle($title: String!, $content: String!) {
    createArticle(
      title: $title
      authorEmail: "rtucker88@gmail.com"
      fromLanguage: "DE"
      toLanguage: "EN"
      content: $content
    ) {
      title
      id
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
    layout: {
      marginLeft: theme.spacing.unit * 2,
      marginRight: theme.spacing.unit * 2,
      width: 'auto',
      [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 600
      }
    },
    nextLink: {
      textDecoration: 'none'
    },
    paper: {
      marginBottom: theme.spacing.unit * 3,
      marginTop: theme.spacing.unit * 3,
      padding: theme.spacing.unit * 2,
      [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
        marginBottom: theme.spacing.unit * 6,
        marginTop: theme.spacing.unit * 6,
        padding: theme.spacing.unit * 3
      }
    }
  });

interface IArticleUploadState {
  text: string;
  title: string;
}

interface IArticleUploadStateHandlers {
  setText: (text: string) => void;
  setTitle: (text: string) => void;
}

const withText = withState('text', 'setText', '');
const withTitle = withState('title', 'setTitle', '');

const enhance = compose<ICombinedProps, {}>(
  withText,
  withTitle,
  withStyles(styles)
);

type ICombinedProps = IArticleUploadState &
  IArticleUploadStateHandlers &
  WithStyles<typeof styles>;

const updateCreateArticle: MutationUpdaterFn = (cache, { data }) => {
  cache.writeQuery({
    data: { article: data!.createArticle },
    query: GET_ARTICLE,
    variables: {
      id: data!.createArticle.id
    }
  });
};

const ArticleUpload: React.StatelessComponent<ICombinedProps> = ({
  classes,
  text,
  setText,
  title,
  setTitle
}) => (
  <Mutation mutation={CREATE_ARTICLE} update={updateCreateArticle}>
    {(createArticle, { called, loading, data }) => (
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="title" gutterBottom={true}>
            Add an Article
          </Typography>
          <Grid container={true} spacing={24}>
            <Grid item={true} xs={12} sm={12}>
              <TextField
                required={true}
                fullWidth={true}
                id="title"
                name="title"
                label="Title"
                value={title}
                onChange={onTitleChange(setTitle)}
              />
            </Grid>
            <Grid item={true} xs={12} sm={12}>
              <TextField
                multiline={true}
                rows={20}
                fullWidth={true}
                required={true}
                id="article"
                name="article"
                label="Article"
                variant="outlined"
                value={text}
                onChange={onTextChange(setText)}
              />
            </Grid>
          </Grid>
          <div className={classes.buttons}>
            <Button
              onClick={onCreateArticle(createArticle, title, text)}
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={loading}
            >
              Create Article
            </Button>
          </div>
        </Paper>
        {!loading && called ? (
          <Redirect to={`/reading/${data!.createArticle.id}`} />
        ) : null}
      </main>
    )}
  </Mutation>
);

const onTextChange = (setText: (text: string) => void) => (
  event: React.ChangeEvent<HTMLInputElement>
) => setText(event.currentTarget.value);
const onTitleChange = (setTitle: (title: string) => void) => (
  event: React.ChangeEvent<HTMLInputElement>
) => setTitle(event.currentTarget.value);
const onCreateArticle = (
  createArticle: MutationFn,
  title: string,
  content: string
) => (_: React.MouseEvent<HTMLButtonElement>) =>
  createArticle({ variables: { title, content } });

export default enhance(ArticleUpload);
