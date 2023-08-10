# Stencil Money Input

This is a demo project built with [StencilJS](https://stenciljs.com/) to showcase a money/currency input. The component consists of two inputs that together emit a float value to the form above.

## Time log

| Date         | Time spent |
| ------------ | ---------- |
| Aug 4, 2023  | 30 min     |
| Aug 7, 2023  | 2 hr       |
| Aug 8, 2023  | 2 hr       |
| Aug 9, 2023  | 2 hr       |
| Aug 10, 2023 | 2 hr       |

## Setting up

If you're using [NVM](https://formulae.brew.sh/formula/nvm), execute the following to activate the node version in `.nvmrc`;

```bash
$ nvm use
```

To start, install;

```bash
$ yarn install

# or, with NPM

$ npm install
```

Commands:

```bash
$ yarn start # Start the project

$ yarn test # Test

$ yarn test.watch # Test, but watch for changes

$ yarn build # Compile the component library

$ yarn generate # Generate boilerplates with stencil CLI

$ yarn lint # Lint the project code with ESLint

$ yarn lint:fix # Lint, but with autofix

$ yarn format # Format the project code with Prettier

$ yarn format:fix # Format, but with autofix
```

## Component / Architecture explanation

The demo is made using no other libraries or packages. I made a little form builder/schema which can be used to easily create the forms. I am using it in the [layout component](./src/components/rabo-layout/rabo-layout.tsx). The layout component is only used to showcase the `rabo-form` and `rabo-money-input` components.

The [form component](./src/components/rabo-form/rabo-form.tsx) takes a schema and a value. It will then render the inputs based on whatever configuration was passed in the schema. It will also take validators - to customize the validation process - and some attributes like `required` and `disabled` to further configure the inputs.

### Money input

The money input is the actual component on demo here. I configured it as such, that everything is customizable and ready to be used in actual forms. Aria attributes are thought of too. I chose to split the incoming value into an `integer` and a `fractional`. These are put together into a single floating point value whenever `onChange` event fires on one of the inputs. This is then passed up the chain with the `valueChange` event, where the `form` can pick it up and update it's value.

I chose to abstract whatever complex logic and calculation away into `utils`. Furthermore, the field is also customizable with different currencies, configured via the components inputs.

Lastly, I opted not to do validation directly on the money input, but instead use the schema-like approach, where the field can be configured with a as few or many validation functions as you like.

### Form

The form takes the schema and renders the money input field. Whenever the form receives a `valueChange` event from the money input, it will update it's value. If the `submit` button is clicked, the form will fire an event `formSubmit` and pass the submitted value up.

Also, it will check each field for validations that were configured on the schema. If any of them fail, it will keep track of errors in a Map and pass it to the corresponding field to show the error.

### Layout

The layout serves as a showcase for the project, showing a few forms with different variations. It also shows how to utilize the schema concept I built.

### Button, Card, Header

These components do not contribute to the functionalities for the demo, they are just here to provide some look and feel. I did however try to make them customizable, for example the button can be configured to some extent.

## Other details

I opted to use the `@stencil/sass` package to make life with CSS easier, made use of CSS variables, and added the Roboto font. I also added ESLint and Prettier to this project to make the life of developers easier. They can both be run via package scripts. Furthermore, I made use of TSconfig paths to make imports easier and prettier.

I didn't have the time left to make more tests like I wanted to. However, I did test the most important things on the money input field. If I had more time left, I would have tested the integration of the form and field together with a schema passed from above (e.g. layout component in this example). Also there is one console error from puppeteer in the tests which I didn't have time to fully check. It doesn't fail the test, so just ignore that for the demo.

I also checked the page for accessibility and it passes the test from Axe-Devtools. Specificially I paid some attention to the money input here, for example the label that is put on top is referred to by the two inputs via an `aria-labelledby` attribute. Otherwise, we'd need two labels or do some trickery like hiding them from view.

The project is not perfect by any means. But I think it showcases my potential, skills and coding style pretty well.