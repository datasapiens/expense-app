Simple app that let you track incomes/expense via transactions and assign them one of predefined or custom categories. You can also check charts representing distribution of expenses and balance overview on charts.

[Built app](https://benesva4.github.io/expense-app/)

## Used tech

- Vite
- React
- Redux toolkit
- Typescript
- SCSS modules
- Chart.js
- ReactRouter

## Getting started

- `npm i`
- `npm start` for local development
- `npm build` for build (obviously)
- `preview`: for build + serve on localhost

## Note

Since scss modules should be used, component library felt like getting away from the assignment because I would probably go for MUI that should be ideally styled differently in my opinion. So I went for custom, simplistic and crude looking MUI knockoff. I considered using react-hook-form + yup or some similar combo for forms and validation, but the use case felt quite simple to make it without it. In real world I would go for tests (of course) if just to prevent filling transactions and adding/removing categories so many times :-)
