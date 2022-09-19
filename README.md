# NextJS Typescript Boilerplate
🚀 NextJS + Typescript + Storybook production ready boilerplate.

* [💎 PostCSS + postcss-preset-env](#-postcss--postcss-preset-env)
* [🎨 Style-dictionary](#-style-dictionary)
* [🧞 Icons with svg-sprite](#-icons-with-svg-sprite)
* [🤖 Next SEO](#-next-seo)
* [📏 ESlint & Stylelint](#-eslint--stylelint)
* [🐶 Husky](#-husky)
* [🗂 VS Code config](#-vs-code-config)
* [🔥 VS Code Snippets](#-vs-code-snippets)
* [Components Guidelines](#components-guidelines)
  * [File Naming](#file-naming)
  * [Component Directory Structure](#component-directory-structure)
  * [CSS Modules](#css-modules)

## Features Overview
- ⚡ NextJS 12
- ⚛️ React 18
- 🎉 Typescript
- 🍬 Storybook (now with Vite builder ⚡)
- 💡 Absolute Import and Path Alias — Import components using `@/` prefix.
- 💎 PostCSS with **postcss-preset-env** — Write the future of CSS today.
- 🎨 Style-dictionary — Generate your CSS Custom properties from **design tokens**.
- 🧞 Icons with svg-sprite — Automatic Icon sprite with an Icon component.
- 🤖 Next SEO — SEO metadata, JSON-LD and Open Graph tags.
- 📏 ESLint — Find and fix problems in your JS/TS, also will **auto-sort** your imports.
- 📐 Stylelint — Enforce coding style for CSS and **auto-sort** properties.
- 🐶 Husky — Add Git Hooks.
- 🚫 Lint-staged — Running linters on Git staged files.
- 🗂 VSCode config — Debug, Settings and recommended extensions.
- 🔥 Snippets — A collection of useful snippets for React, Next & Storybook.

## How to run
This project assumes you have [`pnpm`](https://pnpm.io/installation) installed.

Commands:
- `pnpm dev` launch dev server.
- `pnpm build` build next for production
- `pnpm start` start NextJS with the production build
- `pnpm lint` run ESLint and Stylelint with `--fix`.
- `pnpm lint:css` run Stylelint with `--fix`.
- `pnpm storybook` launch storybook dev server.
- `pnpm build:storybook` build storybook for production.
- `pnpm build:css-vars` build variables.css from the design tokens
- `pnpm build:icons` Generate icons sprite from svg's

The `prepapre` script ensures git hooks are set up and is automagically run everytime you run `pnpm install`.
Check [husky section](#🐶-husky) for more details.

## Features Details

### 💎 PostCSS + postcss-preset-env
Use the regular CSS of tomorrow.

[`postcss-preset-env`](https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env) allows you to write CSS with future standards.

If you want to so see all the features head over https://preset-env.netlify.app/features/#stage-1.

Also check this video: https://www.youtube.com/watch?v=Ek1JP3BzbhY

#### So Why not SASS/SCSS ?
The SASS tagline is "CSS with superpowers" and it's true, but SASS was released more than 10 years ago and since then regular CSS got its own **superpowers**.

So the philosophy is why write CSS with a preprocessor while you can do pretty much the same with regular CSS ?

### 🎨 Style-dictionary
Style-dictionary is a tool that allows you to generate CSS custom properties (CSS vars) from design tokens.

In a perfect world design token would be generated from the designer themselves then we would have to import the file and generate our properties from it.

So if you need to update your variables:
1. Go into `src/assets/styles/tokens`
2. Edit what you want or even add some values
3. Run `pnpm build:css-vars`

And voilà! You have a freshly generated `variales.css`.

If you want to know more about design token head over: https://amzn.github.io/style-dictionary/#/tokens

### 🧞 Icons with svg-sprite
[`svg-sprite`](https://github.com/svg-sprite/svg-sprite) is a tool that allows to generate a svg sprite from svg files.

Put your svg's in `src/assets/icons` and run `pnpm build:icons`.

All svg's within the folder will be in the newly generated sprite.

There is a pre-made `Icon` component under `src/components/atoms/Icon`.  
Use it with the name of the svg file you to display as the `name`prop.
```jsx
<Icon name='arrow-right' />
```

### 🤖 Next SEO
[Next SEO](https://github.com/garmeeh/next-seo) allows you to set SEO metadata, JSON-LD and Open Graph tags very easily, check the docs to see how to use it.

### 📏 ESlint & Stylelint
All code in any code-base should look like a single person typed it, even when many people are contributing to it.  
That's why ESlint & Stylelint are set up with **strong rules** to enforce a standard coding style for all.

ESlint and stylelint find and fix your code but also ensure a standard coding style is applied.

- ESlint fixes your JS/TS with:
  - [standard-with-typescript](https://github.com/standard/eslint-config-standard-with-typescript) which is based on [`eslint-config-standard`](https://github.com/standard/eslint-config-standard) with typescript specific rules.
  - [next/core-web-vitals](https://nextjs.org/docs/basic-features/eslint) to lint Next specific code.
  - [plugin:storybook/recommended](https://github.com/storybookjs/eslint-plugin-storybook) to lint your storybook stories.
- Stylelint enforce and fixes your CSS with:
  - [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) to enforce coding style.
  - [stylelint-config-recess-order](https://github.com/stormwarning/stylelint-config-recess-order) to order the properties in a consistent way.

### 🐶 Husky
Husky ables us to create hooks that are run when certain git actions are performed.

In this project there are two:

* `post-merge`  
Run `pnpm install` to check for added or removed packages.
* `pre-commit`  
Run `pnpm lint-staged` Lint everything that is staged to ensure code quality.

The `prepare` script is automatically run by pnpm when running `pnpm install`, this ensures that the hooks are always installed.

### 🗂 VS Code config
Under `.vscode` your will find multiples files:

- extensions — Recommended extensions for the project.
- settings.json — Settings for the project & recommended extensions.
- launch.json — Allows you to launch a debug session right in VS Code under the debug tab.
- typescriptreact.code-snippets — Define some useful react [snippets](#-vs-code-snippets)
- storybook.code-snippets — Define a useful storybook [snippets](#-vs-code-snippets)

### 🔥 VS Code Snippets
- React Snippets
  - `ir` — import React
  - `us` — useState
  - `uf` — useEffect
  - `ur` — useReducer
  - `urf` — useRef
  - `nc` — New React component
- Next Snippets
  - `np` — New NextJS Page
  - `napi` — New Next API endpoint
  - `gsp` — getStaticProps
  - `gssp` — getServerSideProps
  - `gspa` — GetStaticPaths
  - `imurtr` — Import useRouter
  - `imimg` — Import Next Image
  - `iml` — Import Next Link
- Wrap Snippets
  - `ff` — Wrap with React fragment
  - `wrap` — Wrap with Element/Component
  - `cx` — Wrap with clsx
- Storybook
  - `nsbc` — New Storybook component story

---

## Components Guidelines

### File Naming
Component files should be in `PascalCase.tsx`.

### Component Directory Structure

The component should use [atomic design philosophy](https://bradfrost.com/blog/post/atomic-web-design/).

The components directory as the following structure:
- atoms — Like a button
- molecules — Like a card
- organisms — Like a whole section
- blocks — Components that are only once per page like a header / footer / hero
- forms — Any form component form, inputs, group, etc.
- hoc — High Order Components
- layouts — Contains header / footer

### CSS Modules
Components should use CSS modules for their styles.

And should be put next to the `Component.tsx` file and should be named `styles.module.css`.
