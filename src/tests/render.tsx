import React from 'react'
import { render } from '@testing-library/react'
import { theme } from '@core'
import { MemoryRouter } from 'react-router-dom'
import { AppWrapper } from '../app/AppWrapper'

export default (
  ui: any,
  { history, theme: mockedTheme, ...options }: any = {},
) =>
  render(
    <AppWrapper theme={{ ...theme, ...mockedTheme }}>
      <MemoryRouter initialEntries={history} initialIndex={0}>
        {ui}
      </MemoryRouter>
    </AppWrapper>,
    options,
  )
