# NextJS Typescript Boilerplate
🚀 NextJS + Typescript + Storybook production ready boilerplate.

- [Features Overview](#features)
- [How to run](#how-to-run)
- [Features details](#features-details)
  - [PostCSS + postcss-preset-env](#💎-postcss-+-postcss-preset-env)
  - [Style-dictionnary](#🎨-style-dictionnary)
  - [SVGR](#🧞-svgr)
  - [Next SEO](#🤖-next-seo)
  - [ESlint & Stylelint](#📏-eslint-&-stylelint)
  - [Husky](#🐶-husky)
  - [VS Code config](#🗂-vs-code-config)
  - [Snippets](#🔥-snippets)
- [Components Guildelines](#components-guildelines)
  - [Component Directory Structure](#component-directory-structure)
  - [CSS Modules](#css-modules)

## Features Overview
- ⚡ NextJS 12
- ⚛️ React 18
- 🎉 Typescript
- 💡 Absolute Import and Path Alias — Import components using `@/` prefix.
- 💎 PostCSS with **postcss-preset-env** — Write the future of CSS today.
- 🎨 Style-dictionnary — Generate your CSS Custom properties from **design tokens**.
- 🧞 SVGR — Automatic Icon Component Generation.
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
- `pnpm link` run ESLint and Stylelint with `--fix`.
- `pnpm storybook` launch storybook dev server.
- `pnpm build:storybook` build storybook for production.
- `pnpm build:css-vars` build variables.css from the design tokens
- `pnpm build:icons` Generate icon components from svg's

The `prepapre` script ensures git hooks are setup and is automagically run everytime you run `pnpm install`.
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

### 🎨 Style-dictionnary
Style-dictionnary is a tool that allows you to generate CSS custom properties (CSS vars) from design tokens.

In a perfect world design token would be generated themself from the designer then we would have to import the file and generate our properties from it.

So if you need to update your variables:
1. Go into `src/assets/styles/tokens`
2. Edit what you want or even add some values
3. Run `pnpm build:css-vars`

And voilà! You have a freshly generated `variales.css`.

If you want to know more about design token head over: https://amzn.github.io/style-dictionary/#/tokens

### 🧞 SVGR
SVGR is a tool to allows to generate react components from SVG files.

Put your svg's in `src/assets/icons` and run `pnpm build:icons`.

All svg's within the folder will have a corresponding React component in `src/components/icons`.  
An `index` file that exports all the icon component is also generated.

There is a pre-made `Icon` component under `src/components/atoms/Icon` that can dynamically import icons with its `name` prop. The name prop is **automatically typed** with all the possible icons components.

### 🤖 Next SEO
[Next SEO](https://github.com/garmeeh/next-seo) allows you to set SEO metadata, JSON-LD and Open Graph tags very easily, check the docs to see how to use it.

### 📏 ESlint & Stylelint
All code in any code-base should look like a single person typed it, even when many people are contributing to it.  
That's why ESlint & Stylelint are setup with **strong rules** to enforce a standard coding style for all.

ESlint and stylelint find and fix your code but also ensure a standard coding style is applied.

- ESlint fixes your JS/TS with:
  - [standard-with-typescript](https://github.com/standard/eslint-config-standard-with-typescript) which is based on [`eslint-config-standard`](https://github.com/standard/eslint-config-standard) with typescript specific rules.
  - [next/core-web-vitals](https://nextjs.org/docs/basic-features/eslint) to lint Next specific code.
  - [plugin:storybook/recommended](https://github.com/storybookjs/eslint-plugin-storybook) to lint your storybook stories.
- Stylelint enforce and fixes your CSS with:
  - [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) to enforce coding style.
  - [stylelint-config-idiomatic-order](https://github.com/ream88/stylelint-config-idiomatic-order) to order the properties in a consistent way.

### 🐶 Husky
Husky ables us to create hooks that are run when certain git actions are performed.

In this project there are two:

* `post-merge`  
Run `pnpm install` to check for added or removed packages.
* `pre-commit`  
Run `pnpm lint-staged` Lint everything that is staged to ensure code quality.

The `prepare` script is automatically run by pnpm when running `pnpm install`, this ensure that the hooks are always installed.

### 🗂 VS Code config
Under `.vscode` your will find multiples files:

- extensions — Recommended extensions for the project.
- settings.json — Settings for the project & recommended extensions.
- launch.json — Allows you to launch a debug session right in VS Code under the debug tab.
- typescriptreact.code-snippets — Define some useful react [snippets](#🔥-snippets)
- storybook.code-snippets — Define a useful storybook [snippets](#🔥-snippets)

### 🔥 Snippets
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

## Components Guildelines

### File Naming
Component files should be in `PascalCase.tsx`.

### Component Directory Structure

The component should use [atomic design philosophy](https://bradfrost.com/blog/post/atomic-web-design/).

The components directory as the following structure:
- atoms — Like a button
- molecules — Like a card
- organisms — Like a whole section
- blocks — Components that are only once per page like a header / footer / hero
- hoc — High Order Components
- layouts — Contains header / footer
- icons — Icons that are generated with [SVGR](#🧞-svgr).

### CSS Modules
Components should use CSS modules for their styles.

And should be put next to the `Component.tsx` file and should be named `styles.module.css`.