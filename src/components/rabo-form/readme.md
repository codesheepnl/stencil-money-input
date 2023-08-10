# rabo-form

<!-- Auto Generated Below -->


## Properties

| Property              | Attribute | Description | Type                                                                                                                     | Default     |
| --------------------- | --------- | ----------- | ------------------------------------------------------------------------------------------------------------------------ | ----------- |
| `schema` _(required)_ | --        |             | `{ type: InputTypes; name: string; required?: boolean; disabled?: boolean; validators?: Validator[]; hint?: string; }[]` | `undefined` |
| `value` _(required)_  | --        |             | `{ [x: string]: any; }`                                                                                                  | `undefined` |


## Events

| Event        | Description | Type                                 |
| ------------ | ----------- | ------------------------------------ |
| `formSubmit` |             | `CustomEvent<{ [x: string]: any; }>` |


## Dependencies

### Used by

 - [rabo-layout](../rabo-layout)

### Depends on

- [rabo-money-input](../rabo-money-input)
- [rabo-button](../rabo-button)

### Graph
```mermaid
graph TD;
  rabo-form --> rabo-money-input
  rabo-form --> rabo-button
  rabo-layout --> rabo-form
  style rabo-form fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
