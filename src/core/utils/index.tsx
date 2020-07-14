import shortid from 'shortid'

export * from './stylish'

export function keyGen() {
  return shortid.generate()
}
