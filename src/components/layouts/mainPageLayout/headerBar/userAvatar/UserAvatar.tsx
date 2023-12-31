import classes from "./UserAvatar.module.sass";
import avatar from "../../../../../assets/avatar.jpg";
import {useFetchCurrentUserQuery} from "../../../../../hooks/UseFetchCurrentUserQuery.ts";

const UserAvatar = () => {

    const {data, isLoading} = useFetchCurrentUserQuery();

    if (isLoading) return null;

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