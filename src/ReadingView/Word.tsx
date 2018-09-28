import * as React from 'react';

import * as classNames from 'classnames';

import {
  createStyles,
  Theme,
  WithStyles,
  withStyles
} from '@material-ui/core/styles';
import { compose, onlyUpdateForKeys } from 'recompose';

interface IWordProps {
  onClick: () => void;
  unknown: boolean;
  word: string;
}

const styles = (theme: Theme) =>
  createStyles({
    unknown: {
      backgroundColor: 'pink'
    }
  });

type IWordCombinedProps = IWordProps & WithStyles<typeof styles>;

const Word: React.StatelessComponent<IWordCombinedProps> = ({
  classes,
  onClick,
  unknown,
  word
}) => {
  return (
    <>
      <span
        onClick={onClick}
        className={classNames({
          [classes.unknown]: unknown
        })}
      >
        {word}
      </span>
      <span> </span>
    </>
  );
};

const enhance = compose<IWordCombinedProps, IWordProps>(
  withStyles(styles),
  onlyUpdateForKeys(['word', 'unknown'])
);

export default enhance(Word);
