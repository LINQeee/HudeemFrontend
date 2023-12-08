import classes from "./UserAvatar.module.scss";
import avatar from "../../../../assets/avatar.jpg";
import {useFetchCurrentUserQuery} from "../../../../hooks/UseFetchCurrentUserQuery.ts";

const UserAvatar = () => {

    const {data} = useFetchCurrentUserQuery();

    return (
        <div className={classes.userAvatar}>
            <img src={avatar} alt={"avatar"}/>
            <div className={classes.userInfo}>
                <span>Default member</span>
                <h6>{data ? data.userDTO.username : "Error while loading"}</h6>
            </div>
        </div>
    );
};

export default UserAvatar;