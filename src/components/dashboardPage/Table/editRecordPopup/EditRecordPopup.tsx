import classes from "./EditRecordPopup.module.scss";
import AsideButton from "../../../UI/asideButton/AsideButton.tsx";
import {FC} from "react";

interface EditRecordPopupProps {
    onEditClick: () => void;
}

const EditRecordPopup: FC<EditRecordPopupProps> = ({onEditClick}) => {

    return (
        <div className={classes.editRecordPopup} onClick={e => e.stopPropagation()}>
            <AsideButton content={"Изменить"} iconClasses={"fa-regular fa-pen-to-square"} onClick={onEditClick}/>
            <AsideButton content={"Удалить"} iconClasses={"fa-regular fa-trash-can"}/>
        </div>
    );
};

export default EditRecordPopup;