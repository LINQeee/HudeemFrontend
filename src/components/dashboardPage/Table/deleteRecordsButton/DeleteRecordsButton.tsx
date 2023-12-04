import classes from "./DeleteRecordsButton.module.scss";
import {FC} from "react";

interface DeleteRecordsButtonProps {
    onClick: () => void;
}

const DeleteRecordsButton: FC<DeleteRecordsButtonProps> = ({onClick}) => {
    return (
        <button className={classes.button} onClick={onClick}>
            <i className={"fa-regular fa-trash-can"}></i>
        </button>
    );
};

export default DeleteRecordsButton;