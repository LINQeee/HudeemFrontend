import {FormInputEnum} from "../utils/enums/FormInputEnum.ts";
import {InputType} from "../utils/enums/InputTypeEnum.ts";
import React, {useState} from "react";

type UsePasswordInput = [
    inputType?: InputType,
    iconClasses?: React.ReactNode
];

export const usePasswordInput = (inputType: FormInputEnum): UsePasswordInput => {

    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

    if (inputType !== FormInputEnum.PASSWORD) return [];

    return [
        passwordVisible ? InputType.TEXT : InputType.PASSWORD,
        passwordVisible ?
            <i className="fa-regular fa-eye" onClick={() => setPasswordVisible(false)}></i> :
            <i className="fa-regular fa-eye-slash" onClick={() => setPasswordVisible(true)}></i>
    ];
}