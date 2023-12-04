import classes from "./TableRow.module.scss";
import Checkbox from "../../../UI/checkbox/Checkbox.tsx";
import EditRecordButton from "../editRecordButton/EditRecordButton.tsx";
import {FC} from "react";
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

const TableRow: FC<TableRowProps> = ({record, openEditingPopup, selectRecord, unselectRecord}) => {

    const [ deleteRecord ] = useDeleteRecordMutation();

    return (
        <div className={classes.tableRow}>
            <Checkbox onChange={value => value ? selectRecord(record) : unselectRecord(record)}/>
            <span>{formatNumeralFullDate(record.date)}</span>
            <span>{`${record.currentWeight}кг`}</span>
            <EditRecordButton openRecordPopup={() => openEditingPopup(record)} deleteRecord={() => deleteRecord(record.id)}/>
        </div>
    );
};

export default TableRow;