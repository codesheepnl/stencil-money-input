import { newE2EPage } from '@stencil/core/testing';

describe('rabo-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rabo-card></rabo-card>');

    const element = await page.find('rabo-card');
    expect(element).toHaveClass('hydrated');
  });
});
