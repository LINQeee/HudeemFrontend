import classes from "./FormInput.module.sass";
import React, {Dispatch, FC, memo, SetStateAction} from "react";
import {IInputError} from "../../../utils/types/InputErrorType.ts";
import {FormInputEnum} from "../../../utils/enums/FormInputEnum.ts";
import {parseResponseInputToInput} from "../../../utils/EnumParser.ts";
import {usePasswordInput} from "../../../hooks/UsePasswordInput.tsx";
import {useDateInput} from "../../../hooks/UseDateInput.tsx";

interface TextInputProps {
    type: FormInputEnum;
    label: string;
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    error?: IInputError;
    removeError?: (error: IInputError) => void;
}

const FormInput: FC<TextInputProps> = memo(({type, label, value, setValue, error, removeError}) => {

    const [passwordType, passwordIcon] = usePasswordInput(type);
    const [dateClickHandler, dateIcon] = useDateInput(type);
    const inputClassName = [classes.textInput, error ? classes.error : undefined].join(" ");

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
        if (error && removeError) removeError(error);
    }

    return (
        <div className={inputClassName}>
            <label htmlFor={new Date().toISOString()}>{label}</label>
            <input
                id={new Date().toISOString()}
                type={type === FormInputEnum.PASSWORD ? passwordType : parseResponseInputToInput(type)}
                required
                value={value}
                onChange={changeHandler}
                onClick={dateClickHandler}
            />
            {dateIcon}
            {passwordIcon}
            <span>{error?.errorMessage}</span>
        </div>
    );
});

export default FormInput;