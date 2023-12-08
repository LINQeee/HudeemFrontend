import classes from "./Checkbox.module.scss";
import React, {FC, memo} from "react";

interface CheckboxProps {
    value?: boolean;
    onChange: (value: boolean) => void;
}

const Checkbox: FC<CheckboxProps> = memo(({value, onChange}) => {

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.checked);
    }

    return (
        <div className={classes.checkbox}>
            <label htmlFor={new Date().toISOString()}>select checkbox</label>
            <input id={new Date().toISOString()} type={"checkbox"} checked={value} onChange={changeHandler}/>
            <i className="fa-regular fa-check"></i>
        </div>
    );
});

export default Checkbox;