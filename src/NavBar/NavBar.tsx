import * as React from 'react';

import AppBar from '@material-ui/core/AppBar';
import {
  createStyles,
  Theme,
  WithStyles,
  withStyles
} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const styles = (theme: Theme) =>
  createStyles({
    homeLink: {
      color: theme.palette.common.white,
      textDecoration: 'none'
    },
    root: {
      flexGrow: 1
    }
  });

interface INavBarProps extends WithStyles<typeof styles> {}

const NavBar: React.StatelessComponent<INavBarProps> = ({ classes }) => {
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Link to="/upload" className={classes.homeLink}>
            <Typography variant="title" color="inherit">
              Flashcard Creator
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(NavBar);
