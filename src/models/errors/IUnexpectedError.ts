export interface IUnexpectedError {
    msg: string;
    type: "UNEXPECTED";
}

export const isUnexpectedError = (object: any): object is IUnexpectedError =>
    typeof object === "object" && "msg" in object && "type" in object && object.type === "UNEXPECTED";