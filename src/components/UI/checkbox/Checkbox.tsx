import classes from "./Checkbox.module.scss";
import React, {FC} from "react";

interface CheckboxProps {
    value?: boolean;
    onChange: (value: boolean) => void;
}

const Checkbox: FC<CheckboxProps> = ({value, onChange}) => {

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.checked);
    }

    return (
        <div className={classes.checkbox}>
            <input type={"checkbox"} checked={value} onChange={changeHandler}/>
            <i className="fa-regular fa-check"></i>
        </div>
    );
};

export default Checkbox;