export interface IUser {
    id: number;
    email: string;
    username: string;
    password: string;
    gender: symbol;
    height: number;
    age: number;
    initialWeight: number;
    goalWeight: number;
    progress: number;
    startDate: string;
    perDay: number;
    perWeek: number;
    plannedDate: string;
    currentWeight: number;
    weightLost: number;
    weightLeft: number;
    code: string;
    expireAuthorisationDate: string;
    ip: string;
    rememberMe: boolean;
}