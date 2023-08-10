import { Component, Event, EventEmitter, Prop, State, h } from '@stencil/core';
import { Currency, Separator } from '@constants/currency';
import { getCurrencyDisplayByCode } from '@utils/form';
import {
  calculateFloatFromIntegerAndFractionalStrings,
  getIntegerAndFractionalPartsFromNumber,
} from '@utils/numbers';

@Component({
  tag: 'rabo-money-input',
  styleUrl: 'rabo-money-input.scss',
  shadow: true,
})
export class RaboMoneyInput {
  @Prop() value!: number;
  @Prop() name!: string;
  @Prop() label?: string = 'Amount';
  @Prop() hint?: string;
  @Prop() error?: string;
  @Prop() currency?: Currency = Currency.EUR;
  @Prop() separator?: Separator = Separator.COMMA;
  @Prop() required?: boolean = false;
  @Prop() disabled?: boolean = false;

  @Event() valueChange: EventEmitter<number>;

  /**
   * Keep as string to avoid having to `parseInt()` everytime the change event fires
   */
  @State() integer: string = '';
  @State() fractional: string = '';

  /**
   * Assign the integer and fractional a value once the component loads
   *
   * @returns void
   */
  componentWillLoad(): void {
    if (this.value) {
      [this.integer, this.fractional] = getIntegerAndFractionalPartsFromNumber(this.value);
    }
  }

  /**
   * Handle first input (integer) change
   *
   * @param event: globalThis.event
   * @returns void
   */
  private handleIntegerChange({ target }: globalThis.InputEvent): void {
    this.integer = (target as HTMLInputElement).value;
  }

  /**
   * Handle second input (fractional) change
   *
   * @param event: gloalThis.event
   * @returns void
   */
  private handleFractionalChange({ target }: globalThis.InputEvent): void {
    this.fractional = (target as HTMLInputElement).value;
  }

  /**
   * Handle change event. Formats the fractional and emits value change event to consumers.
   *
   * @returns void
   */
  private handleChange(): void {
    if (this.integer) {
      if (!this.fractional) {
        this.fractional = '00';
      } else if (this.fractional?.length === 1) {
        this.fractional += '0';
      }
    } else if (this.fractional) {
      this.integer = '0';
    }

    this.valueChange.emit(
      calculateFloatFromIntegerAndFractionalStrings(this.integer, this.fractional)
    );
  }

  render() {
    const currencyCode = getCurrencyDisplayByCode(this.currency);

    return (
      <div class="container">
        <label id={`${this.name}-label`} class="label">
          {this.label}
        </label>
        <div
          class={`input ${this.error ? 'input--is-invalid' : ''} ${
            this.disabled ? 'input--is-disabled' : ''
          }`}
        >
          <span class="input__currency" innerHTML={currencyCode} />
          <input
            class="input__integer"
            onInput={(event) => this.handleIntegerChange(event)}
            onChange={() => this.handleChange()}
            aria-labelledby={`${this.name}-label`}
            name={`${this.name}-integer`}
            id={`${this.name}-integer`}
            required={this.required}
            disabled={this.disabled}
            pattern="\d+"
            value={this.integer}
          />
          <span class="input__separator">{this.separator}</span>
          <input
            class="input__fractional"
            onInput={(event) => this.handleFractionalChange(event)}
            onChange={() => this.handleChange()}
            aria-labelledby={`${this.name}-label`}
            name={`${this.name}-fractional`}
            id={`${this.name}-fractional`}
            required={this.required}
            disabled={this.disabled}
            maxLength={2}
            pattern="\d{0,2}"
            value={this.fractional}
          />
        </div>

        {this.hint && !this.error && <span class="hint">{this.hint}</span>}
        {this.error && <span class="error">{this.error}</span>}
      </div>
    );
  }
}
