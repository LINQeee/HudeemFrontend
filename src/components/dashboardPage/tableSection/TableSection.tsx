import classes from "./TableSection.module.scss";
import SectionHeader from "../../UI/sectionHeader/SectionHeader.tsx";
import ActionButton from "../../UI/actionButton/ActionButton.tsx";
import RecordsTable from "../Table/RecordsTable/RecordsTable.tsx";
import {StyleType} from "../../../types&enums/StyleTypeEnum.ts";

const TableSection = () => {
    return (
        <div className={classes.tableSection}>
            <SectionHeader content={"Записи"}/>
            <div className={classes.actionBox}>
                <ActionButton label={"Фильтр"} iconClasses={"fa-regular fa-bars-filter"} styleType={StyleType.SECONDARY} onClick={() => {}}/>
                <ActionButton label={"Добавить"} iconClasses={"fa-regular fa-plus"} styleType={StyleType.PRIMARY} onClick={() => {}}/>
            </div>
            <RecordsTable/>
        </div>
    );
};

export default TableSection;