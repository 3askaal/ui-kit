import shortid from 'shortid'

export function keyGen() {
  return shortid.generate()
}
