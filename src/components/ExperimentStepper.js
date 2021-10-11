import { useState } from 'react';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button
} from '@mui/material';

import HypothesisPage from './hypthesis/HypothesisPage';
import Variables from './variables/VariablePage';
import PopulationPage from './population/PopulationPage';
import ConfoundPage from './confounds/ConfoundPage';

import { useTheme } from '@mui/material';
import Result from './Result';

const steps = ['Hypothesis', 'Variables', 'Sample', 'Potential confounds'];

const ExperimentStepper = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => setActiveStep(activeStep + 1);
  const handleBack = () => setActiveStep(activeStep - 1);
  const handleReset = () => setActiveStep(0);

  const StepHeader = () => (
    <Stepper
      activeStep={activeStep}
      sx={{ marginTop: theme.spacing(4), marginBottom: theme.spacing(4) }}
    >
      {steps.map((label, index) => (
        <Step key={index}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );

  const StepFooter = () => (
    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
      <Button
        variant="contained"
        disabled={activeStep === 0}
        onClick={handleBack}
        sx={{ mr: 1 }}
      >
        Back
      </Button>
      <Box sx={{ flex: '1 1 auto' }} />
      <Button onClick={handleNext} variant="contained">
        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
      </Button>
    </Box>
  );

  const StepBody = () => {
    switch (activeStep) {
      case 0:
        return <HypothesisPage />;
      case 1:
        return <Variables />;
      case 2:
        return <PopulationPage />;
      case 3:
        return <ConfoundPage />;
      default:
        return <PopulationPage />;
    }
  };

  const FinalPage = () => (
    <>
      <Result />
      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
        <Button variant="contained" onClick={handleBack}>Back</Button>
        <Box sx={{ flex: '1 1 auto' }} />
        <Button onClick={handleReset}>Reset</Button>
      </Box>
    </>
  );

  return (
    <Box sx={{ width: '100%' }}>
      <StepHeader />
      {activeStep === steps.length ? (
        <FinalPage />
      ) : (
        <>
          <StepBody />
          <StepFooter />
        </>
      )}
    </Box>
  );
};

export default ExperimentStepper;
