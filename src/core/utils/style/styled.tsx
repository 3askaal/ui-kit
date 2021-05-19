import styledComponents from 'styled-components'
import { css } from '@styled-system/css'
import { forOwn, get, mapValues, wrap } from 'lodash'
import deepmerge from 'deepmerge'
import { resolveChildrenStyling } from './children'

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
  const inlineProps = { ...props }
  const themeStyles = get(props?.theme?.components, sRef || inlineProps.sRef)

  const styleFunctions: any[] = []

  if (inlineProps.children && inlineProps.debug) {
    inlineProps.children = resolveChildrenStyling(
      inlineProps.children,
      inlineProps.s,
    )
  }

  if (defaultStyles) {
    styleFunctions.push(resolveInputType(defaultStyles, inlineProps))
  }

  if (themeStyles?.default) {
    styleFunctions.push(resolveInputType(themeStyles.default, inlineProps))
  }

  const mergedVariants = deepmerge(variants, themeStyles?.variants || {})

  forOwn(mergedVariants, (variantStyle: any, variantKey: string) => {
    if (inlineProps[variantKey]) {
      styleFunctions.push(resolveInputType(variantStyle, inlineProps))
    }
  })

  if (inlineProps.s) {
    styleFunctions.push(resolveInputType({ '&&&': inlineProps.s }, inlineProps))
  }

  return styleFunctions
}

export const styled: any = mapValues(
  styledComponents,
  (value: () => any): any => wrap(value, (func: any, ...declProps) => {
    return func((props: any) => {
      return styledWrapper(props, ...declProps)
    })
  })
)
