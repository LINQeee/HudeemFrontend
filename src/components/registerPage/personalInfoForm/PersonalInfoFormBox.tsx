import PersonalInfoFormLayout from "../../layouts/personalInfoFormLayout/PersonalInfoFormLayout.tsx";
import PersonalInfoForm from "./PersonalInfoForm.tsx";
import {IPersonalInfo} from "../../../models/IPersonalInfo.ts";
import {useUpdateUserBioMutation} from "../../../api/userApi.ts";
import {useNavigate} from "react-router-dom";

const PersonalInfoFormBox = () => {

    const [updatePersonalInfo] = useUpdateUserBioMutation();
    const navigate = useNavigate();

    const onSuccessSubmit = async (personalInfo: IPersonalInfo) => {
        await updatePersonalInfo(personalInfo);
        navigate("/dashboard");
    }

    return (
        <PersonalInfoFormLayout>
            <PersonalInfoForm onSubmitForm={onSuccessSubmit}/>
        </PersonalInfoFormLayout>
    );
};

export default PersonalInfoFormBox;