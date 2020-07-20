import { styled } from '@core'

export const SPreviewComponent = styled.div({
  marginBottom: 'l',
  border: 'main',
  borderColor: 'grey10',
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

export const SPreviewComponentSource = styled.div({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'code',
  fontFamily: 'code',
  width: '100%',
  lineHeight: 1.25,
  overflow: 'auto',

  '*': {
    fontSize: '.8rem !important',
  },

  '> pre': {
    margin: '0 !important',
    padding: 's',
  },
})
