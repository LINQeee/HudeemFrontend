import classes from "./Checkbox.module.sass";
import React, {FC, memo} from "react";
import {generateId} from "../../../utils/Utils.ts";

interface CheckboxProps {
    value?: boolean;
    onChange: (value: boolean) => void;
}

const Checkbox: FC<CheckboxProps> = memo(({value, onChange}) => {

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.currentTarget.checked);
    }

    const generatedId = generateId();

    return (
        <div className={classes.checkbox}>
            <label htmlFor={generatedId}>select checkbox</label>
            <input id={generatedId} type={"checkbox"} checked={value} onChange={changeHandler}/>
            <i className="fa-regular fa-check"></i>
        </div>
    );
});

export default Checkbox;