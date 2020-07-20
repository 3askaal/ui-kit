import styledComponents from 'styled-components'
import { css } from '@styled-system/css'
import { forOwn, get, isArray, mapValues, wrap } from 'lodash'
import deepmerge from 'deepmerge'

function resolveInputType(styles: any, props: any) {
  if (typeof styles === 'function') {
    return css(styles(props))
  }

  return css(styles)
}

function passStylePropsToChildren(style: any, child: any) {
  if (child && child.sRef && style[child.sRef]) {
    return {
      ...child,
      style: style[child.sRef],
    }
  }

  return child
}

export const styledWrapper = (
  props: any,
  defaultStyles?: any,
  variantStyles?: any,
) => {
  const { theme, style: inlineStyles, sRef } = props
  const styleFunctions: any[] = []
  const themeStyles = get(theme.components, sRef)

  const newProps = { ...props }

  if (newProps.children) {
    if (isArray(newProps.children)) {
      newProps.children = newProps.children.map((child: any) =>
        passStylePropsToChildren(newProps.style, child),
      )
    } else {
      newProps.children = passStylePropsToChildren(
        newProps.style,
        newProps.children,
      )
    }
  }

  if (defaultStyles) {
    styleFunctions.push(resolveInputType(defaultStyles, newProps))
  }

  if (themeStyles && themeStyles.default) {
    styleFunctions.push(css(themeStyles.default))
  }

  const mergedVariants = deepmerge(
    variantStyles,
    (themeStyles && themeStyles.variants) || {},
  )

  forOwn(mergedVariants, (variantStyle: any, variantKey: string) => {
    if (newProps[variantKey]) {
      styleFunctions.push(css(variantStyle))
    }
  })

  if (inlineStyles) {
    styleFunctions.push(resolveInputType(inlineStyles, newProps))
  }

  return styleFunctions
}

export const styled: any = mapValues(
  styledComponents,
  (value: () => any): any => {
    return wrap(
      value,
      (func: any, defaultStyles?: any, variantStyles?: any) => {
        return func((props: any) => {
          return styledWrapper(props, defaultStyles, variantStyles)
        })
      },
    )
  },
)
