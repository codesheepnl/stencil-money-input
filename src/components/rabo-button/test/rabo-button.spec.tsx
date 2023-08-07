import { newSpecPage } from '@stencil/core/testing';
import { RaboButton } from '../rabo-button';

describe('rabo-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RaboButton],
      html: `<rabo-button></rabo-button>`,
    });
    expect(page.root).toEqualHtml(`
      <rabo-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rabo-button>
    `);
  });
});
