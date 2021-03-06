import styledComponents from 'styled-components'
import { css } from '@styled-system/css'
import { forOwn, get, mapValues, wrap } from 'lodash'
import deepmerge from 'deepmerge'
// import { resolveStylePropOnChildren } from './children'

function resolveInputType(styles: any, props: any) {
  if (typeof styles === 'function') {
    return css(styles(props))
  }

  return css(styles)
}

export const styledWrapper = (
  props: any,
  defaultStyles?: any,
  variants?: any,
  sRef?: string,
) => {
  const newProps = { ...props }
  const themeStyles = get(props?.theme?.components, sRef || newProps.sRef)

  const styleFunctions: any[] = []

  // if (newProps.children) {
  //   newProps.children = resolveStylePropOnChildren(
  //     newProps.children,
  //     newProps.s,
  //   )
  // }

  if (defaultStyles) {
    styleFunctions.push(resolveInputType(defaultStyles, newProps))
  }

  if (themeStyles?.default) {
    styleFunctions.push(resolveInputType(themeStyles.default, newProps))
  }

  const mergedVariants = deepmerge(variants, themeStyles?.variants || {})

  forOwn(mergedVariants, (variantStyle: any, variantKey: string) => {
    if (newProps[variantKey]) {
      styleFunctions.push(resolveInputType(variantStyle, newProps))
    }
  })

  if (newProps.s) {
    styleFunctions.push(resolveInputType({ '&&&': newProps.s }, newProps))
  }

  return styleFunctions
}

export const styled: any = mapValues(
  styledComponents,
  (value: () => any): any => {
    return wrap(value, (func: any, ...declProps) => {
      return func((props: any) => {
        return styledWrapper(props, ...declProps)
      })
    })
  },
)
