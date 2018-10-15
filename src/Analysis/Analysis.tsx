import * as React from 'react';
import { Query } from 'react-apollo';
import { RouteComponentProps } from 'react-router';

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
import Definition from './Definition';

import { GET_ARTICLE, IArticleData } from 'src/ReadingView/ReadingView';
import { ISentenceData } from 'src/ReadingView/Sentence';

type IAnalysisProps = WithStyles<typeof styles> &
  RouteComponentProps<{ articleId: string }>;

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
  match,
  classes
}) => {
  return (
    <Query query={GET_ARTICLE} variables={{ id: match.params.articleId }}>
      {({ loading, data, error }) => {
        if (loading || error) {
          return null;
        }

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
                {Array.from(processData(data!.article), ([key, value]) => {
                  return (
                    <TableRow key={key}>
                      <TableCell component="th" scope="row">
                        {key}
                      </TableCell>
                      <TableCell>
                        {value.words.map(
                          word =>
                            word.value === key ? (
                              <span>
                                <em>{`${word.value} `}</em>
                              </span>
                            ) : (
                              <span>{`${word.value} `}</span>
                            )
                        )}
                      </TableCell>
                      <TableCell>
                        <Definition
                          query={key}
                          fromLanguage={data!.article.fromLanguage}
                          toLanguage={data!.article.toLanguage}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
        );
      }}
    </Query>
  );
};

export default withStyles(styles)(Analysis);

const processData = (article: IArticleData) => {
  // Get all the sentences
  const sentencesWithUnknowns = flatten(
    article.paragraphs.map(para => para.sentences)
  ).filter(sentence => sentence.words.some(word => word.unknown));

  const unknownWordMap = new Map<string, ISentenceData>();

  // This feels like it's just a reduce
  sentencesWithUnknowns.forEach(sentence => {
    const unknownWords = sentence.words.filter(word => word.unknown);

    unknownWords.forEach(word => unknownWordMap.set(word.value, sentence));
  });

  return unknownWordMap;
};
