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
          <div class="card">
            <slot name="content" />
          </div>
        </mock:shadow-root>
      </rabo-card>
    `);
  });

  it('should render heading', async () => {
    const page = await newSpecPage({
      components: [RaboCard],
      html: `<rabo-card heading="Hello"></rabo-card>`,
    });
    expect(page.root).toEqualHtml(`
      <rabo-card heading="Hello">
        <mock:shadow-root>
          <div class="card">
            <div class="card__heading">
              <h3>Hello</h3>
            </div>
            <slot name="content" />
          </div>
        </mock:shadow-root>
      </rabo-card>
    `);
  });

  it('should render content', async () => {
    const page = await newSpecPage({
      components: [RaboCard],
      html: `<rabo-card><span name="content">I am content</span></rabo-card>`,
    });
    expect(page.root).toEqualHtml(`
      <rabo-card>
        <mock:shadow-root>
          <div class="card">
            <slot name="content"></slot>
          </div>
        </mock:shadow-root>
        <span name="content">I am content</span>
      </rabo-card>
    `);
  });
});
