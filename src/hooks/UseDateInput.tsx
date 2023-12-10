import React from "react";
import {FormInputEnum} from "../utils/enums/FormInputEnum.ts";
import {InputType} from "../utils/enums/InputTypeEnum.ts";

type UseDateInput = [
    clickHandler: (event: React.MouseEvent<HTMLInputElement>) => void,
    calendarIcon?: React.ReactNode
];

export const useDateInput = (type: FormInputEnum): UseDateInput => {
    const dateClickHandler = (event: React.MouseEvent<HTMLInputElement>) => {
        if (event.currentTarget.type !== InputType.DATE) return;
        event.currentTarget.showPicker();
    }

    return [
        dateClickHandler,
        type === FormInputEnum.DATE ? <i className="fa-regular fa-calendar-days"></i> : undefined
    ]
}