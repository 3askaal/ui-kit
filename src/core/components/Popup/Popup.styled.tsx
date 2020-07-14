import { Stylish } from '../../utils'

export const SPopupWrapper = Stylish('div', {
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

export const SPopupCloser = Stylish('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'overlay',
})

export const SPopup = Stylish('div', {
  position: 'relative',
  border: 'main',
  margin: '20px',
  width: '100%',
  zIndex: 100,
  borderRadius: 's',
  overflow: 'hidden',
  maxWidth: '420px',
})

export const SPopupHeader = Stylish('div', {
  display: 'flex',
  borderBottom: 'main',
  backgroundColor: 'primary',
  color: 'black',
})

export const SPopupHeaderContent = Stylish('div', {
  flexGrow: 1,
  padding: 's',
})

export const SPopupContent = Stylish('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 'm',
})

export const SPopupCloseButton = Stylish('div', {
  padding: 's',
  cursor: 'pointer',
})
