import { filter, map } from 'lodash'
import React, { FC, ReactElement, useState } from 'react'
// import { keyGen } from 'utils'
import { SCheckboxGroup } from './CheckboxGroup.styled'
import { Checkbox, CheckboxProps } from '../Checkbox/Checkbox'
import { keyGen } from '../../../utils'

export interface CheckboxGroupProps {
  options: CheckboxProps[]
  onChange?: any
}

export const CheckboxGroup: FC<CheckboxGroupProps> = ({
  options,
  onChange,
}: CheckboxGroupProps): ReactElement => {
  const [items, setItems] = useState(options)

  function onChangeHandler(value: boolean, index: number) {
    const newItems = [...items]
    newItems[index].isChecked = value
    setItems(newItems)
    if (onChange) onChange(map(filter(options, 'checked'), 'value'))
  }

  return (
    <SCheckboxGroup sRef="CheckboxGroup">
      {(items &&
        items.length &&
        items.map((checkboxProps: any, index: number) => (
          <Checkbox
            {...checkboxProps}
            onChange={(value: boolean) => onChangeHandler(value, index)}
            key={keyGen()}
          />
        ))) ||
        null}
    </SCheckboxGroup>
  )
}
