import * as React from 'react';

import {
  createStyles,
  Theme,
  WithStyles,
  withStyles
} from '@material-ui/core/styles';

import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Stepper from '@material-ui/core/Stepper';

import { Link } from 'react-router-dom';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '100%'
    }
  });

type IStepperProps = WithStyles<typeof styles> & {
  activeStep: number;
  articleId?: string;
};

const NavigationStepper: React.StatelessComponent<IStepperProps> = ({
  activeStep,
  articleId = '',
  classes
}) => (
  <div className={classes.root}>
    <Stepper nonLinear={true} activeStep={activeStep}>
      {steps.map((label, index) => {
        const ButtonLink = (props: any) => (
          <Link to={getLink(index, articleId)} {...props} />
        );

        return (
          <Step key={label}>
            <StepButton
              completed={index < activeStep}
              disabled={getDisabled(activeStep, index)}
              component={ButtonLink}
            >
              {label}
            </StepButton>
          </Step>
        );
      })}
    </Stepper>
  </div>
);

const steps = ['Creation', 'Reading', 'Analysis'];

const getLink = (index: number, id: string): string => {
  switch (index) {
    case 0:
      return '';
    case 1:
      return `/reading/${id}`;
    case 2:
      return `/analysis/${id}`;
    default:
      return '';
  }
};

const getDisabled = (activeStep: number, index: number): boolean => {
  if (activeStep === 0) {
    return index > 0;
  }

  return index === 0;
};

export default withStyles(styles)(NavigationStepper);
