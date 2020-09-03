import uniqid from 'uniqid'

export function keyGen(value?: any) {
  return uniqid(value)
}
