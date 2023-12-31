import classes from "./EditRecordBox.module.sass";
import AsideButton from "../../../UI/layoutUI/asideButton/AsideButton.tsx";
import {FC, memo} from "react";

interface EditRecordPopupProps {
    onEditClick: () => void;
    onDeleteClick: () => void;
}

const EditRecordBox: FC<EditRecordPopupProps> = memo(({onEditClick, onDeleteClick}) => {

    return (
        <div className={classes.editRecordPopup} onClick={e => e.stopPropagation()}>
            <AsideButton content={"Изменить"} iconClasses={"fa-regular fa-pen-to-square"} onClick={onEditClick}/>
            <AsideButton content={"Удалить"} iconClasses={"fa-regular fa-trash-can"} onClick={onDeleteClick}/>
        </div>
    );
});

export default EditRecordBox;