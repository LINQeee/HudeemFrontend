import classes from "./FormInput.module.sass";
import React, {Dispatch, FC, memo, SetStateAction} from "react";
import {IInputError} from "../../../utils/types/InputErrorType.ts";
import {FormInputEnum} from "../../../utils/enums/FormInputEnum.ts";
import {parseResponseInputToInput} from "../../../utils/EnumParser.ts";
import {usePasswordInput} from "../../../hooks/UsePasswordInput.tsx";
import {useDateInput} from "../../../hooks/UseDateInput.tsx";
import {generateId} from "../../../utils/Utils.ts";

interface TextInputProps {
    type: FormInputEnum;
    label: string;
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    error?: IInputError;
    removeError?: (error: IInputError) => void;
    autocomplete?: string;
}

const FormInput: FC<TextInputProps> = memo(({autocomplete, type, label, value, setValue, error, removeError}) => {

    const [passwordType, passwordIcon] = usePasswordInput(type);
    const [dateClickHandler, dateIcon] = useDateInput(type);
    const inputClassName = [classes.textInput, error ? classes.error : undefined].join(" ");

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
        if (error && removeError) removeError(error);
    }

    const generatedId = generateId();

    return (
        <div className={inputClassName}>
            <label htmlFor={generatedId}>{label}</label>
            <input
                id={generatedId}
                type={type === FormInputEnum.PASSWORD ? passwordType : parseResponseInputToInput(type)}
                required
                value={value}
                onChange={changeHandler}
                onClick={dateClickHandler}
                autoComplete={autocomplete ? autocomplete : ""}
            />
            {dateIcon}
            {passwordIcon}
            <span>{error?.errorMessage}</span>
        </div>
    );
});

export default FormInput;