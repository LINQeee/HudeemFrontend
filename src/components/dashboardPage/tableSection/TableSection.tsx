import classes from "./TableSection.module.sass";
import SectionHeader from "../../UI/sectionHeader/SectionHeader.tsx";
import ActionButton from "../../UI/actionButton/ActionButton.tsx";
import RecordsTable from "../Table/RecordsTable/RecordsTable.tsx";
import Popup from "../../UI/popup/Popup.tsx";
import {usePopup} from "../../../hooks/UsePopup.ts";
import {useCreateRecordMutation} from "../../../api/recordApi.ts";
import {StyleType} from "../../../utils/enums/StyleTypeEnum.ts";
import {IInputError} from "../../../utils/types/InputErrorType.ts";
import {createRecord} from "../../../services/RecordApiService.ts";
import {IRecord} from "../../../models/IRecord.ts";
import {FC, memo} from "react";
import {IGoal} from "../../../models/IGoal.ts";
import RecordForm from "../Table/recordForm/RecordForm.tsx";

interface TableSectionProps {
    goal: IGoal;
    recordList: IRecord[];
}

const TableSection: FC<TableSectionProps> = memo(({goal, recordList}) => {

    const {popupVisible, openPopup, closePopup} = usePopup();
    const [createRecordTrigger] = useCreateRecordMutation();

    const submitCreateRecordForm = (weight: number, date: string): Promise<IInputError> => {
        const newRecord: Omit<IRecord, "id"> = {date: date, currentWeight: weight, goalId: goal.id};
        return createRecord(newRecord, closePopup, createRecordTrigger);
    }

    return (
        <div className={classes.tableSection}>
            <SectionHeader content={"Записи"}/>
            <div className={classes.actionBox}>
                <ActionButton label={"Фильтр"} iconClasses={"fa-regular fa-bars-filter"} styleType={StyleType.SECONDARY}
                              onClick={() => {
                              }}/>
                <ActionButton label={"Добавить"} iconClasses={"fa-regular fa-plus"} styleType={StyleType.PRIMARY}
                              onClick={openPopup}/>
            </div>
            <RecordsTable recordList={recordList} goalId={goal.id}/>
            <Popup popupVisible={popupVisible}>
                <RecordForm
                    onSubmitForm={submitCreateRecordForm}
                    formLabel={"Создать запись"}
                    buttonLabel={"Создать"}
                    initDate={new Date().toISOString().split("T")[0]}
                />
            </Popup>
        </div>
    );
});

export default TableSection;