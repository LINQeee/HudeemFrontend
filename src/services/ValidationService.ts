import {IValidateField} from "../utils/types/ValidateInputType.ts";
import {IInputError} from "../utils/types/InputErrorType.ts";
import {FormInputEnum} from "../utils/enums/FormInputEnum.ts";

export const validateField = ({value, type}: IValidateField): IInputError | undefined => {
    switch (type) {
        case FormInputEnum.EMAIL:
            if (isEmptyOrSpaces(value)) return {inputType: type, errorMessage: "Введите почту!"};
            if (!isEmailValid(value)) return {inputType: type, errorMessage: "Некорректная почта!"};
            break;
        case FormInputEnum.DATE:
            if (isEmptyOrSpaces(value)) return {inputType: type, errorMessage: "Введите дату!"};
            if (!Date.parse(value)) return {inputType: type, errorMessage: "Некорректная дата!"};
            if (new Date(value) > new Date()) return {inputType: type, errorMessage: "Дата из будущего!"};
            break;
        case FormInputEnum.WEIGHT:
        case FormInputEnum.AGE:
        case FormInputEnum.HEIGHT:
            if (isEmptyOrSpaces(value)) return {inputType: type, errorMessage: "Введите значение!"};
            if (parseFloat(value) < 0) return {inputType: type, errorMessage: "Значение не может быть отрицательным!"};
            break;
        case FormInputEnum.PASSWORD:
        case FormInputEnum.USERNAME:
        case FormInputEnum.GENDER:
            if (isEmptyOrSpaces(value)) return {inputType: type, errorMessage: "Введите значение!"};
            break;
    }

    return undefined;
}

export const validateAllFields = (fieldArray: IValidateField[]): IInputError[] => {
    const errors: IInputError[] = [];
    fieldArray.forEach(field => {
        const validateResult = validateField(field);
        if (validateResult) errors.push(validateResult);
    });

    return errors;
}

const isEmptyOrSpaces = (str: string): boolean => {
    return str === null || str.match(/^ *$/) !== null;
}

const isEmailValid = (email: string): boolean =>
    email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) !== null;