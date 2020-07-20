import { styled } from '../../../utils'
import { SCheckboxWrapper } from '../Checkbox/Checkbox.styled'

export const SCheckboxGroup = styled.div({
  [SCheckboxWrapper]: {
    marginBottom: 's',

    ':last-child': {
      marginBottom: 0,
    },
  },
})
