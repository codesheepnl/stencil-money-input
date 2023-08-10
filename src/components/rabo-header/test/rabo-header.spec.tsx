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
          <div class="header">
            <h1 class="header__heading">Rabo Money Input</h1>
          </div> 
        </mock:shadow-root>
      </rabo-header>
    `);
  });
});
