import classes from "./TableRow.module.scss";
import Checkbox from "../../../UI/checkbox/Checkbox.tsx";
import EditButton from "../editButton/EditButton.tsx";
import {FC} from "react";
import {formatNumeralFullDate} from "../../../../services/DateService.ts";

interface TableRowProps {
    isoDate: string;
    weight: number;
}

const TableRow: FC<TableRowProps> = ({isoDate, weight}) => {
    return (
        <div className={classes.tableRow}>
            <Checkbox/>
            <span>{formatNumeralFullDate(isoDate)}</span>
            <span>{`${weight}кг`}</span>
            <EditButton/>
        </div>
    );
};

export default TableRow;