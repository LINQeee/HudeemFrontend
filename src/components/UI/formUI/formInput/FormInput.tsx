import classes from "./FormInput.module.sass";
import React, {Dispatch, FC, memo, SetStateAction} from "react";
import {FormInputEnum} from "../../../../utils/enums/FormInputEnum.ts";
import {parseResponseInputToInput} from "../../../../utils/EnumParser.ts";
import {usePasswordInput} from "../../../../hooks/UsePasswordInput.tsx";
import {useDateInput} from "../../../../hooks/UseDateInput.tsx";
import {findErrorWithInput, generateId} from "../../../../utils/Utils.ts";
import {IUseForm} from "../../../../hooks/UseForm.ts";

interface TextInputProps {
    type: FormInputEnum;
    label: string;
    value: string | number | undefined;
    setValue: ((value: string | number) => void )| Dispatch<SetStateAction<string>>;
    formHook?: IUseForm;
    autocomplete?: string;
}

const FormInput: FC<TextInputProps> = memo(({autocomplete, type, label, value, setValue, formHook}) => {

    const error = formHook ? findErrorWithInput(formHook.errors, type) : undefined;
    const [passwordType, passwordIcon] = usePasswordInput(type);
    const [dateClickHandler, dateIcon] = useDateInput(type);
    const inputClassName = [classes.textInput, error ? classes.error : undefined].join(" ");

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
        if (formHook && error) formHook.removeError(error);
    }

    const generatedId = generateId();

    return (
        <div className={inputClassName}>
            <label htmlFor={generatedId}>{label}</label>
            <input
                id={generatedId}
                type={type === FormInputEnum.PASSWORD ? passwordType : parseResponseInputToInput(type)}
                required
                value={value || ""}
                onChange={changeHandler}
                onClick={dateClickHandler}
                autoComplete={autocomplete || "off"}
                spellCheck={false}
            />
            {dateIcon}
            {passwordIcon}
            <span>{error?.errorMessage}</span>
        </div>
    );
});

export default FormInput;