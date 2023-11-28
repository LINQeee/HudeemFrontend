import {IInputError} from "../types&enums/InputErrorType.ts";
import {InputType} from "../types&enums/InputTypeEnum.ts";
import {IValidateField} from "../types&enums/ValidateInputType.ts";

export const validateField = ({value, type}: IValidateField): IInputError => {
    let inputError: IInputError = {isError: false, errorMessage: ""};

    switch (type) {
        case InputType.TEXT:
            if (isEmptyOrSpaces(value)) inputError = {isError: true, errorMessage: "Введите значение!"};
            break;
        case InputType.DATE:
            if (isEmptyOrSpaces(value)) inputError = {isError: true, errorMessage: "Введите дату!"};
            else if (!Date.parse(value)) inputError = {isError: true, errorMessage: "Некорректная дата!"};
            else if (new Date(value) > new Date()) inputError = {isError: true, errorMessage: "Дата из будущего!"};
            break;
        case InputType.NUMBER:
            if (isEmptyOrSpaces(value)) inputError = {isError: true, errorMessage: "Введите число!"};
            if (parseFloat(value) < 0) inputError = {isError: true, errorMessage: "Число не может быть отрицательным!"};
    }

    return inputError;
}

export const validateAllFields = (fieldArray: IValidateField[]): boolean => {
    let valid = true;
    fieldArray.forEach(field => {
       if (validateField(field).isError) valid = false;
    });

    return valid;
}

const isEmptyOrSpaces = (str: string): boolean => {
    return str === null || str.match(/^ *$/) !== null;
}