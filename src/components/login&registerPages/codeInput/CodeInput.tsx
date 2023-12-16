import classes from "./CodeInput.module.sass";
import React, {FC} from "react";
import CustomLink from "../../UI/customLink/CustomLink.tsx";

interface CodeInputProps {
    onInputSubmit: (value: string) => void;
    isError: boolean;
    removeError: () => void;
    resendCode: () => void;
}

const CodeInput: FC<CodeInputProps> = ({onInputSubmit, isError, removeError, resendCode}) => {

    const getValue = ():string => {
        let value = "";
        const inputs = document.getElementById("codeInputs")!;
        for (const child of inputs.children) {
            const inputChild = child as HTMLInputElement;
            value += inputChild.value;
        }
        return value;
    }

    const handleInput = (event: React.KeyboardEvent<HTMLInputElement>) => {

        removeError();
        const value = getValue();
        const input = event.currentTarget;

        if (value.length === 6) onInputSubmit(value);
        const inputToFocus = (input.value ? input.nextElementSibling : input.previousElementSibling) as HTMLInputElement;
        inputToFocus?.focus();
    }

    const inputBoxClassName = [classes.inputBox, isError ? classes.error : undefined].join(" ");

    return (
        <div className={inputBoxClassName}>
            <div id={"codeInputs"} className={classes.inputs}>
                <input type="tel" maxLength={1} pattern="[0-9]" required onInput={handleInput}/>
                <input type="tel" maxLength={1} pattern="[0-9]" required onInput={handleInput}/>
                <input type="tel" maxLength={1} pattern="[0-9]" required onInput={handleInput}/>
                <input type="tel" maxLength={1} pattern="[0-9]" required onInput={handleInput}/>
                <input type="tel" maxLength={1} pattern="[0-9]" required onInput={handleInput}/>
                <input type="tel" maxLength={1} pattern="[0-9]" required onInput={handleInput}/>
            </div>
            <span>Не получили код? <CustomLink href={"#"} label={"Отправить заново"} fontSize={14} onClick={resendCode}/></span>
        </div>
    );
};

export default CodeInput;