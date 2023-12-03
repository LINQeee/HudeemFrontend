import {ResponseInputTypeEnum} from "./enums/ResponseInputTypeEnum.ts";
import {InputType} from "./enums/InputTypeEnum.ts";

export const parseResponseInputToInput = (responseInput: ResponseInputTypeEnum): InputType => {
    switch (responseInput) {
        case ResponseInputTypeEnum.DATE: return InputType.DATE;
        case ResponseInputTypeEnum.WEIGHT: return InputType.NUMBER;
        default: return InputType.TEXT;
    }
}