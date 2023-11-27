import classes from "./RecordsTable.module.scss";
import TableHeader from "../tableHeader/TableHeader.tsx";
import {useFetchUserQuery} from "../../../../api/userApi.ts";
import TableRow from "../tableRow/TableRow.tsx";
import {usePopup} from "../../../../hooks/UsePopup.ts";
import Popup from "../../../UI/popup/Popup.tsx";
import CreateRecordForm from "../createRecordForm/CreateRecordForm.tsx";

const RecordsTable = () => {

    const {data} = useFetchUserQuery(1);
    const {popupVisible, openPopup, PopupVisibleContext} = usePopup();

    if (data === undefined) return null;

    return (
        <div className={classes.recordsTable}>
            <TableHeader/>
            <ul>
                <PopupVisibleContext.Provider value={{popupVisible, openPopup}}>
                    {
                        data.recordDTOList.map(
                            record => <TableRow isoDate={record.date} weight={record.currentWeight} key={record.id}/>
                        )
                    }
                </PopupVisibleContext.Provider>
            </ul>
            <Popup popupVisible={popupVisible}>
                <CreateRecordForm/>
            </Popup>
        </div>
    );
};

export default RecordsTable;