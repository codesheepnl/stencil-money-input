import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'rabo-header',
  styleUrl: 'rabo-header.scss',
  shadow: true,
})
export class RaboHeader {

  render() {
    return (
      <Host>
        <header class="header">
          <h1 class="header__heading">Rabo Money Input</h1>
        </header>
      </Host>
    );
  }

}
