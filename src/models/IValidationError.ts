import {FormInputEnum} from "../utils/enums/FormInputEnum.ts";

export interface IValidationError {
    inputFieldType: FormInputEnum;
    msg: string;
    type: "VALIDATION";
}

export const isValidationError = (object: any): object is IValidationError =>
    "inputFieldType" in object && "msg" in object && "type" in object && object.type === "VALIDATION";