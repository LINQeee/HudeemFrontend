import classes from "./EditRecordButton.module.scss";
import {usePopup} from "../../../../hooks/UsePopup.ts";
import EditRecordBox from "../editRecordBox/EditRecordBox.tsx";
import Popup from "../../../UI/popup/Popup.tsx";
import {FC} from "react";

interface EditButtonProps {
    openRecordPopup: () => void;
    deleteRecord: () => void;
}

const EditRecordButton: FC<EditButtonProps> = ({openRecordPopup, deleteRecord}) => {

    const {popupVisible, openPopup, closePopup} = usePopup();

    const openFormAndClosePopup = () => {
        closePopup();
        openRecordPopup();
    }

    return (
        <div className={classes.editButton} onClick={openPopup}>
            <i className="fa-regular fa-ellipsis"></i>
            <Popup popupVisible={popupVisible}>
                <EditRecordBox onEditClick={openFormAndClosePopup} onDeleteClick={deleteRecord}/>
            </Popup>
        </div>
    );
};

export default EditRecordButton;