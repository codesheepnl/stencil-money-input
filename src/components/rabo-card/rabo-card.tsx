import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'rabo-card',
  styleUrl: 'rabo-card.scss',
  shadow: true,
})
export class RaboCard {
  @Prop() heading?: string;

  render() {
    return (
      <div class="card">
        {this.heading && (
          <div class="card__heading">
            <h3>{this.heading}</h3>
          </div>
        )}
        <slot name="content" />
      </div>
    );
  }
}
