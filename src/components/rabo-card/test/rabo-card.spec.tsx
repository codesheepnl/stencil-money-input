import { newSpecPage } from '@stencil/core/testing';
import { RaboCard } from '../rabo-card';

describe('rabo-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RaboCard],
      html: `<rabo-card></rabo-card>`,
    });
    expect(page.root).toEqualHtml(`
      <rabo-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rabo-card>
    `);
  });
});
