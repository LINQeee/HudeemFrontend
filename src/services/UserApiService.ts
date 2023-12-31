import {CreateUserTrigger, LoginUserWithPswTrigger} from "../api/userApi.ts";
import {rejectAuthorizationError} from "../models/errors/IAuthorizationError.ts";
import {ICredentials} from "../models/ICredentials.ts";
import {rejectValidationError} from "../models/errors/IValidationError.ts";

export const userLoginWithPsw = (payload: Omit<ICredentials, "code" | "rememberMe" | "authToken">, loginUser: LoginUserWithPswTrigger): Promise<string> => new Promise((resolve, reject) => {
    loginUser(payload).unwrap()
        .then(response => {
            resolve(response);
        })
        .catch(err => rejectAuthorizationError(err, reject));
});

export const createUser = (payload: Omit<ICredentials, "rememberMe" | "code" | "authToken">, createUser: CreateUserTrigger): Promise<string> => new Promise((resolve, reject) => {
    createUser(payload).unwrap()
        .then(response => {
            resolve(response);
        })
        .catch(err => rejectValidationError(err,  reject));
});