import classes from "./FormInput.module.scss";
import React, {Dispatch, FC, SetStateAction} from "react";
import {InputType} from "../../../utils/enums/InputTypeEnum.ts";
import {IInputError} from "../../../utils/types/InputErrorType.ts";

interface TextInputProps {
    type: InputType;
    label: string;
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    error: IInputError | undefined;
    removeError: (error: IInputError) => void;
}

const FormInput: FC<TextInputProps> = ({type, label, value, setValue, error, removeError}) => {

    const inputClassName = [classes.textInput, error ? classes.error : undefined].join(" ");

    const dateClickHandler = (event: React.MouseEvent<HTMLInputElement>) => {
        if (event.currentTarget.type !== InputType.DATE) return;
        event.currentTarget.showPicker();
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
        if (error) removeError(error);
    }

    return (
        <div className={inputClassName}>
            <label>{label}</label>
            <input
                type={type}
                required
                value={value}
                onChange={changeHandler}
                onClick={dateClickHandler}
            />
            { type === InputType.DATE && <i className="fa-regular fa-calendar-days"></i>}
            <span>{error?.errorMessage}</span>
        </div>
    );
};

export default FormInput;