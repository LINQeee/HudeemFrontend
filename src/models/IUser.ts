export interface IUser {
    id: number;
    email: string;
    username: string;
    password: string;
    gender: symbol;
    height: number;
    age: number;
    code: string;
    expireAuthorisationDate: string;
    rememberMe: boolean;
    authToken: string;
}