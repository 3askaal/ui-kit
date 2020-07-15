# 3oilerplate

Personal React User Interface kit.

## Introduction

After working with **Styled Components** and **Styled System** for a while (with Style Objects instead of template literals). I wanted to be able to pass Style Objects with the theming magic of Styled System to my Styled Components. So I made this wrapper that uses the `css()` function from Styled System's core functionality (`@styled-system/css`), which allows you to use theme keys in the style objects you pass to it.

So you can do this:

```tsx
import { Stylish } from '3oilerplate'

const Button = Stylish({
  type: 'button',
  defaults: {
    backgroundColor: 'primary',
  },
  variants: {
    isSecondary: {
      backgroundColor: 'secondary',
    },
  },
})
```

Instead of this:

```tsx
import { styled } from 'styled-components'
import { variants, flexbox, color, border } from 'styled-system'

const Button = styled.button(
  ({ theme }) => ({
    backgroundColor: theme.colors.primary,
  }),
  ({ theme }) =>
    variants({
      isSecondary: {
        backgroundColor: theme.colors.secondary,
      },
    }),
  flexbox,
  color,
  border,
  ...
)
```

## Installation

Install the dependency:

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
    secondary: '#7c73e6',
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

### Define custom components

- `type`: type of element you want to create with Styled Components
- `defaults`: style object for the default styling
- `variants`: style objects for variants
- `ref`: to be able to override styling or add variants on the theme level.

```ts
import { Stylish } from '3oilerplate'

const Text = Stylish({
  type: 'p',
  defaults: {
    backgroundColor: 'primary',
    color: 'white',

    ':hover': {
      backgroundColor: 'primaryDark',
    },
  },
  variants: {
    isSecondary: {
      backgroundColor: 'secondary',

      ':hover': {
        backgroundColor: 'secondaryDark',
      },
    },
  },
  ref: 'Text',
})
```

### Use your custom components or components from this library

```tsx
import { Container } from '3oilerplate'
import { Text } from '@components'

const PageComponent = () => {
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
        outline: {
          background: 'transparent',
          borderColor: 'secondary',
        },
      },
    },
  },
}
```

### Inline Styles

Each component defined with Stylish has a `style` prop you can pass inline styling to.

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

You can also apply styling to these children in the theme configuration:

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
