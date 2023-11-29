import classes from "./EditButton.module.scss";
import {usePopup} from "../../../../hooks/UsePopup.ts";
import EditRecordPopup from "../editRecordPopup/EditRecordPopup.tsx";
import Popup from "../../../UI/popup/Popup.tsx";
import {FC} from "react";

interface EditButtonProps {
    openRecordPopup: () => void;
    deleteRecord: () => void;
}

const EditButton: FC<EditButtonProps> = ({openRecordPopup, deleteRecord}) => {

    const {popupVisible, openPopup, closePopup} = usePopup();

    const openFormAndClosePopup = () => {
        closePopup();
        openRecordPopup();
    }

    return (
        <div className={classes.editButton} onClick={openPopup}>
            <i className="fa-regular fa-ellipsis"></i>
            <Popup popupVisible={popupVisible}>
                <EditRecordPopup onEditClick={openFormAndClosePopup} onDeleteClick={deleteRecord}/>
            </Popup>
        </div>
    );
};

export default EditButton;