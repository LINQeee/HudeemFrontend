import {useCallback, useEffect, useState} from "react";

interface IUsePopup {
    popupVisible: boolean;
    openPopup: () => void;
    closePopup: () => void;
}

export const usePopup = (): IUsePopup => {

    const [popupVisible, setPopupVisible] = useState<boolean>(false);

    useEffect(() => {
        document.addEventListener("click", () => {setPopupVisible(false)})

        return () => document.removeEventListener("click", () => setPopupVisible(false))
    }, []);

    const openPopup = useCallback(() => {
        if (popupVisible) return;
        setTimeout(() => setPopupVisible(true), 1);
    }, [popupVisible]);

    const closePopup = () => setPopupVisible(false);

    return {popupVisible, openPopup, closePopup};
}