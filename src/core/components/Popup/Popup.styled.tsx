import { styled } from '../../utils'

export const SPopupWrapper = styled.div({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  padding: '20px',
  margin: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const SPopupCloser = styled.div({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'overlay',
})

export const SPopup = styled.div({
  position: 'relative',
  border: 'main',
  margin: '20px',
  width: '100%',
  zIndex: 100,
  borderRadius: 's',
  overflow: 'hidden',
  maxWidth: '420px',
})

export const SPopupHeader = styled.div({
  display: 'flex',
  borderBottom: 'main',
  backgroundColor: 'primary',
  color: 'black',
})

export const SPopupHeaderContent = styled.div({
  flexGrow: 1,
  padding: 's',
})

export const SPopupContent = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 'm',
})

export const SPopupCloseButton = styled.div({
  padding: 's',
  cursor: 'pointer',
})
