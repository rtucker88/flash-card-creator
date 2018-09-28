import * as React from 'react';
import { IArticle, ISentence } from '../resources/article';

import { flatten } from 'lodash';

import {
  createStyles,
  Theme,
  WithStyles,
  withStyles
} from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// import { flatten } from 'lodash';

interface IAnalysisProps extends WithStyles<typeof styles> {
  article: IArticle;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
      width: '100%'
    },
    table: {
      minWidth: 700
    }
  });

const Analysis: React.StatelessComponent<IAnalysisProps> = ({
  article,
  classes
}) => {
  const data = processData(article);

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Word</TableCell>
            <TableCell>Sentence</TableCell>
            <TableCell>Definition</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from(data, ([key, value]) => {
            return (
              <TableRow key={key}>
                <TableCell component="th" scope="row">
                  {key}
                </TableCell>
                <TableCell>
                  {value.words.map(word => word.text).join(' ')}
                </TableCell>
                <TableCell />
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default withStyles(styles)(Analysis);

const processData = (article: IArticle) => {
  // Get all the sentences
  const sentencesWithUnknowns = flatten(
    article.paragraphs.map(para => para.sentences)
  ).filter(sentence => sentence.words.some(word => word.unknown));

  const unknownWordMap = new Map<string, ISentence>();

  // This feels like it's just a reduce
  sentencesWithUnknowns.forEach(sentence => {
    const unknownWords = sentence.words.filter(word => word.unknown);

    unknownWords.forEach(word => unknownWordMap.set(word.text, sentence));
  });

  return unknownWordMap;
};
