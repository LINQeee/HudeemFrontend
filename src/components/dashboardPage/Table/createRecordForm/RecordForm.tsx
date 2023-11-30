import classes from "./RecordForm.module.scss";
import FormInput from "../../../UI/formInput/FormInput.tsx";
import {FC, useState} from "react";
import SectionHeader from "../../../UI/sectionHeader/SectionHeader.tsx";
import ActionButton from "../../../UI/actionButton/ActionButton.tsx";
import {useForm} from "../../../../hooks/UseForm.ts";
import {InputType} from "../../../../utils/enums/InputTypeEnum.ts";
import {StyleType} from "../../../../utils/enums/StyleTypeEnum.ts";

interface RecordFormProps {
    id?: number;
    initWeight?: string;
    initDate?: string;
    onSubmitForm: (weight: number, date: string, id?: number) => void;
    formLabel: string;
    buttonLabel: string;
}

const RecordForm: FC<RecordFormProps> = ({
                                             id,
                                             initWeight = "",
                                             initDate = "",
                                             onSubmitForm,
                                             formLabel,
                                             buttonLabel
                                         }) => {

    const [weight, setWeight] = useState<string>(initWeight);
    const [date, setDate] = useState<string>(initDate);
    const [submitted, submit] = useForm();

    const submitForm = () => submit([
            {value: weight, type: InputType.NUMBER},
            {value: date, type: InputType.DATE}
        ]).then(() => onSubmitForm(parseFloat(weight), date, id));

    return (
        <form className={classes.createRecordForm} onClick={e => e.stopPropagation()}>
            <SectionHeader content={formLabel}/>
            <FormInput type={InputType.NUMBER} label={"Вес"} value={weight} setValue={setWeight}
                       isFormSubmitted={submitted}/>
            <FormInput type={InputType.DATE} label={"Дата"} value={date} setValue={setDate}
                       isFormSubmitted={submitted}/>
            <ActionButton label={buttonLabel} iconClasses={""} styleType={StyleType.PRIMARY} onClick={submitForm}/>
        </form>
    );
};

export default RecordForm;