import classes from "./EditRecordBox.module.scss";
import AsideButton from "../../../UI/asideButton/AsideButton.tsx";
import {FC, useEffect, useRef, useState} from "react";

interface EditRecordPopupProps {
    onEditClick: () => void;
    onDeleteClick: () => void;
}

const EditRecordBox: FC<EditRecordPopupProps> = ({onEditClick, onDeleteClick}) => {

    const popupRef = useRef<HTMLDivElement>(null);
    const [overflows, setOverflows] = useState<boolean>();

    useEffect(() => {

        const handleResize = () => {
            const popupRect = popupRef.current!.getBoundingClientRect();
            const containerRect = popupRef.current!.parentElement!.parentElement!.parentElement!.getBoundingClientRect();

            setOverflows(popupRect.bottom > containerRect.bottom || popupRect.top < containerRect.top);
        }

        handleResize();

        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const popupClassnames = [classes.editRecordPopup, overflows ? classes.overflows : classes.notOverflows].join(" ");

    return (
        <div ref={popupRef} className={popupClassnames} onClick={e => e.stopPropagation()}>
            <AsideButton content={"Изменить"} iconClasses={"fa-regular fa-pen-to-square"} onClick={onEditClick}/>
            <AsideButton content={"Удалить"} iconClasses={"fa-regular fa-trash-can"} onClick={onDeleteClick}/>
        </div>
    );
};

export default EditRecordBox;