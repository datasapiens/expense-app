Simple app that let you track incomes/expense via transactions and assign them one of predefined or custom category. You can also check charts representing distribution of expenses and balance overview on charts.

[Built app](https://benesva4.github.io/expense-app/)

## Used tech

- Vite
- React
- Typescript
- SCSS modules
- Chart.js
- ReactRouter

## Note

Since scss modules should be used, component library felt like getting away from the assignment because I would go probably for MUI that should be ideally styled quite differently in my opinion. So I went for custom, quite simplistic and crude looking MUI knockoff. I considered using react-hook-form + yup or some similar combo for validation, but use case felt quite simple to make it without it. In real world I would go for tests (of course) if just to prevent filling the transactions and adding/removing categories so many times :-)
