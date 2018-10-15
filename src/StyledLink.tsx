import * as React from 'react';
import { Link, LinkProps } from 'react-router-dom';

import * as classNames from 'classnames';

import {
  createStyles,
  Theme,
  WithStyles,
  withStyles
} from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      textDecoration: 'none'
    }
  });

type IStyledLinkProps = WithStyles<typeof styles> & LinkProps;

const StyledLink: React.StatelessComponent<IStyledLinkProps> = ({
  classes,
  className,
  ...props
}) => <Link className={classNames(classes.root, className)} {...props} />;

export default withStyles(styles)(StyledLink);
