import classes from "./RecordsTable.module.scss";
import TableHeader from "../tableHeader/TableHeader.tsx";
import {useFetchUserQuery} from "../../../../api/userApi.ts";
import TableRow from "../tableRow/TableRow.tsx";
import {usePopup} from "../../../../hooks/UsePopup.ts";
import Popup from "../../../UI/popup/Popup.tsx";
import RecordForm from "../createRecordForm/RecordForm.tsx";
import {useState} from "react";
import {IRecord} from "../../../../models/IRecord.ts";
import {useEditRecordMutation} from "../../../../api/recordApi.ts";

const RecordsTable = () => {

    const {recordDTOList, userDTO} = useFetchUserQuery(1).data!;
    const {popupVisible, openPopup, closePopup} = usePopup();
    const [editingRecord, setEditingRecord] = useState<IRecord>();
    const [editRecord] = useEditRecordMutation();

    const openRecordEditingPopup = (record: IRecord) => {
        setEditingRecord(record);
        openPopup();
    }

    const submitEditRecordForm = (weight: number, date: string, id?: number) => {
        if (!id) return;
        editRecord({id: id, date: date, currentWeight: weight, userId: userDTO.id})
            .then(result => {
                console.log(result);
                closePopup();
            });
    }

    return (
        <div className={classes.recordsTable}>
            <TableHeader/>
            <ul>
                {
                    recordDTOList.slice(0).reverse().map(
                        record => <TableRow
                            record={record}
                            key={record.id}
                            openEditingPopup={openRecordEditingPopup}
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