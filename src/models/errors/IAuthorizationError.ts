import {FetchBaseQueryError} from "@reduxjs/toolkit/query";

export interface IAuthorizationError {
    type: "AUTHORIZATION";
    msg: string;
}

export const isAuthorizationError = (object: any): object is IAuthorizationError =>
    typeof object === "object" && "type" in object && object.type === "AUTHORIZATION" && "msg" in object;

export const rejectAuthorizationError = (error: FetchBaseQueryError, reject: (value: (IAuthorizationError | PromiseLike<IAuthorizationError>)) => void) => {
    if (isAuthorizationError(error.data)) {
        const authorizationError = error.data as IAuthorizationError;
        reject(authorizationError);
    }
}