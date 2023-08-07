import { newE2EPage } from '@stencil/core/testing';

describe('rabo-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rabo-header></rabo-header>');

    const element = await page.find('rabo-header');
    expect(element).toHaveClass('hydrated');
  });
});
