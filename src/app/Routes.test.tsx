import React from 'react'
import { render } from '@tests'
import { Routes } from './Routes'

describe('Sitewrapper', () => {
  test('renders components view', () => {
    const { queryByTestId } = render(<Routes />, {
      initialEntries: ['/'],
    })

    expect(queryByTestId('home-view')).toBeTruthy()
  })

  test('renders components view', () => {
    const { queryByTestId } = render(<Routes />, {
      initialEntries: ['/components'],
    })

    expect(queryByTestId('components-view')).toBeTruthy()
  })

  test('renders guides view', () => {
    const { queryByTestId } = render(<Routes />, {
      initialEntries: ['/guides'],
    })

    expect(queryByTestId('guides-view')).toBeTruthy()
  })
})
