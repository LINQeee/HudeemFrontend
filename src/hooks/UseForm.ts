import {validateAllFields} from "../services/ValidationService.ts";
import {IValidateField} from "../utils/types/ValidateInputType.ts";
import {IInputError, isInputError} from "../utils/types/InputErrorType.ts";
import {useArrayState} from "./UseArrayState.ts";

type IUseForm = [
    IInputError[],
    (error: IInputError) => void,
    (fields: IValidateField[]) => void
]

export const useForm = (onSubmitForm: () => Promise<IInputError> | any): IUseForm => {

    const [errors, addError, removeError, addErrors] = useArrayState<IInputError>([]);

    const submit = (fields: IValidateField[]) => {
        const validateResult = validateAllFields(fields);

        if (!validateResult.length) {
            const submitResponse = onSubmitForm();
            if (submitResponse instanceof Promise) {
                submitResponse.then(error => {
                    if (isInputError(error)) addError(error)
                });
            }
        } else {
            addErrors(validateResult);
        }
    }

    return [errors, removeError, submit];
}