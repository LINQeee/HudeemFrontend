import classes from "./TableRow.module.scss";
import Checkbox from "../../../UI/checkbox/Checkbox.tsx";
import EditButton from "../editButton/EditButton.tsx";
import {FC} from "react";
import {formatNumeralFullDate} from "../../../../services/DateService.ts";
import {IRecord} from "../../../../models/IRecord.ts";

interface TableRowProps {
    record: IRecord;
    openEditingPopup: (record: IRecord) => void;
}

const TableRow: FC<TableRowProps> = ({record, openEditingPopup}) => {
    return (
        <div className={classes.tableRow}>
            <Checkbox/>
            <span>{formatNumeralFullDate(record.date)}</span>
            <span>{`${record.currentWeight}кг`}</span>
            <EditButton openRecordPopup={openEditingPopup} record={record}/>
        </div>
    );
};

export default TableRow;