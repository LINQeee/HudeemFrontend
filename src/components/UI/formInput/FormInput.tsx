import classes from "./FormInput.module.scss";
import React, {Dispatch, FC, SetStateAction} from "react";
import {InputType} from "../../../types&enums/InputTypeEnum.ts";
import {IInputError} from "../../../types&enums/InputErrorType.ts";
import {validateField} from "../../../services/ValidateService.ts";

interface TextInputProps {
    type: InputType;
    label: string;
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    isFormSubmitted: boolean;
}

const FormInput: FC<TextInputProps> = ({type, label, value, setValue, isFormSubmitted}) => {

    const validateResult: IInputError = validateField({value, type});

    const inputClassName = [classes.textInput, validateResult.isError && isFormSubmitted ? classes.error : undefined].join(" ");

    const dateClickHandler = (event: React.MouseEvent<HTMLInputElement>) => {
        if (event.currentTarget.type !== InputType.DATE) return;
        event.currentTarget.showPicker();
    }

    return (
        <div className={inputClassName}>
            <label>{label}</label>
            <input
                type={type}
                required
                value={value}
                onChange={event => setValue(event.target.value)}
                onClick={dateClickHandler}
            />
            { type === InputType.DATE && <i className="fa-regular fa-calendar-days"></i>}
            <span>{validateResult.errorMessage}</span>
        </div>
    );
};

export default FormInput;