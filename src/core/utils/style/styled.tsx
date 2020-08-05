import styledComponents from 'styled-components'
import { css } from '@styled-system/css'
import { forOwn, get, mapValues, wrap } from 'lodash'
import deepmerge from 'deepmerge'
import { resolveStylePropOnChildren } from './children'

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
  const { theme, s: inlineStyles, sRef: sRefProp } = props
  const styleFunctions: any[] = []
  const themeStyles = get(theme.components, sRef || sRefProp)

  const newProps = { ...props }

  if (newProps.children) {
    newProps.children = resolveStylePropOnChildren(
      newProps.children,
      newProps.s,
    )
  }

  if (defaultStyles) {
    styleFunctions.push(resolveInputType(defaultStyles, newProps))
  }

  if (themeStyles && themeStyles.default) {
    styleFunctions.push(resolveInputType(themeStyles.default, newProps))
  }

  const mergedVariants = deepmerge(
    variants,
    (themeStyles && themeStyles.variants) || {},
  )

  forOwn(mergedVariants, (variantStyle: any, variantKey: string) => {
    if (newProps[variantKey]) {
      styleFunctions.push(resolveInputType(variantStyle, newProps))
    }
  })

  if (inlineStyles) {
    styleFunctions.push(resolveInputType({ '&&&': inlineStyles }, newProps))
  }

  return styleFunctions
}

export const styled: any = mapValues(
  styledComponents,
  (value: () => any): any => {
    return wrap(
      value,
      (func: any, defaultStyles?: any, variants?: any, sRef?: string) => {
        return func((props: any) => {
          return styledWrapper(props, defaultStyles, variants, sRef)
        })
      },
    )
  },
)
