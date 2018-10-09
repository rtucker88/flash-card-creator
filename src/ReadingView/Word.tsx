import * as React from 'react';

import * as classNames from 'classnames';
import gql from 'graphql-tag';
import { Mutation, MutationFn } from 'react-apollo';

import {
  createStyles,
  Theme,
  WithStyles,
  withStyles
} from '@material-ui/core/styles';
import { compose, shouldUpdate } from 'recompose';

const UPDATE_UNKNOWN_WORD = gql`
  mutation UpdateUnknownWord($id: ID!, $isUnknown: Boolean!) {
    markWordUnknown(id: $id, unknown: $isUnknown) {
      value
      unknown
      id
    }
  }
`;

export interface IWordData {
  id: string;
  value: string;
  unknown: boolean;
}

interface IWordProps {
  word: IWordData;
}

const styles = (theme: Theme) =>
  createStyles({
    unknown: {
      backgroundColor: 'pink'
    }
  });

type IWordCombinedProps = IWordProps & WithStyles<typeof styles>;

const space = ' ';

const Word: React.StatelessComponent<IWordCombinedProps> = ({
  classes,
  word
}) => {
  return (
    <Mutation mutation={UPDATE_UNKNOWN_WORD} key={word.id}>
      {(markWordUnknown, { called, loading, data }) => (
        <>
          <span
            onClick={onWordClick(markWordUnknown, word)}
            className={classNames({
              [classes.unknown]: word.unknown
            })}
          >
            {word.value}
          </span>
          <span>{space}</span>
        </>
      )}
    </Mutation>
  );
};

const onWordClick = (
  markWordUnknown: MutationFn,
  { value, id, unknown }: IWordData
) => (_: React.MouseEvent<HTMLHtmlElement>) =>
  markWordUnknown({
    optimisticResponse: {
      __typename: 'Mutation',
      markWordUnknown: {
        __typename: 'Word',
        id,
        unknown: !unknown,
        value
      }
    },
    variables: { id, isUnknown: !unknown }
  });

const enhance = compose<IWordCombinedProps, IWordProps>(
  shouldUpdate<IWordProps>((props, nextProps) => {
    return props.word.unknown !== nextProps.word.unknown;
  }),
  withStyles(styles)
);

export default enhance(Word);
