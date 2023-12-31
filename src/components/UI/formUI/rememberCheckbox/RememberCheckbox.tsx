import classes from "./RememberCheckbox.module.sass";
import Checkbox from "../../checkbox/Checkbox.tsx";
import {FC} from "react";

interface RememberCheckboxProps {
    onChange: () => void;
}

const RememberCheckbox: FC<RememberCheckboxProps> = ({onChange}) => {
    return (
        <div className={classes.rememberCheckbox}>
            <Checkbox onChange={onChange}/>
            <span>Запомнить меня на 30 дней</span>
        </div>
    );
};

export default RememberCheckbox;