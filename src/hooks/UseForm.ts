import {useState} from "react";
import {validateAllFields} from "../services/ValidateService.ts";
import {IValidateField} from "../types&enums/ValidateInputType.ts";

type IUseForm = [
    boolean,
    (fields: IValidateField[]) => Promise<boolean>
]

export const useForm = (): IUseForm => {
    const [submitted, setSubmitted] = useState<boolean>(false);

    const submit = (fields: IValidateField[]): Promise<boolean> => new Promise((resolve, reject) => {
        setSubmitted(true);
        const valid = validateAllFields(fields);
        if (valid) {
            setSubmitted(false);
            resolve(valid);
        }
        else reject(valid);
    });

    return [submitted, submit];
}