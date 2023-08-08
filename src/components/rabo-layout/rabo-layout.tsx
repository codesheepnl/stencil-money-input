import { RaboFormCustomEvent } from '@src/components';
import { FormSchema, InputTypes } from '@src/constants/form';
import { validateMoney, validateRequired } from '@src/utils/form';
import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'rabo-layout',
  styleUrl: 'rabo-layout.scss',
  shadow: true,
})
export class RaboLayout {
  private value1 = { amount: 1.99 };
  private schema1: FormSchema = [
    {
      type: InputTypes.MONEY,
      name: 'amount',
      required: false,
      disabled: false,
      validators: [{ fn: validateMoney, message: 'Please enter a valid amount.' }],
    },
  ];

  private value2 = { amount: null };
  private schema2: FormSchema = [
    {
      type: InputTypes.MONEY,
      name: 'amount',
      required: true,
      disabled: false,
      validators: [
        { fn: validateRequired<number>, message: 'Amount is required.' },
        { fn: validateMoney, message: 'Please enter a valid amount.' },
      ],
    },
  ];

  private value3 = { amount: 431.72 };
  private schema3: FormSchema = [
    {
      type: InputTypes.MONEY,
      name: 'amount',
      required: true,
      disabled: false,
      validators: [
        { fn: validateRequired<number>, message: 'Amount is required.' },
        { fn: validateMoney, message: 'Please enter a valid amount.' },
      ],
      hint: 'Enter an amount',
    },
  ];

  private value4 = { amount: 431.72, amount2: 431.72, amount3: 431.72 };
  private schema4: FormSchema = [
    {
      type: InputTypes.MONEY,
      name: 'amount',
      required: true,
      disabled: false,
      validators: [
        { fn: validateRequired<number>, message: 'Amount is required.' },
        { fn: validateMoney, message: 'Please enter a valid amount.' },
      ],
      hint: 'Hi, I am amount #1',
    },
    {
      type: InputTypes.MONEY,
      name: 'amount2',
      required: true,
      disabled: false,
      validators: [
        { fn: validateRequired<number>, message: 'Amount is required.' },
        { fn: validateMoney, message: 'Please enter a valid amount.' },
      ],
      hint: 'Hi, I am amount #2',
    },
    {
      type: InputTypes.MONEY,
      name: 'amount3',
      required: true,
      disabled: false,
      validators: [
        { fn: validateRequired<number>, message: 'Amount is required.' },
        { fn: validateMoney, message: 'Please enter a valid amount.' },
      ],
      hint: 'Hi, I am amount #3',
    },
  ];

  private handleSubmit({ detail }: RaboFormCustomEvent<any>, form: string): void {
    alert(`Form "${form}" submitted with value: \n ${JSON.stringify(detail)}`);
  }

  render() {
    return (
      <Host>
        <header>
          <rabo-header></rabo-header>
        </header>
        <main>
          <section
            class="content"
            aria-labelledby="layout-heading"
            aria-describedby="layout-description"
          >
            <div class="content__header">
              <h2 id="layout-heading">Demo | form variations</h2>
              <p id="layout-description">
                Below are some variations on the money input, configured with the{' '}
                <code>schema</code> property.
              </p>
            </div>

            <div class="content__cards">
              <rabo-card heading="Regular">
                <rabo-form
                  slot="content"
                  schema={this.schema1}
                  value={this.value1}
                  onFormSubmit={(event) => this.handleSubmit(event, 'Regular')}
                ></rabo-form>
              </rabo-card>

              <rabo-card heading="With Required">
                <rabo-form
                  slot="content"
                  schema={this.schema2}
                  value={this.value2}
                  onFormSubmit={(event) => this.handleSubmit(event, 'With Required')}
                ></rabo-form>
              </rabo-card>

              <rabo-card heading="With Hint">
                <rabo-form
                  slot="content"
                  schema={this.schema3}
                  value={this.value3}
                  onFormSubmit={(event) => this.handleSubmit(event, 'With Hint')}
                ></rabo-form>
              </rabo-card>

              <rabo-card heading="With multiple fields">
                <rabo-form
                  slot="content"
                  schema={this.schema4}
                  value={this.value4}
                  onFormSubmit={(event) => this.handleSubmit(event, 'With multiple fields')}
                ></rabo-form>
              </rabo-card>
            </div>
          </section>
        </main>
      </Host>
    );
  }
}
