import { Stylish } from '../../utils'

export const SMenuItem = Stylish(
  'div',
  {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    borderLeft: 'main',
    cursor: 'pointer',
    paddingX: 's',

    '@media (hover: hover)': {
      ':hover': {
        backgroundColor: 'primary',
      },
    },
  },
  {
    active: {
      backgroundColor: 'primary',
    },
  },
)
