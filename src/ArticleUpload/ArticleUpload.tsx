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
import { Link } from 'react-router-dom';

import { Paper, Typography } from '@material-ui/core';

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

interface IArticleUploadProps {
  onComplete: (text: string, title: string) => void;
}

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

const enhance = compose<ICombinedProps, IArticleUploadProps>(
  withText,
  withTitle,
  withStyles(styles)
);

type ICombinedProps = IArticleUploadProps &
  IArticleUploadState &
  IArticleUploadStateHandlers &
  WithStyles<typeof styles>;

const ArticleUpload: React.StatelessComponent<ICombinedProps> = ({
  classes,
  onComplete,
  text,
  setText,
  title,
  setTitle
}) => (
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
        <Link to="/reading" className={classes.nextLink}>
          <Button
            onClick={handleComplete(onComplete)(text, title)}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Create Article
          </Button>
        </Link>
      </div>
    </Paper>
  </main>
);

const onTextChange = (setText: (text: string) => void) => (
  event: React.ChangeEvent<HTMLInputElement>
) => setText(event.currentTarget.value);
const onTitleChange = (setTitle: (title: string) => void) => (
  event: React.ChangeEvent<HTMLInputElement>
) => setTitle(event.currentTarget.value);

const handleComplete = (onComplete: (text: string, title: string) => void) => (
  text: string,
  title: string
) => () => onComplete(text, title);

export default enhance(ArticleUpload);
