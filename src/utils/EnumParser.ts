import {FormInputEnum} from "./enums/FormInputEnum.ts";
import {InputType} from "./enums/InputTypeEnum.ts";

export const parseResponseInputToInput = (responseInput: FormInputEnum): InputType => {
    switch (responseInput) {
        case FormInputEnum.DATE: return InputType.DATE;
        case FormInputEnum.WEIGHT: return InputType.NUMBER;
        case FormInputEnum.PASSWORD: return InputType.PASSWORD;
        case FormInputEnum.EMAIL: return InputType.EMAIL;
        default: return InputType.TEXT;
    }
}