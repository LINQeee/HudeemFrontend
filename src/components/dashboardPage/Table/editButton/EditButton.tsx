import classes from "./EditButton.module.scss";
import {usePopup} from "../../../../hooks/UsePopup.ts";
import EditRecordPopup from "../editRecordPopup/EditRecordPopup.tsx";
import Popup from "../../../UI/popup/Popup.tsx";

const EditButton = () => {

    const {popupVisible, openPopup} = usePopup();

    return (
        <div className={classes.editButton} onClick={openPopup}>
            <i className="fa-regular fa-ellipsis"></i>
            <Popup popupVisible={popupVisible}>
                <EditRecordPopup/>
            </Popup>
        </div>
    );
};

export default EditButton;