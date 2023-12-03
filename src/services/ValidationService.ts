import {IValidateField} from "../utils/types/ValidateInputType.ts";
import {InputType} from "../utils/enums/InputTypeEnum.ts";
import {IInputError} from "../utils/types/InputErrorType.ts";

export const validateField = ({value, type}: IValidateField): IInputError | undefined => {
    switch (type) {
        case InputType.TEXT:
            if (isEmptyOrSpaces(value)) return {inputType: type, errorMessage: "Введите значение!"};
            break;
        case InputType.DATE:
            if (isEmptyOrSpaces(value)) return {inputType: type, errorMessage: "Введите дату!"};
            if (!Date.parse(value)) return {inputType: type, errorMessage: "Некорректная дата!"};
            if (new Date(value) > new Date()) return {inputType: type, errorMessage: "Дата из будущего!"};
            break;
        case InputType.NUMBER:
            if (isEmptyOrSpaces(value)) return {inputType: type, errorMessage: "Введите число!"};
            if (parseFloat(value) < 0) return {inputType: type, errorMessage: "Число не может быть отрицательным!"};
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