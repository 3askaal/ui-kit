import React from 'react'
import { render } from '@tests'
import { ListItem } from '@core'

describe('ListItem', () => {
  test('renders', () => {
    render(<ListItem />)
  })

  test('renders as link', () => {
    render(<ListItem href="/" />)
  })
})
