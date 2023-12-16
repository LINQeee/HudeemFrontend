import {IInputError} from "../utils/types/InputErrorType.ts";
import {isValidationError, IValidationError} from "../models/errors/IValidationError.ts";
import {CreateRecordTrigger, DeleteRecordTrigger, EditRecordTrigger} from "../api/recordApi.ts";
import {IRecord} from "../models/IRecord.ts";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";

export const editRecord = (editedRecord: IRecord, editRecord: EditRecordTrigger): Promise<string> => new Promise((resolve, reject) => {

    editRecord(editedRecord).unwrap()
        .then(result => {
            resolve(result);
        })
        .catch(err => rejectValidationError(err, reject));
});

export const createRecord = (newRecord: Omit<IRecord, "id">, createRecord: CreateRecordTrigger): Promise<string> => new Promise((resolve, reject) => {
    createRecord(newRecord).unwrap()
        .then(response => {
            resolve(response);
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
        reject({inputType: validationError.inputFieldType, errorMessage: validationError.msg});
    }
}