# POC - Design tokens to CSS primitives
    This repository is created as a proof of concept for conversion of design tokens from figma and applying transformations
to them to produce web primitives in various web formats.

![process showing the design token to various web format transformation](design-token-to-css.png)

## Formats:

- CSS variables
- SCSS variables
- JS variables
- UnoCSS preset (only CSS supported for now)


## Generate the artifacts:

1. `npm run install`
2. `npm run token-transform`
3. `npm run style-transform`
4. `npm run build`