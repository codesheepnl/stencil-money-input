/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ButtonTheme, ButtonType, FormSchema } from "./constants/form";
import { Currency, Separator } from "./constants/currency";
export { ButtonTheme, ButtonType, FormSchema } from "./constants/form";
export { Currency, Separator } from "./constants/currency";
export namespace Components {
    interface RaboButton {
        "disabled"?: boolean;
        "fullWidth"?: boolean;
        "label": string;
        "theme"?: ButtonTheme;
        "type"?: ButtonType;
    }
    interface RaboCard {
        "heading"?: string;
    }
    interface RaboForm {
        "schema": FormSchema;
        "value": Record<string, any>;
    }
    interface RaboHeader {
    }
    interface RaboLayout {
    }
    interface RaboMoneyInput {
        "currency"?: Currency;
        "disabled"?: boolean;
        "error"?: string;
        "hint"?: string;
        "label"?: string;
        "name": string;
        "required"?: boolean;
        "separator"?: Separator;
        "value": number;
    }
}
export interface RaboFormCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLRaboFormElement;
}
export interface RaboMoneyInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLRaboMoneyInputElement;
}
declare global {
    interface HTMLRaboButtonElement extends Components.RaboButton, HTMLStencilElement {
    }
    var HTMLRaboButtonElement: {
        prototype: HTMLRaboButtonElement;
        new (): HTMLRaboButtonElement;
    };
    interface HTMLRaboCardElement extends Components.RaboCard, HTMLStencilElement {
    }
    var HTMLRaboCardElement: {
        prototype: HTMLRaboCardElement;
        new (): HTMLRaboCardElement;
    };
    interface HTMLRaboFormElement extends Components.RaboForm, HTMLStencilElement {
    }
    var HTMLRaboFormElement: {
        prototype: HTMLRaboFormElement;
        new (): HTMLRaboFormElement;
    };
    interface HTMLRaboHeaderElement extends Components.RaboHeader, HTMLStencilElement {
    }
    var HTMLRaboHeaderElement: {
        prototype: HTMLRaboHeaderElement;
        new (): HTMLRaboHeaderElement;
    };
    interface HTMLRaboLayoutElement extends Components.RaboLayout, HTMLStencilElement {
    }
    var HTMLRaboLayoutElement: {
        prototype: HTMLRaboLayoutElement;
        new (): HTMLRaboLayoutElement;
    };
    interface HTMLRaboMoneyInputElement extends Components.RaboMoneyInput, HTMLStencilElement {
    }
    var HTMLRaboMoneyInputElement: {
        prototype: HTMLRaboMoneyInputElement;
        new (): HTMLRaboMoneyInputElement;
    };
    interface HTMLElementTagNameMap {
        "rabo-button": HTMLRaboButtonElement;
        "rabo-card": HTMLRaboCardElement;
        "rabo-form": HTMLRaboFormElement;
        "rabo-header": HTMLRaboHeaderElement;
        "rabo-layout": HTMLRaboLayoutElement;
        "rabo-money-input": HTMLRaboMoneyInputElement;
    }
}
declare namespace LocalJSX {
    interface RaboButton {
        "disabled"?: boolean;
        "fullWidth"?: boolean;
        "label"?: string;
        "theme"?: ButtonTheme;
        "type"?: ButtonType;
    }
    interface RaboCard {
        "heading"?: string;
    }
    interface RaboForm {
        "onFormSubmit"?: (event: RaboFormCustomEvent<typeof this.value>) => void;
        "schema": FormSchema;
        "value": Record<string, any>;
    }
    interface RaboHeader {
    }
    interface RaboLayout {
    }
    interface RaboMoneyInput {
        "currency"?: Currency;
        "disabled"?: boolean;
        "error"?: string;
        "hint"?: string;
        "label"?: string;
        "name": string;
        "onValueChange"?: (event: RaboMoneyInputCustomEvent<number>) => void;
        "required"?: boolean;
        "separator"?: Separator;
        "value": number;
    }
    interface IntrinsicElements {
        "rabo-button": RaboButton;
        "rabo-card": RaboCard;
        "rabo-form": RaboForm;
        "rabo-header": RaboHeader;
        "rabo-layout": RaboLayout;
        "rabo-money-input": RaboMoneyInput;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "rabo-button": LocalJSX.RaboButton & JSXBase.HTMLAttributes<HTMLRaboButtonElement>;
            "rabo-card": LocalJSX.RaboCard & JSXBase.HTMLAttributes<HTMLRaboCardElement>;
            "rabo-form": LocalJSX.RaboForm & JSXBase.HTMLAttributes<HTMLRaboFormElement>;
            "rabo-header": LocalJSX.RaboHeader & JSXBase.HTMLAttributes<HTMLRaboHeaderElement>;
            "rabo-layout": LocalJSX.RaboLayout & JSXBase.HTMLAttributes<HTMLRaboLayoutElement>;
            "rabo-money-input": LocalJSX.RaboMoneyInput & JSXBase.HTMLAttributes<HTMLRaboMoneyInputElement>;
        }
    }
}
