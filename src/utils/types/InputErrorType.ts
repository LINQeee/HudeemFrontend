import {FormInputEnum} from "../enums/FormInputEnum.ts";

export interface IInputError {
    inputType: FormInputEnum;
    errorMessage: string;
}

export const isInputError = (object: any): object is IInputError =>
    typeof object === "object" && "inputType" in object && "errorMessage" in object;