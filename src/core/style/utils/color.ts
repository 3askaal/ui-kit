import chroma from 'chroma-js'

export function darken (color: string, amount: number = 0.2) {
  return chroma(color).darken(amount).hex()
}

export function brighten (color: string, amount: number = 0.2) {
  return chroma(color).brighten(amount).hex()
}

export function rgba (color: string, amount: number = 0.2) {
  return chroma(color).alpha(amount).hex()
}

export function mix (firstColor: string, secondColor: string, amount?: number) {
  return chroma.mix(firstColor, secondColor, amount).hex()
}
