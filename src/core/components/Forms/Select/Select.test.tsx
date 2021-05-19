import React from 'react'
import { render, fireEvent } from '@tests'
import { Select } from '@core'

describe('Select', () => {
  test('change', () => {
    const onChange = jest.fn()

    const { queryByTestId } = render(
      <Select
        options={[
          { label: 'Option 1', value: 1 },
          { label: 'Option 2', value: 2 },
          { label: 'Option 3', value: 3 },
          { label: 'Option 4', value: 4 },
        ]}
        onChange={onChange}
      />,
    )

    const select = queryByTestId('select')
    fireEvent.change(select, { target: { value: 1 } })
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith(2)
  })

  test('change multiple', () => {
    const onChange = jest.fn()

    const { queryByTestId } = render(
      <Select
        options={[
          { label: 'Option 1', value: 1 },
          { label: 'Option 2', value: 2 },
          { label: 'Option 3', value: 3 },
          { label: 'Option 4', value: 4 },
        ]}
        multi
        onChange={onChange}
      />,
    )

    const select = queryByTestId('select')
    fireEvent.change(select, { target: { value: 0 } })
    fireEvent.change(select, { target: { value: 1 } })
    expect(onChange).toHaveBeenCalledTimes(2)
    expect(onChange).toHaveBeenCalledWith([1, 2])
  })
})
