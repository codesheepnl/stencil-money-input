import { Component, Prop, h } from '@stencil/core';
import { ButtonTheme, ButtonType } from '@constants/form';

@Component({
  tag: 'rabo-button',
  styleUrl: 'rabo-button.scss',
  scoped: true,
  shadow: false, // No shadow DOM for this button, so it can be used to submit forms
})
export class RaboButton {
  @Prop() label: string;
  @Prop() type?: ButtonType = ButtonType.BUTTON;
  @Prop() theme?: ButtonTheme = ButtonTheme.PRIMARY;
  @Prop() fullWidth?: boolean = false;
  @Prop() disabled?: boolean = false;

  render() {
    return (
      <button
        class={`button button--${this.theme} ${this.fullWidth && 'button--full'} ${
          this.disabled && 'button--is-disabled'
        }`}
        disabled={this.disabled}
        type={this.type}
      >
        {this.label}
      </button>
    );
  }
}
