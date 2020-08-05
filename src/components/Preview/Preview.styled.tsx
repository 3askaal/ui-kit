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

export const SPreviewTitle = styled.div<any>(({ theme }) => ({
  marginBottom: theme.space.l,
}))

export const SPreviewDescription = styled.div<any>(({ theme }) => ({
  marginBottom: theme.space.l,
}))
