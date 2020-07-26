import { styled } from '../../utils'

export const SMenuItem = styled.div({
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  borderLeft: 'main',
  borderColor: 'primary',
  cursor: 'pointer',
  paddingX: 's',

  '@media (hover: hover)': {
    ':hover': {
      backgroundColor: 'primaryDark',
      borderColor: 'primaryDark',
      color: 'white',
    },
  },
})
