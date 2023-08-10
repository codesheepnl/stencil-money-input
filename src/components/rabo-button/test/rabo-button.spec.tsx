import { newSpecPage } from '@stencil/core/testing';
import { RaboButton } from '../rabo-button';

describe('rabo-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RaboButton],
      html: `<rabo-button label="I am a button"></rabo-button>`,
    });
    expect(page.root).toEqualHtml(`
      <rabo-button label="I am a button">
        <button class="button button--primary" type="button">I am a button</button>
      </rabo-button>
    `);
  });

  it('should apply correct theme class', async () => {
    const page = await newSpecPage({
      components: [RaboButton],
      html: `<rabo-button theme="secondary"></rabo-button>`,
    });
    expect(page.root).toEqualHtml(`
      <rabo-button theme="secondary">
        <button class="button button--secondary" type="button"></button>
      </rabo-button>
    `);
  });

  it('should apply disabled attribute', async () => {
    const page = await newSpecPage({
      components: [RaboButton],
      html: `<rabo-button disabled="true"></rabo-button>`,
    });
    expect(page.root).toEqualHtml(`
      <rabo-button disabled="true">
        <button class="button button--primary button--is-disabled" type="button" disabled></button>
      </rabo-button>
    `);
  });

  it('should apply type attribute', async () => {
    const page = await newSpecPage({
      components: [RaboButton],
      html: `<rabo-button type="submit"></rabo-button>`,
    });
    expect(page.root).toEqualHtml(`
      <rabo-button type="submit">
        <button class="button button--primary" type="submit"></button>
      </rabo-button>
    `);
  });

  it('should apply fullWidth', async () => {
    const page = await newSpecPage({
      components: [RaboButton],
      html: `<rabo-button full-width="true"></rabo-button>`,
    });
    expect(page.root).toEqualHtml(`
      <rabo-button full-width="true">
        <button class="button button--primary button--full" type="button"></button>
      </rabo-button>
    `);
  });
});
