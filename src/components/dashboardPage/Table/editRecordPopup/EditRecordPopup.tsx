import classes from "./EditRecordPopup.module.scss";
import AsideButton from "../../../UI/asideButton/AsideButton.tsx";
import {useContext} from "react";
import {PopupVisibleContext} from "../../../../hooks/UsePopup.ts";

const EditRecordPopup = () => {

    const {openPopup: openFormPopup} = useContext(PopupVisibleContext)!;

    return (
        <div className={classes.editRecordPopup} onClick={e => e.stopPropagation()}>
            <AsideButton content={"Изменить"} iconClasses={"fa-regular fa-pen-to-square"} onClick={openFormPopup}/>
            <AsideButton content={"Удалить"} iconClasses={"fa-regular fa-trash-can"}/>
        </div>
    );
};

export default EditRecordPopup;