import React from 'react'
import { render } from '@tests'
import { List } from '@core'

describe('List', () => {
  test('renders', () => {
    render(<List />)
  })

  test('renders with title', () => {
    render(<List title="test" />)
  })
})
