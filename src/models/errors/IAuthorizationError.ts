export interface IAuthorizationError {
    type: "AUTHORIZATION";
    msg: string;
}

export const isAuthorizationError = (object: any): object is IAuthorizationError =>
    typeof object === "object" && "type" in object && object.type === "AUTHORIZATION" && "msg" in object;