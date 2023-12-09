import classes from "./DeleteRecordsButton.module.sass";
import {FC, memo} from "react";

interface DeleteRecordsButtonProps {
    onClick: () => void;
}

const DeleteRecordsButton: FC<DeleteRecordsButtonProps> = memo(({onClick}) => {
    return (
        <button className={classes.button} onClick={onClick}>
            <i className={"fa-regular fa-trash-can"}></i>
        </button>
    );
});

export default DeleteRecordsButton;