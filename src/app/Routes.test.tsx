import React from 'react'
import { render } from '@tests'
import { Routes } from './Routes'

describe('Sitewrapper', () => {
  test('renders components view', () => {
    const { queryByTestId } = render(<Routes />, {
      history: ['/'],
    })

    expect(queryByTestId('home-view')).toBeTruthy()
  })

  test('renders components view', () => {
    const { queryByTestId } = render(<Routes />, {
      history: ['/components'],
    })

    expect(queryByTestId('components-view')).toBeTruthy()
  })

  test('renders guides view', () => {
    const { queryByTestId } = render(<Routes />, {
      history: ['/guides'],
    })

    expect(queryByTestId('guides-view')).toBeTruthy()
  })
})
