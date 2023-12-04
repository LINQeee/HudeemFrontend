import {ResponseInputTypeEnum} from "../utils/enums/ResponseInputTypeEnum.ts";

export interface IValidationError {
    inputFieldType: ResponseInputTypeEnum;
    msg: string;
    type: "VALIDATION";
}

export const isValidationError = (object: any): object is IValidationError =>
    "inputFieldType" in object && "msg" in object && "type" in object && object.type === "VALIDATION";