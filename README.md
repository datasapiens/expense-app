<div id="top"></div>

[![LinkedIn][linkedin-shield]][linkedin-url]

## About the project

This project forms part of the take home task assigned for a frontend engineering role at [Datasapiens](https://www.datasapiens.co.uk/).  
Note there is a link to the app in the repo about section on the top right corner.

The core focus of the solution:
* List Categories.
* List Transactions.
* Add a Category.
* Remove a Category.
* Add a transaction.
* Include a home route and a graphs route.
* Filter transactions depending on the existence of category.

<p align="right">(<a href="#top">back to top</a>)</p>



### Technologies and Libraries used

The core libraries are listed here:

* [ReactJS](https://reactjs.org/)
* [MaterialUI](https://mui.com/)
* [Typescript](https://www.typescriptlang.org/)
* [CreatReactApp](https://create-react-app.dev/)
* [Formik](https://formik.org/)
* [Yup](https://github.com/jquense/yup)
* [ESLint](https://eslint.org/)
* [Prettier](https://prettier.io/)

ESLint and prettier are set up as combined config. Formatting will run as part of linting rules.

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

### Prerequisites

### Installation

1. ```shell
   yarn
   ```
2. You should have no errors after installation and that is pretty much it for installation.

<p align="right">(<a href="#top">back to top</a>)</p>


<div id="usage"></div>
## Usage

Here will follow steps to run the project.
* To start the application in watch mode
    ```shell
    yarn start
    ```
* To lint and format the code
    ```shell
    yarn lint
    ```
* To fix linting and formatting
    ```shell
    yarn lint:fix
    ```
  
Alternatively there is the docker route `docker-compose up -d`  
After the project is running dev you can open it on http://localhost:3000/.

<p align="right">(<a href="#top">back to top</a>)</p>

## Roadmap

- [x] List Categories
- [x] List Transactions
- [x] Add a Category
- [x] Remove a Category
- [X] Add a transaction
- [X] Include a home route and a graphs route
- [X] Filter transactions depending on the existence of category
- [X] Render Graphs that will dynamically update after date has been added or removed

## Follow up
### Implementation

_Library Selection_
* ReactJS - The required tool for the job.
* Material UI - Quick multi select.
* Typescript - For some added Type safety to tighten up the data contract across various segments of the app. Also aids in catching
  bugs that you might have missed.
* Prettier - Formats the code.
* ESLint - Enforce som standards and rules. Basic configuration.
* Formik - Quick and easy forms.
* Yup - Form validation.

_Start Command_ `yarn start` (<a href="#usage">Refer to the usage section</a>)

### General
Given more time I would Implement the following.
* In the ideal scenario the api would be paginated on the server side.
* Add unit test and push repo coverage to an acceptable level.
* Do some proper UI/UX with a better more fluent design.
* Setup async handling for data calls like redux-thunk or redux-saga.
* Preload with lots of data.
* When we absolutely have to render long lists of data we can virtualize the lists for  performance. React 18 might cover this.
* Config setup for test, staging and prod.
* Implement path aliases for module imports.
* Error handling and tracking.

<p align="right">(<a href="#top">back to top</a>)</p>


[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/jahil-khalfe/

