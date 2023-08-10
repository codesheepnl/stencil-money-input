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
          <header>
            <rabo-header></rabo-header>
          </header>
          <main>
           <section aria-describedby="layout-description" aria-labelledby="layout-heading" class="content">
              <div class="content__header">
                <h2 id="layout-heading">Demo | form variations</h2>
                <p id="layout-description">
                  Below are some variations on the money input, configured with the<code>schema</code>
                  property.
                </p>
              </div>
              <div class="content__cards">
                <rabo-card heading="Regular">
                  <rabo-form slot="content"></rabo-form>
                </rabo-card>
                <rabo-card heading="With Required">
                  <rabo-form slot="content"></rabo-form>
                </rabo-card>
                <rabo-card heading="With disabled">
                  <rabo-form slot="content"></rabo-form>
                </rabo-card>
                <rabo-card heading="With Hint">
                  <rabo-form slot="content"></rabo-form>
                </rabo-card>
                <rabo-card heading="With multiple fields">
                  <rabo-form slot="content"></rabo-form>
                </rabo-card>
              </div>
            </section>
          </main>
        </mock:shadow-root>
      </rabo-layout>
    `);
  });
});
