import { newSpecPage } from '@stencil/core/testing';
import { RaboLayout } from '../rabo-layout';

describe('rabo-layout', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RaboLayout],
      html: `<rabo-layout></rabo-layout>`,
    });
    expect(page.root).toEqualHtml(`
      <rabo-layout>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rabo-layout>
    `);
  });
});
