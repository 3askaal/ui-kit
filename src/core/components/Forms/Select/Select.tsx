import React, { ReactElement, FC, useState } from 'react'
import { map, find, filter, findIndex } from 'lodash'
import { ChevronDown as ChevronDownIcon } from 'react-feather'
import { SSelect, SSelectWrapper, SSelectIcon } from './Select.styled'
import { keyGen } from '../../../utils'

interface SelectOptionProps {
  label: string
  value: any
  selected?: boolean
}

interface SelectProps {
  options: SelectOptionProps[]
  multiple?: boolean
  block?: boolean
  onChange?: any
  value?: any
}

function getSelectValue(items: any, multiple?: boolean): any {
  return multiple
    ? map(filter(items, 'selected'), 'value')
    : (find(items, 'selected') || {}).value
}

export const Select: FC<SelectProps> = ({
  options,
  multiple,
  block,
  onChange,
  value,
}: SelectProps): ReactElement => {
  const [items, setItems] = useState(options)
  const [currentValue, setCurrentValue] = useState(
    value || getSelectValue(items, multiple),
  )

  function onSelectChange(event: any) {
    const currentSelectedItemIndex: number = findIndex(
      items,
      (item: any) => JSON.stringify(item.value) === event.target.value,
    )
    let newItems = [...items]

    if (multiple) {
      newItems[currentSelectedItemIndex].selected = !newItems[
        currentSelectedItemIndex
      ].selected
    } else {
      newItems = newItems.map((item: any) => ({ ...item, selected: false }))
      newItems[currentSelectedItemIndex].selected = true
    }

    setItems([...newItems])
    const newValue = getSelectValue(newItems, multiple)
    setCurrentValue(newValue)
    if (onChange) onChange(newValue)
  }

  return (
    <SSelectWrapper sRef="Select_Wrapper" width={block && '100%'}>
      <SSelect
        sRef="Select"
        multiple={multiple}
        onChange={onSelectChange}
        value={currentValue}
        data-testid="select"
      >
        {options &&
          options.map((option: SelectOptionProps) => (
            <option
              value={option.value}
              key={keyGen()}
              data-testid="select-option"
            >
              {option.label}
            </option>
          ))}
      </SSelect>
      <SSelectIcon sRef="SelectIcon">
        <ChevronDownIcon />
      </SSelectIcon>
    </SSelectWrapper>
  )
}
