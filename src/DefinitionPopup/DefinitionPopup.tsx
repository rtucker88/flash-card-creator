import * as React from 'react';

import {
  createStyles,
  Paper,
  Theme,
  WithStyles,
  withStyles
} from '@material-ui/core';
import Popper, { PopperProps } from '@material-ui/core/Popper';
import Definition from 'src/Analysis/Definition';

const styles = (theme: Theme) =>
  createStyles({
    paper: {
      maxWidth: 400,
      overflow: 'auto',
      padding: theme.spacing.unit
    }
  });

type IDefinitionPopupProps = WithStyles<typeof styles> & {
  anchorEl: PopperProps['anchorEl'];
  fromLanguage: string;
  id: string;
  open: boolean;
  query: string;
  toLanguage: string;
};

const DefinitionPopup: React.StatelessComponent<IDefinitionPopupProps> = ({
  anchorEl,
  classes,
  fromLanguage,
  id,
  open,
  query,
  toLanguage
}) => (
  <Popper id={id} open={open} anchorEl={anchorEl}>
    <Paper className={classes.paper}>
      <Definition
        fromLanguage={fromLanguage}
        toLanguage={toLanguage}
        query={query}
      />
    </Paper>
  </Popper>
);

export default withStyles(styles)(DefinitionPopup);
