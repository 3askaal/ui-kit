import styled from 'styled-components'
import { css } from '@styled-system/css'
import { forOwn, get, isArray } from 'lodash'
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

export const Stylish = (
  elementType: string,
  defaultStyles?: any,
  variantStyles?: any,
) => {
  return (styled as any)[elementType]((props: any) => {
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

    let variants = variantStyles ? { ...variantStyles } : {}

    if (themeStyles && themeStyles.variants) {
      variants = deepmerge(variants, themeStyles.variants)
    }

    forOwn(variants, (variantStyle: any, variantKey: string) => {
      if (newProps[variantKey]) {
        styleFunctions.push(css(variantStyle))
      }
    })

    if (inlineStyles) {
      styleFunctions.push(resolveInputType(inlineStyles, newProps))
    }

    // TODO: merge this stuff into 1 object

    return styleFunctions
  })
}
