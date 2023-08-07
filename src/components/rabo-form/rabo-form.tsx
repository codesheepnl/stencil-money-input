import { Component, Listen, State, h } from '@stencil/core';
import { RaboMoneyInputCustomEvent } from '@src/components';
import { ButtonType } from '@constants/form';
import { Currency, Separator } from '@constants/currency';

/**
 * Hypothetical form value which could have more properties
 */
type FormValue = {
  amount: number;
};

@Component({
  tag: 'rabo-form',
  styleUrl: 'rabo-form.scss',
  shadow: true,
})
export class RaboForm {
  @State() value: FormValue = {
    amount: undefined,
  };

  @Listen('valueChange')
  handleChange({ detail }: RaboMoneyInputCustomEvent<number>): void {
    this.value = {
      ...this.value,
      amount: detail,
    };
  }

  handleSubmit(event: globalThis.Event): void {
    event.preventDefault();
    console.log(this.value);
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)} class="form">
        <rabo-money-input
          name="amount"
          value={this.value.amount}
          currency={Currency.EUR}
          separator={Separator.COMMA}
          required
          disabled
        />
        <rabo-button label="Submit" type={ButtonType.SUBMIT} fullWidth />
      </form>
    );
  }
}
