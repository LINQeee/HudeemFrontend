import React, {createContext, useEffect, useState} from "react";

interface IUsePopup {
    popupVisible: boolean;
    openPopup: () => void;
    PopupVisibleContext: React.Context<PopupVisibleContext | undefined>;
}

interface PopupVisibleContext {
    popupVisible: boolean;
    openPopup: () => void;
}

export const usePopup = (): IUsePopup => {

    const [popupVisible, setPopupVisible] = useState<boolean>(false);

    useEffect(() => {
        document.addEventListener("click", () => {setPopupVisible(false)})

        return () => document.removeEventListener("click", () => setPopupVisible(false))
    }, []);

    const openPopup = () => {
        if (popupVisible) return;
        setTimeout(() => setPopupVisible(true), 1);
    }



    return {popupVisible, openPopup, PopupVisibleContext};
}

export const PopupVisibleContext = createContext<PopupVisibleContext | undefined>(undefined);