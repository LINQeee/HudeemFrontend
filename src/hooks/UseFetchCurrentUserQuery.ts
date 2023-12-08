import {useFetchUserQuery} from "../api/userApi.ts";
import {useContext} from "react";
import {CurrentUserIdContext} from "../context/CurrentUserIdContext.ts";

export const useFetchCurrentUserQuery = () => {
    return useFetchUserQuery(useContext(CurrentUserIdContext)!);
}