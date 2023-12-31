import classes from "./RecordForm.module.sass";
import FormInput from "../../../UI/formUI/formInput/FormInput.tsx";
import {FC, memo, useCallback, useState} from "react";
import SectionHeader from "../../../UI/sectionHeader/SectionHeader.tsx";
import ActionButton from "../../../UI/actionButton/ActionButton.tsx";
import {useForm} from "../../../../hooks/UseForm.ts";
import {StyleType} from "../../../../utils/enums/StyleTypeEnum.ts";
import {IInputError} from "../../../../utils/types/InputErrorType.ts";
import {FormInputEnum} from "../../../../utils/enums/FormInputEnum.ts";

interface RecordFormProps {
    id?: number;
    initWeight?: string;
    initDate?: string;
    onSubmitForm: (weight: number, date: string, id?: number) => Promise<IInputError>;
    formLabel: string;
    buttonLabel: string;
}

const RecordForm: FC<RecordFormProps> = memo(({
                                                  id,
                                                  initWeight = "",
                                                  initDate = "",
                                                  onSubmitForm,
                                                  formLabel,
                                                  buttonLabel
                                              }) => {


    const [weight, setWeight] = useState<string>(initWeight);
    const [date, setDate] = useState<string>(initDate);

    const formHook = useForm(() => onSubmitForm(parseFloat(weight), date, id));

    const submitForm = useCallback(() => formHook.submit([
        {value: weight, type: FormInputEnum.WEIGHT},
        {value: date, type: FormInputEnum.DATE}
    ]), [formHook.submit, weight, date]);

    return (
        <form className={classes.createRecordForm} onClick={e => e.stopPropagation()}>
            <SectionHeader content={formLabel}/>
            <FormInput type={FormInputEnum.WEIGHT} label={"Вес"} value={weight} setValue={setWeight} formHook={formHook}/>

            <FormInput type={FormInputEnum.DATE} label={"Дата"} value={date} setValue={setDate} formHook={formHook}/>
            <ActionButton label={buttonLabel} iconClasses={""} styleType={StyleType.PRIMARY} onClick={submitForm}/>
        </form>
    );
});

export default RecordForm;