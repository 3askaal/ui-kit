# 3oilerplate

Personal React Component Library and Toolkit. With a **wrapper** around **Styled Components** that brings **Styled System's theming magic** into components.

- Declare component styles and variants with **theme values**
- Override component styles with the `style` prop
- Override component styles or add variants in the **theme object**
- Override styles of **child elements** of components by using the `sRef` prop

## Installation

```
npm install 3oilerplate
```

## How to use

Wrap your application in a ThemeProvider:

```tsx
import { ThemeProvider, Text } from '3oilerplate'
import theme from './style/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Text>Hello world</Text>
    </ThemeProvider>
  )
}
```

### Define a theme

```ts
import { darken } from '3oilerplate'

const theme = {
  breakpoints: ['320px', '640px', '768px', '1024px', '1440px'],
  space: {
    xs: '0.5rem',
    s: '0.75rem',
    m: '1.25rem',
    l: '2.5rem',
    xl: '3.75rem',
  },
  colors: {
    primary: '#3e64ff',
    primaryDark: darken('#3e64ff', 0.25),
    secondary: '#7c73e6',
    secondaryDark: darken('#7c73e6', 0.25),
  },
  fonts: {
    base: "'Source Sans Pro', Helvetica, Arial, sans-serif",
    code: 'Consolas, Monaco, monospace, Arial, sans-serif',
  },
  radii: {
    s: '0.125rem',
    m: '0.25rem',
    l: '0.5rem',
  },
}
```

### Define components

| Param    | Type                | Description                                                    |
| -------- | ------------------- | -------------------------------------------------------------- |
| defaults | <code>object</code> | default styling                                                |
| variants | <code>object</code> | variant styling                                                |
| ref      | <code>string</code> | referende to be able to override components and subscomponents |

```ts
import { styled } from '3oilerplate'

const Button = styled.button({
    backgroundColor: 'primary',
    color: 'white',

    ':hover': {
      backgroundColor: 'primaryDark',
    },
  },
  {
    isSecondary: {
      backgroundColor: 'secondary',

      ':hover': {
        backgroundColor: 'secondaryDark',
      },
    },
  },
  'Button',
})
```

### Use your custom components or components from this library

```tsx
import { Container } from '3oilerplate'
import { Text } from '@components'

const HelloWorldComponent = () => {
  return (
    <Container>
      <Text>Hello World</Text>
    </Container>
  )
}
```

### Variant Styles

Variants are applied when you pass a prop with a true value that matches the name of a variant.

```tsx
<Button isSecondary />
```

Variants can be defined in the component declaration as showed before, but also in the theme configuration.

```ts
const theme = {
  ...,
  components: {
    Button: {
      default: {
        backgroundColor: 'secondary',
      },
      variants: {
        isOutline: {
          background: 'transparent',
          borderColor: 'secondary',
        },
      },
    },
  },
}
```

### Inline Styles

Each component has a `style` prop you can pass inline styling to.

```tsx
<Button style={{ backgroundColor: 'secondary' }} />
```

### Components with children

When you use the `ref` field when defining components.

You can apply inline styling to children of containing components:

```tsx
<Checkbox
  style={{
    borderColor: 'secondary',
    Checkbox_Indicator: { backgroundColor: 'secondary' },
  }}
/>
```

You can also apply styling to a component's children in the theme configuration:

```ts
const theme = {
  ...,
  components: {
    Checkbox: {
      default: {
        borderColor: 'secondary',
        Checkbox_Indicator: { backgroundColor: 'secondary' },
      },
    },
  },
}
```
