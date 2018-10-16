import * as React from 'react';

import { Paper } from '@material-ui/core';
import {
  createStyles,
  Theme,
  WithStyles,
  withStyles
} from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    layout: {
      marginLeft: theme.spacing.unit * 2,
      marginRight: theme.spacing.unit * 2,
      width: 'auto',
      [theme.breakpoints.up(900 + theme.spacing.unit * 2 * 2)]: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 900
      }
    },
    paper: {
      marginBottom: theme.spacing.unit * 3,
      marginTop: theme.spacing.unit * 3,
      padding: theme.spacing.unit * 2,
      [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
        marginBottom: theme.spacing.unit * 3,
        marginTop: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 3
      }
    }
  });

type IPaperLayoutProps = WithStyles<typeof styles>;

const PaperLayout: React.StatelessComponent<IPaperLayoutProps> = ({
  classes,
  children
}) => (
  <main className={classes.layout}>
    <Paper className={classes.paper}>{children}</Paper>
  </main>
);

export default withStyles(styles)(PaperLayout);
