import styled from 'styled-components'

export const SPreview = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  marginBottom: theme.space.l,

  ':first-child': {
    marginBottom: theme.space.s,
  },
}))
