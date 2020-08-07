import { styled } from '@core'

export const SPreviewComponent = styled.div({
  marginBottom: 'l',
  border: 'main',
  borderColor: 'grey30',
  borderRadius: 'm',
})

export const SPreviewComponentContent = styled.div({
  display: 'flex',
  width: '100%',
  padding: 'l',

  '> * + *': {
    marginTop: 's',
  },
})
