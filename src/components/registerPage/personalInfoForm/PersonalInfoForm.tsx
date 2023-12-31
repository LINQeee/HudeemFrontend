import {useForm} from "../../../hooks/UseForm.ts";
import {IPersonalInfo} from "../../../models/IPersonalInfo.ts";
import {FC, useCallback, useState} from "react";
import FormInput from "../../UI/formUI/formInput/FormInput.tsx";
import {FormInputEnum} from "../../../utils/enums/FormInputEnum.ts";
import {IInputError} from "../../../utils/types/InputErrorType.ts";
import classes from "./PersonalInfoForm.module.sass";
import GenderInput from "./genderInput/GenderInput.tsx";
import ActionButton from "../../UI/actionButton/ActionButton.tsx";
import {StyleType} from "../../../utils/enums/StyleTypeEnum.ts";

interface PersonalInfoFormProps {
    onSubmitForm: (personalInfo: IPersonalInfo) => Promise<IInputError> | any;
}

const PersonalInfoForm: FC<PersonalInfoFormProps> = ({onSubmitForm}) => {

    const [userPersonalInfo, setUserPersonalInfo] = useState<IPersonalInfo>({
        age: "",
        height: "",
        username: "",
        gender: ""
    });
    const formHook = useForm(() => onSubmitForm(userPersonalInfo as IPersonalInfo));

    const submitForm = useCallback(() => {
       formHook.submit([
           {value: userPersonalInfo.username, type: FormInputEnum.USERNAME},
           {value: userPersonalInfo.age, type: FormInputEnum.AGE},
           {value: userPersonalInfo.height, type: FormInputEnum.HEIGHT},
           {value: userPersonalInfo.gender, type: FormInputEnum.GENDER}
       ]) ;
    }, [formHook.submit, userPersonalInfo]);

    return (
        <>
            <FormInput
                type={FormInputEnum.USERNAME}
                label={"Никнейм"}
                value={userPersonalInfo.username}
                setValue={(username: any) => setUserPersonalInfo({...userPersonalInfo, username})}
                formHook={formHook}
            />
            <div className={classes.doubleInputBox}>
                <FormInput
                    type={FormInputEnum.AGE}
                    label={"Возраст"}
                    value={userPersonalInfo.age}
                    setValue={(age: any) => setUserPersonalInfo({...userPersonalInfo, age})}
                    formHook={formHook}
                />
                <FormInput
                    type={FormInputEnum.HEIGHT}
                    label={"Рост"}
                    value={userPersonalInfo.height}
                    setValue={(height: any) => setUserPersonalInfo({...userPersonalInfo, height})}
                    formHook={formHook}
                />
            </div>
            <GenderInput formHook={formHook} onChange={gender => setUserPersonalInfo({...userPersonalInfo, gender})}/>
            <ActionButton label={"Завершить"} styleType={StyleType.PRIMARY} onClick={submitForm}/>
        </>
    );
};

export default PersonalInfoForm;