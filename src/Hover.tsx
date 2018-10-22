import * as React from 'react';

import { PopperProps } from '@material-ui/core/Popper';

interface IHoverProps {
  children: (props: IHoverState) => React.ReactNode;
  timeout: number;
}

interface IHoverState {
  anchorEl: PopperProps['anchorEl'];
  hoverValid: boolean;
}

export default class Hover extends React.Component<IHoverProps, IHoverState> {
  private timeout: NodeJS.Timer;

  constructor(props: IHoverProps) {
    super(props);

    this.state = {
      anchorEl: null,
      hoverValid: false
    };
  }

  public componentWillUnmount = () => {
    clearTimeout(this.timeout);
  };

  public render() {
    const { children } = this.props;

    return (
      <span
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {children(this.state)}
      </span>
    );
  }

  private handleMouseEnter = (event: React.MouseEvent) => {
    const { timeout } = this.props;

    event.persist();

    const { currentTarget } = event;

    this.timeout = setTimeout(() => {
      this.setState({
        anchorEl: currentTarget,
        hoverValid: true
      });
    }, timeout);
  };

  private handleMouseLeave = () => {
    clearTimeout(this.timeout);

    this.setState({
      anchorEl: null,
      hoverValid: false
    });
  };
}
