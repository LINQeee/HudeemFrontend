import classes from "./TableRow.module.scss";
import Checkbox from "../../../UI/checkbox/Checkbox.tsx";
import EditButton from "../editButton/EditButton.tsx";
import {FC} from "react";
import {formatNumeralFullDate} from "../../../../services/DateService.ts";
import {IRecord} from "../../../../models/IRecord.ts";
import {useDeleteRecordMutation} from "../../../../api/recordApi.ts";

interface TableRowProps {
    record: IRecord;
    openEditingPopup: (record: IRecord) => void;
}

const TableRow: FC<TableRowProps> = ({record, openEditingPopup}) => {

    const [ deleteRecord ] = useDeleteRecordMutation();

    return (
        <div className={classes.tableRow}>
            <Checkbox/>
            <span>{formatNumeralFullDate(record.date)}</span>
            <span>{`${record.currentWeight}кг`}</span>
            <EditButton openRecordPopup={() => openEditingPopup(record)} deleteRecord={() => deleteRecord(record.id)}/>
        </div>
    );
};

export default TableRow;