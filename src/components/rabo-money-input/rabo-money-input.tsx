import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';
import { Currency, Separator } from '@constants/currency';
import { getCurrencyDisplayByCode, isValidNumberInput } from '@utils/form';

@Component({
  tag: 'rabo-money-input',
  styleUrl: 'rabo-money-input.scss',
  shadow: true,
})
export class RaboMoneyInput {
  @Prop() value!: number;
  @Prop() name!: string;
  @Prop() label?: string = 'Amount';
  @Prop() currency: Currency = Currency.EUR;
  @Prop() separator: Separator = Separator.COMMA;
  @Prop() required?: boolean = false;
  @Prop() disabled?: boolean = false;

  @Event() valueChange: EventEmitter<number>;

  /**
   * Don't use `@State()` with these variables, no need for a re-render
   * Also, keep as string to avoid having to `parseInt()` everytime the change event fires
   */
  private integer: string = '0';
  private fractional: string = '0';

  /**
   * Assign the integer and fractional a value once the component loads
   *
   * @returns void
   */
  componentDidLoad(): void {
    if (this.value) {
      [this.integer, this.fractional] = this.value?.toString().split('.');
    }
  }

  /**
   * Calculates the complete floating point value based on the two input values.
   *
   * @returns number
   */
  private get computedValue(): number {
    console.log(isValidNumberInput(this.integer));
    console.log(isValidNumberInput(this.fractional));

    const float = parseFloat(`${this.integer ?? 0}.${this.fractional ?? 0}`);
    return float ? Math.round(float * 100) / 100 : 0.0;
  }

  /**
   * Handle first input (integer) change
   *
   * @param event: globalThis.event
   * @returns void
   */
  handleIntegerChange({ target }: globalThis.Event): void {
    this.integer = (target as HTMLInputElement).value;
    this.valueChange.emit(this.computedValue);
  }

  /**
   * Handle second input (fractional) change
   *
   * @param event: gloalThis.event
   * @returns void
   */
  handleFractionalChange({ target }: globalThis.Event): void {
    this.fractional = (target as HTMLInputElement).value;
    this.valueChange.emit(this.computedValue);
  }

  render() {
    let [integer, fractional = '00'] = (this.value ?? 0.0)
      ?.toString()
      ?.split('.');
    const currencyCode = getCurrencyDisplayByCode(this.currency);

    /**
     * Add a leading zero if fractional is concatenated
     */
    if (fractional.length === 1) {
      fractional += '0';
    }

    return (
      <div class={`container ${this.disabled && 'container--state-disabled'}`}>
        <label id={`${this.name}-label`} class="label">
          {this.label}
        </label>
        <div class="input">
          <span class="input__currency" innerHTML={currencyCode} />
          <input
            class="input__integer"
            value={integer}
            onChange={(event) => this.handleIntegerChange(event)}
            aria-labelledby={`${this.name}-label`}
            name={`${this.name}-integer`}
            id={`${this.name}-integer`}
            required={this.required}
            disabled={this.disabled}
          />
          <span class="input__separator">{this.separator}</span>
          <input
            class="input__fractional"
            value={fractional}
            onChange={(event) => this.handleFractionalChange(event)}
            aria-labelledby={`${this.name}-label`}
            name={`${this.name}-fractional`}
            id={`${this.name}-fractional`}
            required={this.required}
            disabled={this.disabled}
          />
        </div>
      </div>
    );
  }
}
