import { styled } from '@core'

export const SHomeMenu = styled.div({
  display: 'flex',
  justifyContent: 'center',
  margin: 'm',

  '> *': {
    fontWeight: 'bold',
  },

  '> * + *': {
    ':before': {
      content: '""',
      marginX: 'm',
      borderLeft: 'thick',
      borderColor: 'primary',
    },
  },
})

export const SHome = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  height: '100vh',
})

export const SHomeBackground = styled.div({
  position: 'absolute',
  top: 0,
  right: 0,
  left: 0,
  margin: 'auto',
})
