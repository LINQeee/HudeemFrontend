import {LoginUserWithPswTrigger} from "../api/userApi.ts";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {IAuthorizationError, isAuthorizationError} from "../models/errors/IAuthorizationError.ts";
import {ICredentials} from "../models/ICredentials.ts";

export const userLoginWithPsw = (payload: Omit<ICredentials, "code" | "ip" | "rememberMe">, loginUser: LoginUserWithPswTrigger): Promise<string> => new Promise((resolve, reject) => {
    loginUser(payload).unwrap()
        .then(response => {
            resolve(response);
        })
        .catch(err => rejectAuthorizationError(err, reject));
});

const rejectAuthorizationError = (error: FetchBaseQueryError, reject: (value: (IAuthorizationError | PromiseLike<IAuthorizationError>)) => void) => {
    if (typeof error.data === 'object' && isAuthorizationError(error.data)) {
        const authorizationError = error.data as IAuthorizationError;
        reject(authorizationError);
    }
}