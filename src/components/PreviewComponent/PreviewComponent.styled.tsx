import { Stylish } from '@core'

export const SPreviewComponent = Stylish('div', {
  marginBottom: 'l',
  border: 'main',
  borderColor: 'grey10',
  borderRadius: 'm',
})

export const SPreviewComponentContent = Stylish('div', {
  display: 'flex',
  width: '100%',
  padding: 'l',

  '> * + *': {
    marginTop: 's',
  },
})

export const SPreviewComponentSource = Stylish('div', {
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
