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

import {
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Typography
} from '@material-ui/core';
import gql from 'graphql-tag';
import { Mutation, MutationFn, MutationUpdaterFn } from 'react-apollo';
import { GET_ARTICLE } from 'src/ReadingView/ReadingView';

import PaperLayout from '../PaperLayout';

import { GET_ARTICLES } from 'src/ListView/ListView';

const CREATE_ARTICLE = gql`
  mutation CreateArticle(
    $title: String!
    $content: String!
    $fromLanguage: String!
    $toLanguage: String!
  ) {
    createArticle(
      title: $title
      authorEmail: "rtucker88@gmail.com"
      fromLanguage: $fromLanguage
      toLanguage: $toLanguage
      content: $content
    ) {
      createdAt
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
      marginBottom: 'auto',
      marginTop: 'auto'
    },
    footer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: theme.spacing.unit
    },
    footerEnd: {
      alignSelf: 'flex-end'
    },
    footerStart: {
      alignSelf: 'flex-start'
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120
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
  fromLanguage: string;
  text: string;
  title: string;
  toLanguage: string;
}

interface IArticleUploadStateHandlers {
  setFromLanguage: (text: string) => void;
  setText: (text: string) => void;
  setTitle: (text: string) => void;
  setToLanguage: (text: string) => void;
}

const withText = withState('text', 'setText', '');
const withTitle = withState('title', 'setTitle', '');
const withFromLanguage = withState('fromLanguage', 'setFromLanguage', '');
const withToLanguage = withState('toLanguage', 'setToLanguage', '');

const enhance = compose<ICombinedProps, {}>(
  withFromLanguage,
  withToLanguage,
  withText,
  withTitle,
  withStyles(styles)
);

type ICombinedProps = IArticleUploadState &
  IArticleUploadStateHandlers &
  WithStyles<typeof styles>;

interface IArticlesData {
  articles: [
    {
      id: string;
      createdAt: string;
      title: string;
    }
  ];
}

const updateCreateArticle: MutationUpdaterFn = (cache, { data }) => {
  cache.writeQuery({
    data: { article: data!.createArticle },
    query: GET_ARTICLE,
    variables: {
      id: data!.createArticle.id
    }
  });

  const getArticlesData = cache.readQuery<IArticlesData>({
    query: GET_ARTICLES
  });

  const { createdAt, id, title } = data!.createArticle;
  const updatedArticles = [
    ...getArticlesData!.articles,
    { id, createdAt, title }
  ];

  cache.writeQuery({
    data: { articles: updatedArticles },
    query: GET_ARTICLES
  });
};

const ArticleUpload: React.StatelessComponent<ICombinedProps> = ({
  classes,
  text,
  setText,
  title,
  setTitle,
  fromLanguage,
  setFromLanguage,
  toLanguage,
  setToLanguage
}) => (
  <Mutation mutation={CREATE_ARTICLE} update={updateCreateArticle}>
    {(createArticle, { called, loading, data }) => (
      <PaperLayout>
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
        <div className={classes.footer}>
          <div className={classes.footerStart}>
            <FormControl className={classes.formControl}>
              <InputLabel
                required={true}
                shrink={true}
                htmlFor="from-label-placeholder"
              >
                From
              </InputLabel>
              <Select
                required={true}
                value={fromLanguage}
                input={<Input name="from" id="from-label-placeholder" />}
                displayEmpty={true}
                onChange={onFromLanguageChange(setFromLanguage)}
                name="from"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'DE'}>German</MenuItem>
                <MenuItem value={'EN'}>English</MenuItem>
                <MenuItem value={'FR'}>French</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel
                required={true}
                shrink={true}
                htmlFor="to-label-placeholder"
              >
                To
              </InputLabel>
              <Select
                required={true}
                value={toLanguage}
                input={<Input name="to" id="to-label-placeholder" />}
                displayEmpty={true}
                onChange={onToLanguageChange(setToLanguage)}
                name="to"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'DE'}>German</MenuItem>
                <MenuItem value={'EN'}>English</MenuItem>
                <MenuItem value={'FR'}>French</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className={classes.footerEnd}>
            <Button
              className={classes.button}
              onClick={onCreateArticle(
                createArticle,
                title,
                text,
                fromLanguage,
                toLanguage
              )}
              variant="contained"
              color="primary"
              disabled={loading}
            >
              Create Article
            </Button>
          </div>
        </div>
        {!loading && called ? (
          <Redirect to={`/reading/${data!.createArticle.id}`} />
        ) : null}
      </PaperLayout>
    )}
  </Mutation>
);

const onTextChange = (setText: (text: string) => void) => (
  event: React.ChangeEvent<HTMLInputElement>
) => setText(event.currentTarget.value);
const onTitleChange = (setTitle: (title: string) => void) => (
  event: React.ChangeEvent<HTMLInputElement>
) => setTitle(event.currentTarget.value);
const onFromLanguageChange = (setFromLanguage: ((text: string) => void)) => (
  event: React.ChangeEvent<HTMLSelectElement>,
  _: React.ReactNode
) => setFromLanguage(event.target.value);
const onToLanguageChange = (setToLanguage: ((text: string) => void)) => (
  event: React.ChangeEvent<HTMLSelectElement>,
  _: React.ReactNode
) => setToLanguage(event.target.value);

const onCreateArticle = (
  createArticle: MutationFn,
  title: string,
  content: string,
  fromLanguage: string,
  toLanguage: string
) => (_: React.MouseEvent<HTMLButtonElement>) => {
  createArticle({ variables: { title, content, fromLanguage, toLanguage } });
};

export default enhance(ArticleUpload);
