import { newSpecPage } from '@stencil/core/testing';
import { RaboMoneyInput } from '../rabo-money-input';

describe('rabo-money-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RaboMoneyInput],
      html: `<rabo-money-input></rabo-money-input>`,
    });
    expect(page.root).toEqualHtml(`
      <rabo-money-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rabo-money-input>
    `);
  });
});
