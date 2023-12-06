import classes from "./RecordForm.module.scss";
import FormInput from "../../../UI/formInput/FormInput.tsx";
import {FC, memo, useCallback, useState} from "react";
import SectionHeader from "../../../UI/sectionHeader/SectionHeader.tsx";
import ActionButton from "../../../UI/actionButton/ActionButton.tsx";
import {useForm} from "../../../../hooks/UseForm.ts";
import {InputType} from "../../../../utils/enums/InputTypeEnum.ts";
import {StyleType} from "../../../../utils/enums/StyleTypeEnum.ts";
import {IInputError} from "../../../../utils/types/InputErrorType.ts";

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

    const submitEvent = useCallback(() => onSubmitForm(parseFloat(weight), date, id), [onSubmitForm, weight, date, id]);

    const [errors, removeError, submit] = useForm(submitEvent);

    const submitForm = useCallback(() => submit([
        {value: weight, type: InputType.NUMBER},
        {value: date, type: InputType.DATE}
    ]), [submit, weight, date]);

    return (
        <form className={classes.createRecordForm} onClick={e => e.stopPropagation()}>
            <SectionHeader content={formLabel}/>
            <FormInput type={InputType.NUMBER} label={"Вес"} value={weight} setValue={setWeight}
                       error={errors.find(err => err.inputType === InputType.NUMBER)}
                       removeError={removeError}/>

            <FormInput type={InputType.DATE} label={"Дата"} value={date} setValue={setDate}
                       error={errors.find(err => err.inputType === InputType.DATE)}
                       removeError={removeError}/>
            <ActionButton label={buttonLabel} iconClasses={""} styleType={StyleType.PRIMARY} onClick={submitForm}/>
        </form>
    );
});

export default RecordForm;