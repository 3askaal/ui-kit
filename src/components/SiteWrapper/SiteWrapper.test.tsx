import React from 'react'
import { render } from '@tests'
import { SiteWrapper } from '@components'

describe('Sitewrapper', () => {
  test('has no sidebar & wrapper', () => {
    const { queryByTestId } = render(<SiteWrapper />)
    expect(queryByTestId('sidebar')).toBeNull()
  })

  test('has sidebar & wrapper', () => {
    const { queryByTestId } = render(<SiteWrapper />, {
      initialEntries: ['/guides'],
    })

    expect(queryByTestId('sidebar')).toBeTruthy()
    expect(queryByTestId('wrapper')).toBeTruthy()
  })
})
