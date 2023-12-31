import {IInputError} from "./types/InputErrorType.ts";
import {FormInputEnum} from "./enums/FormInputEnum.ts";

export const generateId = ():string => {
    return new Date().toISOString() + Math.random() * 500;
}

export const findErrorWithInput = (errors: IInputError[], inputType: FormInputEnum): IInputError | undefined => errors.find(error => error.inputType === inputType);