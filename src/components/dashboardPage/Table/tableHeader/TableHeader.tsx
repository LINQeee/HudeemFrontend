import classes from "./TableHeader.module.scss";
import DeleteRecordsButton from "../deleteRecordsButton/DeleteRecordsButton.tsx";
import {FC} from "react";
import Popup from "../../../UI/popup/Popup.tsx";

interface TableHeaderProps {
    enableDeleteButton: boolean;
    onDeleteButtonClick: () => void;
}

const TableHeader: FC<TableHeaderProps> = ({enableDeleteButton, onDeleteButtonClick}) => {
    return (
        <div className={classes.tableHeader}>
            <Popup popupVisible={enableDeleteButton}><DeleteRecordsButton onClick={onDeleteButtonClick}/></Popup>
            <span>Дата</span>
            <span>Вес</span>
        </div>
    );
};

export default TableHeader;