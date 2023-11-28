import classes from "./RecordsTable.module.scss";
import TableHeader from "../tableHeader/TableHeader.tsx";
import {useFetchUserQuery} from "../../../../api/userApi.ts";
import TableRow from "../tableRow/TableRow.tsx";
import {usePopup} from "../../../../hooks/UsePopup.ts";
import Popup from "../../../UI/popup/Popup.tsx";
import RecordForm from "../createRecordForm/RecordForm.tsx";
import {useState} from "react";
import {IRecord} from "../../../../models/IRecord.ts";

const RecordsTable = () => {

    const {data} = useFetchUserQuery(1);
    const {popupVisible, openPopup} = usePopup();
    const [editingRecord, setEditingRecord] = useState<IRecord>();

    if (data === undefined) return null;

    const openRecordEditingPopup = (record: IRecord) => {
        setEditingRecord(record);
        openPopup();
    }

    const submit = (weight: string, date: string, id: number) => {
        console.log(`weight: ${weight}\ndate: ${date}\nid: ${id}`);
    }

    return (
        <div className={classes.recordsTable}>
            <TableHeader/>
            <ul>
                {
                    data.recordDTOList.map(
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
                    id={record?.id}
                    onSubmitForm={submit}
                />
            </Popup>
        </div>
    );
};

export default RecordsTable;