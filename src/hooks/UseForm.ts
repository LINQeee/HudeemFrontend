import {useState} from "react";
import {validateAllFields} from "../services/ValidationService.ts";
import {IValidateField} from "../utils/types/ValidateInputType.ts";
import {IInputError} from "../utils/types/InputErrorType.ts";

type IUseForm = [
    IInputError[],
    (error: IInputError) => void,
    (fields: IValidateField[]) => void
]

export const useForm = (onSubmitForm: () => Promise<IInputError>): IUseForm => {

    const [errors, setErrors] = useState<IInputError[]>([]);

    const submit = (fields: IValidateField[]) => {
        const validateResult = validateAllFields(fields);

        if (!validateResult.length) {
            onSubmitForm().then(error => {addError(error)});
        }
        else {
            addErrors(validateResult);
        }
    }

    const addError = (error: IInputError) => setErrors([...errors, error]);

    const addErrors = (newErrors: IInputError[]) => setErrors([...errors, ...newErrors]);

    const removeError = (error: IInputError) => setErrors([...errors].filter(err => err !== error));

    return [errors, removeError, submit];
}