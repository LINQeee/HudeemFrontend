import classes from "./TableSection.module.scss";
import SectionHeader from "../../UI/sectionHeader/SectionHeader.tsx";
import ActionButton from "../../UI/actionButton/ActionButton.tsx";
import {StyleType} from "../../../utils/StyleType.ts";
import RecordsTable from "../Table/RecordsTable/RecordsTable.tsx";

const TableSection = () => {
    return (
        <div className={classes.tableSection}>
            <SectionHeader content={"Записи"}/>
            <div className={classes.actionBox}>
                <ActionButton label={"Фильтр"} iconClasses={"fa-regular fa-bars-filter"} styleType={StyleType.SECONDARY}/>
                <ActionButton label={"Добавить"} iconClasses={"fa-regular fa-plus"} styleType={StyleType.PRIMARY}/>
            </div>
            <RecordsTable/>
        </div>
    );
};

export default TableSection;