import React, { useMemo } from 'react'
import { FORM_STEPS } from '../interfaces'
import { Box, BoxProps, Flex, Text } from '@chakra-ui/react'
import { STEP_LABELS } from '../constants'

enum STEPPER_ITEM_STATUS {
  COMPLETE = 'completed',
  CURRENT = 'current',
  NOT_FINISHED = 'notFinished',
}

const STEPPER_ITEM_STATUS_COLORS = {
  [STEPPER_ITEM_STATUS.COMPLETE]: '#87839F',
  [STEPPER_ITEM_STATUS.CURRENT]: '#5845DD',
  [STEPPER_ITEM_STATUS.NOT_FINISHED]: '#C9C5E8',
}
export const StepperItem: React.FC<{
  status: STEPPER_ITEM_STATUS
  label: string
}> = ({ status, label }) => (
  <Flex mb={5} alignItems="center">
    <Box
      w={4}
      h={4}
      borderRadius="2px"
      backgroundColor={STEPPER_ITEM_STATUS_COLORS[status]}
    />
    <Text color="#817CA5" fontSize="14px" ml={3}>
      {label}
    </Text>
  </Flex>
)

StepperItem.displayName = 'StepperItem'

const steps = [
  FORM_STEPS.INITIAL_INFO,
  FORM_STEPS.PASSWORD_SCREEN,
  FORM_STEPS.REVIEW,
]

export const getStatusForStep = (
  stepNumber: number,
  currentStepNumber: number
): STEPPER_ITEM_STATUS => {
  if (stepNumber > currentStepNumber) {
    return STEPPER_ITEM_STATUS.NOT_FINISHED
  } else if (stepNumber < currentStepNumber) {
    return STEPPER_ITEM_STATUS.COMPLETE
  } else {
    return STEPPER_ITEM_STATUS.CURRENT
  }
}

export const Stepper: React.FC<BoxProps & { currentStep: FORM_STEPS }> = ({
  currentStep,
  ...rest
}) => {
  const currentIndex = useMemo(() => steps.indexOf(currentStep), [currentStep])
  return (
    <Box {...rest}>
      {steps.map((step, index) => (
        <StepperItem
          key={index}
          status={getStatusForStep(index, currentIndex)}
          label={STEP_LABELS[step]}
        />
      ))}
    </Box>
  )
}

Stepper.displayName = 'Stepper'
