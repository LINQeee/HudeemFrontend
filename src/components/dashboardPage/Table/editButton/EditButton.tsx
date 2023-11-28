import classes from "./EditButton.module.scss";
import {usePopup} from "../../../../hooks/UsePopup.ts";
import EditRecordPopup from "../editRecordPopup/EditRecordPopup.tsx";
import Popup from "../../../UI/popup/Popup.tsx";
import {FC} from "react";
import {IRecord} from "../../../../models/IRecord.ts";

interface EditButtonProps {
    openRecordPopup: (record: IRecord) => void;
    record: IRecord;
}

const EditButton: FC<EditButtonProps> = ({openRecordPopup, record}) => {

    const {popupVisible, openPopup, closePopup} = usePopup();

    const openFormAndClosePopup = () => {
        closePopup();
        openRecordPopup(record);
    }

    return (
        <div className={classes.editButton} onClick={openPopup}>
            <i className="fa-regular fa-ellipsis"></i>
            <Popup popupVisible={popupVisible}>
                <EditRecordPopup onEditClick={openFormAndClosePopup}/>
            </Popup>
        </div>
    );
};

export default EditButton;