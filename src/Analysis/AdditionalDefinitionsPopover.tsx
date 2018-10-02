import * as React from 'react';

import { StateHandler, StateHandlerMap, withStateHandlers } from 'recompose';

interface IGetDefinitionResult {
  text: string;
}

interface IAdditionalDefinitionsPopoverProps {
  definitions: IGetDefinitionResult[];
}

export interface IAdditionalDefinitionsPopoverState {
  isOpen: boolean;
}

export interface IAdditionalDefinitionsStateHandlers
  extends StateHandlerMap<IAdditionalDefinitionsPopoverState> {
  toggleIsOpen: StateHandler<IAdditionalDefinitionsPopoverState>;
}

const enhance = withStateHandlers<
  IAdditionalDefinitionsPopoverState,
  IAdditionalDefinitionsStateHandlers,
  IAdditionalDefinitionsPopoverProps
>(
  {
    isOpen: false
  },
  {
    toggleIsOpen: state => () => ({ isOpen: !state.isOpen })
  }
);

// tODO : Combine this, we will then be able to show other possibilities
type ICombinedProps = IAdditionalDefinitionsPopoverProps &
  IAdditionalDefinitionsPopoverState &
  IAdditionalDefinitionsStateHandlers;

const AdditionalDefinitionsPopover: React.StatelessComponent<
  ICombinedProps
> = ({ definitions, isOpen, toggleIsOpen }) => {
  return <div>Additional Definitions</div>;
  // return (<Popover
  //     id="more-definitions-popover"
  //     open={isOpen}
  //     anchorEl={}
  // ></Popover>)
};

export default enhance(AdditionalDefinitionsPopover);
