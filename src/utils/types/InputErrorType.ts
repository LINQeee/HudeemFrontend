import {FormInputEnum} from "../enums/FormInputEnum.ts";

export interface IInputError {
    inputType: FormInputEnum;
    errorMessage: string;
}