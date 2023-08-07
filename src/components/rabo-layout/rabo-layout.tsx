import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'rabo-layout',
  styleUrl: 'rabo-layout.scss',
  shadow: true,
})
export class RaboLayout {
  render() {
    return (
      <Host>
        <rabo-header></rabo-header>
        <main>
          <div class="content">
            <rabo-card heading="Normal">
              <rabo-form slot="content"></rabo-form>
            </rabo-card>
          </div>
        </main>
      </Host>
    );
  }
}
