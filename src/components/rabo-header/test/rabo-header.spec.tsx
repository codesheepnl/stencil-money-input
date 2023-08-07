import { newSpecPage } from '@stencil/core/testing';
import { RaboHeader } from '../rabo-header';

describe('rabo-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RaboHeader],
      html: `<rabo-header></rabo-header>`,
    });
    expect(page.root).toEqualHtml(`
      <rabo-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rabo-header>
    `);
  });
});
