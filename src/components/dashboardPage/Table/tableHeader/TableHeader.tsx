import classes from "./TableHeader.module.scss";

const TableHeader = () => {
    return (
        <div className={classes.tableHeader}>
            <span>Дата</span>
            <span>Вес</span>
        </div>
    );
};

export default TableHeader;