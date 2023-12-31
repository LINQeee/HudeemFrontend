import classes from "./GenderInput.module.sass";
import {findErrorWithInput, generateId} from "../../../../utils/Utils.ts";
import {IUseForm} from "../../../../hooks/UseForm.ts";
import {FC} from "react";
import {FormInputEnum} from "../../../../utils/enums/FormInputEnum.ts";
import {Gender} from "../../../../utils/enums/GenderEnum.ts";

interface GenderInputProps {
    formHook: IUseForm;
    onChange: (value: Gender) => void;
}

const GenderInput: FC<GenderInputProps> = ({formHook, onChange}) => {

    const maleId = generateId();
    const femaleId = generateId();

    const error = findErrorWithInput(formHook.errors, FormInputEnum.GENDER);
    const inputClassNames = [classes.genderInput, error ? classes.error : undefined].join(" ");

    const handleChange = (newValue: Gender) => {
        onChange(newValue);
        if (error) formHook.removeError(error);
    }

    return (
        <div className={inputClassNames}>
            <span>Пол</span>
            <div>
                <div className={classes.choice}>
                    <i className={"fa-regular fa-circle"}></i>
                    <input id={maleId} type={"radio"} name={"gender"} onChange={() => handleChange(Gender.MALE)}/>
                    <label htmlFor={maleId}>Мужской</label>
                    <i className={"fa-solid fa-person"}></i>
                </div>
                <div className={classes.choice}>
                    <i className={"fa-regular fa-circle"}></i>
                    <input id={femaleId} type={"radio"} name={"gender"} onChange={() => handleChange(Gender.FEMALE)}/>
                    <label htmlFor={femaleId}>Женский</label>
                    <i className={"fa-solid fa-person-dress"}></i>
                </div>
            </div>
            <span>{error?.errorMessage}</span>
        </div>
    );
};

export default GenderInput;