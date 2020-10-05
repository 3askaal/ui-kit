import { styled } from '../../utils'

export const SPopupWrapper = styled.div({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  margin: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 'm',
  zIndex: 9999,
})

export const SPopupCloser = styled.div({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'misc.overlay',
  cursor: 'pointer'
})

export const SPopup = styled.div({
  position: 'relative',
  width: '100%',
  borderRadius: 'm',
  overflow: 'hidden',
  backgroundColor: 'white',
  maxWidth: '640px',
})

export const SPopupHeader = styled.div({
  display: 'flex',
  borderBottom: 'main',
  color: 'primary',
  alignItems: 'center'
})

export const SPopupHeaderContent = styled.div({
  flexGrow: 1,
  paddingY: 's',
  paddingX: 'm',
  alignItems: 'center'
})

export const SPopupContent = styled.div({
  display: 'flex',
  paddingY: 's',
  paddingX: 'm',
})

export const SPopupFooter = styled.div({
  display: 'flex',
  paddingY: 's',
  paddingX: 'm',
})

export const SPopupCloseButton = styled.div({
  cursor: 'pointer',
  paddingX: 's'
})
