import {ResponseInputTypeEnum} from "../utils/enums/ResponseInputTypeEnum.ts";

export interface IValidationError {
    inputFieldType: ResponseInputTypeEnum;
    msg: string;
    type: "VALIDATION";
}