import React from 'react'
import { render } from '@tests'
import { Card } from '@core'
import { Preview } from './Preview'

describe('Preview', () => {
  test('Preview has title', () => {
    const { getByTestId } = render(
      <Preview title="title">
        <Card>Card</Card>
      </Preview>,
    )

    expect(getByTestId('preview-title')).toBeTruthy()
  })

  test('Preview has component', () => {
    const { queryAllByTestId } = render(
      <Preview>
        <Card>Card</Card>
      </Preview>,
    )

    expect(queryAllByTestId('preview-component').length).toBe(1)
  })

  test('Preview has multiple components', () => {
    const { queryAllByTestId } = render(
      <Preview>
        <Card>Card</Card>
        <Card>Card</Card>
        <Card>Card</Card>
      </Preview>,
    )

    expect(queryAllByTestId('preview-component').length).toBe(3)
  })
})
