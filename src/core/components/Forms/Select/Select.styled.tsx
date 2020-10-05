import { styled } from '../../../utils'
import { FormElementReset } from '../reset'

export const SSelectWrapper = styled.div({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  padding: 0,
  cursor: 'pointer',
})

export const SSelect = styled.select(({ theme }: any) => ({
  ...FormElementReset,
  cursor: 'pointer',
  paddingRight: `calc(${theme.space.s} + 24px)`,
  width: '100%',
  color: 'primary',
  border: 'thick',
  borderColor: 'primary',
  borderRadius: 'm',
  padding: 's',

  '::-ms-expand': {
    display: 'none',
  },

  ':focus': {
    outline: 0,
  },
}))

export const SSelectIcon = styled.div({
  position: 'absolute',
  display: 'flex',
  color: 'primary',
  paddingX: 's',
  alignItems: 'center',
  right: 0,
  pointerEvents: 'none',
  height: '100%',

  svg: {
    maxWidth: '1rem',
    strokeWidth: 3,
    stroke: 'currentColor',
  },
})
