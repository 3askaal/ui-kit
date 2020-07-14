# 3oilerplate

Personal React User Interface kit.

After working with **Styled Components** and **Styled System** for a while (with Style Objects instead of template literals). I got really annoyed by the fact that you can't use Styled System's theming magic in the styling at component declaration level, this functionality is only exposed to the style props you add to your component. I also wanted to be able to override styling on inline level and theme level.

## Stylish Util

Wrapper around Styled Components where you can pass **Default Styles** and **Variant Styles** to. These Style Objects are parsed with the `css()` function from Styled System's core functionality (`@styled-system/css`). This means you can use values that are stored in Styled Component's ThemeProvider everywhere.

The **first parameter** is element type you want to create with Styled Components. The **second parameter** is a Style Object for the **Default Styling**. The **third parameter** is an object that holds Style Objects for **the variants**.

An example on how to do this below:

```ts
const Button = Stylish(
  'button',
  {
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
)
```

### Stylish Components

#### Variant Styles

Variants can be defined in the component declaration. But can also be defined and overridden in the theme object. Variants are applied when you pass a prop that matches the name of the variant, with a true value.

```tsx
<Button isSecondary />
```

#### Inline Styles

Each component defined with Stylish has a `style` prop you can pass inline styling to.

An example on how to do this below:

```tsx
<Button style={{ backgroundColor: 'secondary' }} />
```

#### Styling from the theme

Each component has an `sRef` attribute with a reference name, this makes it possible to override the styling of each component at the theme level. You can override the default styling but also each variant of the component.

An example on how to do this below:

```ts
const theme = {
  colors: {
    primary: '#3e64ff',
    secondary: '#7c73e6',
  },
  components: {
    Button: {
      default: {
        backgroundColor: 'secondary',
      },
      variants: {
        outline: {
          borderColor: 'secondary',
        },
      },
    },
  },
}
```
