import * as React from 'react';
import { compose, withHandlers } from 'recompose';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { IArticle } from '../resources/article';

import Paragraph from './Paragraph';

import { Link } from 'react-router-dom';

import {
  createStyles,
  Paper,
  Theme,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core';

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
        width: 900
      }
    },
    nextLink: {
      textDecoration: 'none'
    },
    paper: {
      marginBottom: theme.spacing.unit * 3,
      marginTop: theme.spacing.unit * 3,
      padding: theme.spacing.unit * 2,
      [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
        marginBottom: theme.spacing.unit * 6,
        marginTop: theme.spacing.unit * 6,
        padding: theme.spacing.unit * 3
      }
    }
  });

interface IReadingViewProps {
  article: IArticle;
  onWordClick: (paragraph: number, sentence: number, word: number) => void;
}

type ICombinedReadingViewProps = IReadingViewProps &
  IReadingViewHandlers &
  WithStyles<typeof styles>;

const ReadingView: React.StatelessComponent<ICombinedReadingViewProps> = ({
  article,
  classes,
  handleWordClick
}) => {
  return (
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Typography variant="title" gutterBottom={true}>
          {article.title}
        </Typography>
        <Grid container={true} spacing={24}>
          <Grid item={true} sm={12}>
            {article.paragraphs.map((paragraph, pIdx) => {
              return (
                <Paragraph
                  key={pIdx}
                  paragraph={paragraph}
                  onWordClick={handleWordClick(pIdx)}
                />
              );
            })}
          </Grid>
        </Grid>
        <div className={classes.buttons}>
          <Link to="/analysis" className={classes.nextLink}>
            <Button
              color="primary"
              className={classes.button}
              variant="contained"
            >
              Finish Reading
            </Button>
          </Link>
        </div>
      </Paper>
    </main>
  );
};

interface IReadingViewHandlers {
  handleWordClick: (
    paragraph: number
  ) => (sentence: number, word: number) => void;
}

const enhance = compose<ICombinedReadingViewProps, IReadingViewProps>(
  withStyles(styles),
  withHandlers<IReadingViewProps, IReadingViewHandlers>({
    handleWordClick: ({ onWordClick }) => (paragraph: number) => (
      sentence: number,
      word: number
    ) => {
      onWordClick(paragraph, sentence, word);
    }
  })
);

export default enhance(ReadingView);
