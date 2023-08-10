import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { Currency, Separator } from '@src/constants/currency';
import { RaboMoneyInput } from '@components/rabo-money-input/rabo-money-input';

describe('rabo-money-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RaboMoneyInput],
      template: () => <rabo-money-input name="amount" value={0}></rabo-money-input>,
    });
    expect(page.root).toEqualHtml(`
      <rabo-money-input>
        <mock:shadow-root>
          <div class="container">
            <label class="label" id="amount-label">Amount</label>
            <div class="input">
              <span class="input__currency">€</span>
              <input aria-labelledby="amount-label" class="input__integer" id="amount-integer" name="amount-integer" pattern="\\d+" value="" />
              <span class="input__separator">,</span>
              <input aria-labelledby="amount-label" class="input__fractional" id="amount-fractional" maxlength="2" name="amount-fractional" pattern="\\d{0,2}" value="">
            </div>
          </div>
        </mock:shadow-root>
      </rabo-money-input>
    `);
  });

  it('should put correct value in inputs', async () => {
    const page = await newSpecPage({
      components: [RaboMoneyInput],
      template: () => <rabo-money-input name="amount" value={1.99}></rabo-money-input>,
    });
    expect(page.root).toEqualHtml(`
      <rabo-money-input>
        <mock:shadow-root>
          <div class="container">
            <label class="label" id="amount-label">Amount</label>
            <div class="input">
              <span class="input__currency">€</span>
              <input aria-labelledby="amount-label" class="input__integer" id="amount-integer" name="amount-integer" pattern="\\d+" value="1" />
              <span class="input__separator">,</span>
              <input aria-labelledby="amount-label" class="input__fractional" id="amount-fractional" maxlength="2" name="amount-fractional" pattern="\\d{0,2}" value="99">
            </div>
          </div>
        </mock:shadow-root>
      </rabo-money-input>
    `);
  });

  it('should render different currency and separator', async () => {
    const page = await newSpecPage({
      components: [RaboMoneyInput],
      template: () => (
        <rabo-money-input
          name="amount"
          value={0}
          currency={Currency.USD}
          separator={Separator.DOT}
        ></rabo-money-input>
      ),
    });
    expect(page.root).toEqualHtml(`
      <rabo-money-input>
        <mock:shadow-root>
          <div class="container">
            <label class="label" id="amount-label">Amount</label>
            <div class="input">
              <span class="input__currency">$</span>
              <input aria-labelledby="amount-label" class="input__integer" id="amount-integer" name="amount-integer" pattern="\\d+" value="" />
              <span class="input__separator">.</span>
              <input aria-labelledby="amount-label" class="input__fractional" id="amount-fractional" maxlength="2" name="amount-fractional" pattern="\\d{0,2}" value="">
            </div>
          </div>
        </mock:shadow-root>
      </rabo-money-input>
    `);
  });

  it('should render disabled attribute', async () => {
    const page = await newSpecPage({
      components: [RaboMoneyInput],
      template: () => <rabo-money-input name="amount" value={0} disabled={true}></rabo-money-input>,
    });
    expect(page.root).toEqualHtml(`
      <rabo-money-input>
        <mock:shadow-root>
          <div class="container">
            <label class="label" id="amount-label">Amount</label>
            <div class="input input--is-disabled">
              <span class="input__currency">€</span>
              <input disabled aria-labelledby="amount-label" class="input__integer" id="amount-integer" name="amount-integer" pattern="\\d+" value="" />
              <span class="input__separator">,</span>
              <input disabled aria-labelledby="amount-label" class="input__fractional" id="amount-fractional" maxlength="2" name="amount-fractional" pattern="\\d{0,2}" value="">
            </div>
          </div>
        </mock:shadow-root>
      </rabo-money-input>
    `);
  });

  it('should render required attribute', async () => {
    const page = await newSpecPage({
      components: [RaboMoneyInput],
      template: () => <rabo-money-input name="amount" value={0} required></rabo-money-input>,
    });
    expect(page.root).toEqualHtml(`
      <rabo-money-input>
        <mock:shadow-root>
          <div class="container">
            <label class="label" id="amount-label">Amount</label>
            <div class="input">
              <span class="input__currency">€</span>
              <input required aria-labelledby="amount-label" class="input__integer" id="amount-integer" name="amount-integer" pattern="\\d+" value="" />
              <span class="input__separator">,</span>
              <input required aria-labelledby="amount-label" class="input__fractional" id="amount-fractional" maxlength="2" name="amount-fractional" pattern="\\d{0,2}" value="">
            </div>
          </div>
        </mock:shadow-root>
      </rabo-money-input>
    `);
  });

  it('should render hint', async () => {
    const page = await newSpecPage({
      components: [RaboMoneyInput],
      template: () => (
        <rabo-money-input name="amount" value={0} hint="This is a hint"></rabo-money-input>
      ),
    });
    expect(page.root).toEqualHtml(`
      <rabo-money-input>
        <mock:shadow-root>
          <div class="container">
            <label class="label" id="amount-label">Amount</label>
            <div class="input">
              <span class="input__currency">€</span>
              <input aria-labelledby="amount-label" class="input__integer" id="amount-integer" name="amount-integer" pattern="\\d+" value="" />
              <span class="input__separator">,</span>
              <input aria-labelledby="amount-label" class="input__fractional" id="amount-fractional" maxlength="2" name="amount-fractional" pattern="\\d{0,2}" value="">
            </div>
            <span class="hint">
              This is a hint
            </span>
          </div>
        </mock:shadow-root>
      </rabo-money-input>
    `);
  });

  it('should render error', async () => {
    const page = await newSpecPage({
      components: [RaboMoneyInput],
      template: () => (
        <rabo-money-input name="amount" value={0} error="This is an error"></rabo-money-input>
      ),
    });
    expect(page.root).toEqualHtml(`
      <rabo-money-input>
        <mock:shadow-root>
          <div class="container">
            <label class="label" id="amount-label">Amount</label>
            <div class="input input--is-invalid">
              <span class="input__currency">€</span>
              <input aria-labelledby="amount-label" class="input__integer" id="amount-integer" name="amount-integer" pattern="\\d+" value="" />
              <span class="input__separator">,</span>
              <input aria-labelledby="amount-label" class="input__fractional" id="amount-fractional" maxlength="2" name="amount-fractional" pattern="\\d{0,2}" value="">
            </div>
            <span class="error">
              This is an error
            </span>
          </div>
        </mock:shadow-root>
      </rabo-money-input>
    `);
  });

  it('should render different label', async () => {
    const page = await newSpecPage({
      components: [RaboMoneyInput],
      template: () => (
        <rabo-money-input name="amount" label="This is a label" value={0}></rabo-money-input>
      ),
    });
    expect(page.root).toEqualHtml(`
      <rabo-money-input>
        <mock:shadow-root>
          <div class="container">
            <label class="label" id="amount-label">This is a label</label>
            <div class="input">
              <span class="input__currency">€</span>
              <input aria-labelledby="amount-label" class="input__integer" id="amount-integer" name="amount-integer" pattern="\\d+" value="" />
              <span class="input__separator">,</span>
              <input aria-labelledby="amount-label" class="input__fractional" id="amount-fractional" maxlength="2" name="amount-fractional" pattern="\\d{0,2}" value="">
            </div>
          </div>
        </mock:shadow-root>
      </rabo-money-input>
    `);
  });
});
