import {FormInputEnum} from "../../utils/enums/FormInputEnum.ts";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {IInputError} from "../../utils/types/InputErrorType.ts";

export interface IValidationError {
    inputFieldType: FormInputEnum;
    msg: string;
    type: "VALIDATION";
}

export const isValidationError = (object: any): object is IValidationError =>
    typeof object === "object" && "inputFieldType" in object && "msg" in object && "type" in object && object.type === "VALIDATION";

export const rejectValidationError = (error: FetchBaseQueryError, reject: (value: (IInputError | PromiseLike<IInputError>)) => void) => {
    if (isValidationError(error.data as IValidationError)) {
        const validationError = error.data as IValidationError;
        reject({inputType: validationError.inputFieldType, errorMessage: validationError.msg});
    }
}