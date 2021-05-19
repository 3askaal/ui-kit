import React, { FC, ReactElement, ChangeEvent, useState } from 'react'
import {
  SCheckboxWrapper,
  SCheckbox,
  SCheckboxInput,
  SCheckboxIndicator,
  SCheckboxLabel,
} from './Checkbox.styled'

export interface CheckboxProps {
  value?: any
  label?: string
  isChecked?: boolean
  isDisabled?: boolean
  icon?: any
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox: FC<CheckboxProps> = ({
  onChange,
  isChecked: initialIsChecked,
  isDisabled,
  label,
  icon,
  ...props
}: CheckboxProps): ReactElement => {
  const [isChecked, setIsChecked]: any = useState(initialIsChecked || false)

  function onChangeHandler(event: any) {
    setIsChecked(event.target.checked)
    if (onChange) onChange(event.target.checked)
  }

  return (
    <SCheckboxWrapper
      sRef="_wrapper"
      isDisabled={isDisabled}
      data-testid="checkbox-label"
      {...props}
    >
      <SCheckbox sRef="_checkbox">
        <SCheckboxInput
          sRef="_input"
          type="checkbox"
          onChange={onChangeHandler}
          checked={isChecked}
          data-testid="checkbox"
        />
        <SCheckboxIndicator debug sRef="_indicator" isChecked={isChecked}>
          {icon || null}
        </SCheckboxIndicator>
      </SCheckbox>
      {label && <SCheckboxLabel sRef="_label">{label}</SCheckboxLabel>}
    </SCheckboxWrapper>
  )
}
