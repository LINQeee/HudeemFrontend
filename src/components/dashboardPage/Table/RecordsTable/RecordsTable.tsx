import classes from "./RecordsTable.module.scss";
import TableHeader from "../tableHeader/TableHeader.tsx";
import {useFetchUserQuery} from "../../../../api/userApi.ts";
import TableRow from "../tableRow/TableRow.tsx";
import {usePopup} from "../../../../hooks/UsePopup.ts";
import Popup from "../../../UI/popup/Popup.tsx";
import RecordForm from "../createRecordForm/RecordForm.tsx";
import {useCallback, useState} from "react";
import {IRecord} from "../../../../models/IRecord.ts";
import {IInputError} from "../../../../utils/types/InputErrorType.ts";
import {deleteRecords, editRecord} from "../../../../services/RecordApiService.ts";
import {useDeleteRecordMutation, useEditRecordMutation} from "../../../../api/recordApi.ts";
import {useArrayState} from "../../../../hooks/UseArrayState.ts";

const RecordsTable = () => {

    const {recordDTOList, userDTO} = useFetchUserQuery(1).data!;
    const {popupVisible, openPopup, closePopup} = usePopup();
    const [editingRecord, setEditingRecord] = useState<IRecord>();
    const [editRecordTrigger] = useEditRecordMutation();
    const [deleteRecordTrigger] = useDeleteRecordMutation();
    const [selectedRecords, selectRecord, unselectRecord, , clearSelectedRecords] = useArrayState<IRecord>([]);

    const openRecordEditingPopup = (record: IRecord) => {
        setEditingRecord(record);
        openPopup();
    }

    const submitEditRecordForm = (weight: number, date: string, id?: number): Promise<IInputError> => {

        if (!id) throw new Error("id is required");

        const editedRecord: IRecord = {id: id, currentWeight: weight, date: date, userId: userDTO.id};
        return editRecord(editedRecord, closePopup, editRecordTrigger);
    }

    const deleteSelectedRecords = useCallback(() => deleteRecords(selectedRecords, clearSelectedRecords, deleteRecordTrigger),
        [clearSelectedRecords, deleteRecordTrigger, selectedRecords]);

    return (
        <div className={classes.recordsTable}>
            <TableHeader enableDeleteButton={selectedRecords.length > 0} onDeleteButtonClick={deleteSelectedRecords}/>
            <ul>
                {
                    recordDTOList.slice(0).reverse().map(
                        record => <TableRow
                            record={record}
                            key={record.id}
                            openEditingPopup={openRecordEditingPopup}
                            selectRecord={selectRecord}
                            unselectRecord={unselectRecord}
                            selected={selectedRecords.some(selected => selected.id === record.id)}
                        />
                    )
                }
            </ul>
            <Popup popupVisible={popupVisible}>
                <RecordForm
                    formLabel={"Изменить запись"}
                    buttonLabel={"Сохранить"}
                    initDate={editingRecord?.date}
                    initWeight={editingRecord?.currentWeight.toString()}
                    id={editingRecord?.id}
                    onSubmitForm={submitEditRecordForm}
                />
            </Popup>
        </div>
    );
};

export default RecordsTable;