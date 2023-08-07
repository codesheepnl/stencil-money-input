import { newE2EPage } from '@stencil/core/testing';

describe('rabo-layout', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rabo-layout></rabo-layout>');

    const element = await page.find('rabo-layout');
    expect(element).toHaveClass('hydrated');
  });
});
