import { newE2EPage } from '@stencil/core/testing';

describe('rabo-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rabo-button></rabo-button>');

    const element = await page.find('rabo-button');
    expect(element).toHaveClass('hydrated');
  });
});
