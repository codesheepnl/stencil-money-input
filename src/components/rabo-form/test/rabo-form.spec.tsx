import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { RaboForm } from '@components/rabo-form/rabo-form';
import { FormSchema, InputTypes } from '@constants/form';

describe('rabo-form', () => {
  it('renders', async () => {
    const schema: FormSchema = [];
    const page = await newSpecPage({
      components: [RaboForm],
      template: () => <rabo-form schema={schema} value={{}}></rabo-form>,
    });
    expect(page.root).toEqualHtml(`
      <rabo-form>
        <mock:shadow-root>
          <form class="form">
            <rabo-button fullWidth label="Submit" type="submit"></rabo-button>
          </form>
        </mock:shadow-root>
      </rabo-form>
    `);
  });

  it('should render field', async () => {
    const schema: FormSchema = [
      {
        type: InputTypes.MONEY,
        name: 'amount',
        required: false,
        disabled: false,
      },
    ];
    const page = await newSpecPage({
      components: [RaboForm],
      template: () => <rabo-form schema={schema} value={{}}></rabo-form>,
    });
    expect(page.root).toEqualHtml(`
      <rabo-form>
        <mock:shadow-root>
          <form class="form">
            <rabo-money-input currency="EUR" name="amount" separator=","></rabo-money-input>
            <rabo-button fullWidth label="Submit" type="submit"></rabo-button>
          </form>
        </mock:shadow-root>
      </rabo-form>
    `);
  });
});
