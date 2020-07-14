import { Stylish } from '../../../utils'
import { SCheckboxWrapper } from '../Checkbox/Checkbox.styled'

export const SCheckboxGroup = Stylish('div', {
  [SCheckboxWrapper]: {
    marginBottom: 's',

    ':last-child': {
      marginBottom: 0,
    },
  },
})
