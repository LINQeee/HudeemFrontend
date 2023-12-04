import {validateAllFields} from "../services/ValidationService.ts";
import {IValidateField} from "../utils/types/ValidateInputType.ts";
import {IInputError} from "../utils/types/InputErrorType.ts";
import {useArrayState} from "./UseArrayState.ts";

type IUseForm = [
    IInputError[],
    (error: IInputError) => void,
    (fields: IValidateField[]) => void
]

export const useForm = (onSubmitForm: () => Promise<IInputError>): IUseForm => {

    const [errors, addError, removeError, addErrors] = useArrayState<IInputError>([]);

    const submit = (fields: IValidateField[]) => {
        const validateResult = validateAllFields(fields);

        if (!validateResult.length) {
            onSubmitForm().then(error => {
                addError(error)
            });
        } else {
            addErrors(validateResult);
        }
    }

    return [errors, removeError, submit];
}