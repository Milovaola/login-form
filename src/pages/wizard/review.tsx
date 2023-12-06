import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import {
  commonLabelStyle,
  FORM_FIELD_LABELS,
  FORM_FIELDS,
} from '../../constants'
import { Button } from '../../components'
import { useFormState } from 'react-final-form'

const InfoRow: React.FC<{ label: string; value: string; mb?: number }> = ({
  label,
  value,
  mb = 6,
}) => (
  <Flex justifyContent="space-between" mb={mb}>
    <Text {...commonLabelStyle} color="#CECAEB">
      {label}
    </Text>
    <Text {...commonLabelStyle}>{value}</Text>
  </Flex>
)

InfoRow.displayName = 'InfoRow'

export const Review: React.FC<{ handleSubmit: () => void }> = ({
  handleSubmit,
}) => {
  const { values } = useFormState()

  return (
    <>
      <InfoRow
        value={values.username}
        label={FORM_FIELD_LABELS[FORM_FIELDS.USERNAME]}
      />
      <InfoRow
        value={values.email}
        label={FORM_FIELD_LABELS[FORM_FIELDS.EMAIL]}
      />
      <InfoRow
        value={values.phoneNumber}
        label={FORM_FIELD_LABELS[FORM_FIELDS.PHONE_NUMBER]}
      />
      <InfoRow
        mb={10}
        value={values.country}
        label={FORM_FIELD_LABELS[FORM_FIELDS.COUNTRY]}
      />
      <Button type="submit" onClick={handleSubmit}>
        {'Complete'}
      </Button>
    </>
  )
}

Review.displayName = 'Review'
