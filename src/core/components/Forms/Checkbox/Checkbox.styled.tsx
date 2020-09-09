import { styled } from '../../../utils'

export const SCheckbox = styled.div(
  {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '1.4rem',
    height: '1.4rem',
    flexShrink: 0,
    cursor: 'pointer',
    border: 'thick',
    color: 'currentColor',
    borderColor: 'currentColor',
    borderRadius: 'm',
    padding: 'xxs',
  },
  {},
  '_checkbox',
)

export const SCheckboxIndicator = styled.div(
  {
    width: '100%',
    height: '100%',
    borderRadius: '1px',
  },
  {
    isChecked: {
      backgroundColor: 'currentColor',
    },
  },
  '_indicator',
)

export const SCheckboxInput = styled.input(
  {
    display: 'none',
  },
  {},
  '_input',
)

export const SCheckboxLabel = styled.div(
  {
    marginLeft: 's',
  },
  {},
  '_label',
)

export const SCheckboxWrapper = styled.label(
  {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    color: 'primary',
  },
  {
    isDisabled: {
      opacity: 0.6,
      pointerEvents: 'none',
    },
  },
)
