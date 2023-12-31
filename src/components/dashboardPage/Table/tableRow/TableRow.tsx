import classes from "./TableRow.module.sass";
import Checkbox from "../../../UI/checkbox/Checkbox.tsx";
import EditRecordButton from "../editRecordButton/EditRecordButton.tsx";
import {FC, memo} from "react";
import {formatNumeralFullDate} from "../../../../services/DateService.ts";
import {IRecord} from "../../../../models/IRecord.ts";
import {useDeleteRecordMutation} from "../../../../api/recordApi.ts";

interface TableRowProps {
    record: IRecord;
    openEditingPopup: (record: IRecord) => void;
    selectRecord: (record: IRecord) => void;
    unselectRecord: (record: IRecord) => void;
    selected: boolean;
}

const TableRow: FC<TableRowProps> = memo(({record, openEditingPopup, selectRecord, unselectRecord}) => {

    const [ deleteRecord ] = useDeleteRecordMutation();

    return (
        <li className={classes.tableRow}>
            <Checkbox onChange={value => value ? selectRecord(record) : unselectRecord(record)}/>
            <span>{formatNumeralFullDate(record.date)}</span>
            <span>{`${record.currentWeight}кг`}</span>
            <EditRecordButton openRecordPopup={() => openEditingPopup(record)} deleteRecord={() => deleteRecord(record.id)}/>
        </li>
    );
});

export default TableRow;