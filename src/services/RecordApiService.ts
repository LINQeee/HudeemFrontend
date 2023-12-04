import {IInputError} from "../utils/types/InputErrorType.ts";
import {isValidationError, IValidationError} from "../models/IValidationError.ts";
import {parseResponseInputToInput} from "../utils/EnumParser.ts";
import {CreateRecordTrigger, DeleteRecordTrigger, EditRecordTrigger} from "../api/recordApi.ts";
import {IRecord} from "../models/IRecord.ts";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";

export const editRecord = (editedRecord: IRecord, callback: () => void, editRecord: EditRecordTrigger): Promise<IInputError> => new Promise(reject => {

    editRecord(editedRecord).unwrap()
        .then(result => {
            console.log(result);
            callback();
        })
        .catch(err => rejectValidationError(err, reject));
});

export const createRecord = (newRecord: Omit<IRecord, "id">, callback: () => void, createRecord: CreateRecordTrigger): Promise<IInputError> => new Promise(reject => {
    createRecord(newRecord).unwrap()
        .then(response => {
            console.log(response);
            callback();
        })
        .catch(err => rejectValidationError(err, reject));
});

export const deleteRecords = async (records: IRecord[], callback: () => void, deleteRecord: DeleteRecordTrigger) => {
    for (const record of records) {
        await deleteRecord(record.id);
    }
    callback();
}

const rejectValidationError = (error: FetchBaseQueryError, reject: (value: (IInputError | PromiseLike<IInputError>)) => void) => {
    if (typeof error.data === 'object' && isValidationError(error.data as IValidationError)) {
        const validationError = error.data as IValidationError;
        reject({inputType: parseResponseInputToInput(validationError.inputFieldType), errorMessage: validationError.msg});
    }
}