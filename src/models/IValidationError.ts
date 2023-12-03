import {ResponseInputTypeEnum} from "../utils/enums/ResponseInputTypeEnum.ts";

export interface IValidationError {
    inputFieldType: ResponseInputTypeEnum;
    msg: string;
    type: "VALIDATION";
}

export const isValidationError = (object: IValidationError): object is IValidationError =>
    isObject(object) && "inputFieldType" in object && "msg" in object && "type" in object && object.type === "VALIDATION";

export const isObject = (object: object) => typeof object === 'object' && !Array.isArray(object) && object !== null;