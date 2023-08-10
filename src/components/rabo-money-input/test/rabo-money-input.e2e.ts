import { newE2EPage } from '@stencil/core/testing';

describe('rabo-money-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rabo-money-input value="0" name="amount"></rabo-money-input>');

    const element = await page.find('rabo-money-input');
    expect(element).toHaveClass('hydrated');
  });

  it('should fire change event if something is entered', async () => {
    const page = await newE2EPage();
    await page.setContent('<rabo-money-input value="0" name="amount"></rabo-money-input>');

    const changeEvent = await page.spyOnEvent('valueChange');
    const integer = await page.find('rabo-money-input >>> input.input__integer');

    await integer.press('1');
    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(changeEvent).toHaveReceivedEventDetail(1);
  });
});
