import { Stylish } from '../../../utils'

export const SInput = Stylish(
  'input',
  {
    display: 'flex',
    border: 'thick',
    color: 'primary',
    borderColor: 'primary',
    borderRadius: 'm',
    padding: 's',
    backgroundColor: 'transparent',
    minWidth: '200px',

    ':focus': {
      outline: 0,
    },

    outline: 'none',
    '-webkit-box-shadow': 'none',
    '-moz-box-shadow': 'none',
    'box-shadow': 'none',
    resize: 'none',
  },
  {
    isBlock: {
      width: '100%',
    },
    isNegative: {
      borderColor: 'negative',
      color: 'negative',
    },
    isPositive: {
      borderColor: 'positive',
      color: 'positive',
    },
  },
)
