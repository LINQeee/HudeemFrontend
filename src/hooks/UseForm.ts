import {useState} from "react";
import {validateAllFields} from "../services/ValidateService.ts";
import {IValidateField} from "../types&enums/ValidateInputType.ts";

type IUseForm = [
    boolean,
    (fields: IValidateField[]) => boolean
]

export const useForm = (): IUseForm => {
    const [submitted, setSubmitted] = useState<boolean>(false);

    const submit = (fields: IValidateField[]): boolean => {
        setSubmitted(true);
        const valid = validateAllFields(fields);
        if (valid) setSubmitted(false);
        return valid;
    }

    return [submitted, submit];
}