import classes from "./UserAvatar.module.scss";
import avatar from "../../../../assets/avatar.jpg";
import {useFetchUserQuery} from "../../../../api/userApi.ts";

const UserAvatar = () => {

    const {data} = useFetchUserQuery(1);

    if (data === undefined) return null;

    return (
        <div className={classes.userAvatar}>
            <img src={avatar} alt={"avatar"}/>
            <div className={classes.userInfo}>
                <span>Default member</span>
                <h6>{data.userDTO.username}</h6>
            </div>
        </div>
    );
};

export default UserAvatar;