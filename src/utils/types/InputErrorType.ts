import {InputType} from "../enums/InputTypeEnum.ts";

export interface IInputError {
    inputType: InputType;
    errorMessage: string;
}