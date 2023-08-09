import { Component, Event, EventEmitter, Prop, State, h } from '@stencil/core';
import { RaboMoneyInputCustomEvent } from '@src/components';
import { ButtonType, FormErrors, FormSchema, InputTypes } from '@constants/form';
import { Currency, Separator } from '@constants/currency';

@Component({
  tag: 'rabo-form',
  styleUrl: 'rabo-form.scss',
  shadow: true,
})
export class RaboForm {
  @Prop() schema: FormSchema;
  @Prop({ mutable: true }) value: Record<string, any>;

  @Event() formSubmit: EventEmitter<typeof this.value>;

  @State() errors: FormErrors<typeof this.value> | null;

  private handleChange({ detail }: RaboMoneyInputCustomEvent<number>, field: string): void {
    this.value = {
      ...this.value,
      [field]: detail,
    };
  }

  /**
   * Handles submit of the form. Will check and assign for any errors.
   * If valid, emits the submit event.
   *
   * @param event: globalThis.Event
   * @returns void
   */
  private handleSubmit(event: globalThis.Event): void {
    event.preventDefault();

    this.errors = null;

    for (const field of this.schema) {
      for (const validator of field.validators) {
        if (!validator.fn(this.value[field.name])) {
          this.errors = {
            [field.name]: validator.message,
          };

          return;
        }
      }
    }

    this.formSubmit.emit(this.value);
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)} class="form">
        {this.schema.map((field) => {
          if (field.type === InputTypes.MONEY) {
            return (
              <rabo-money-input
                name={field.name}
                value={this.value[field.name]}
                currency={Currency.EUR}
                separator={Separator.COMMA}
                error={this.errors?.[field.name]}
                onValueChange={(event) => this.handleChange(event, field.name)}
                hint={field.hint}
                required={field.required}
                disabled={field.disabled}
              />
            );
          }

          // More types of inputs here in the future
        })}

        <rabo-button label="Submit" type={ButtonType.SUBMIT} fullWidth />
      </form>
    );
  }
}
