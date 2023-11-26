import {IUser} from "../models/IUser.ts";
import {IRecord} from "../models/IRecord.ts";
import {IIp} from "../models/IIp.ts";

export interface FetchUserResponse {
    userDTO: IUser;
    recordDTOList: IRecord[];
    ipDTOList: IIp[];
}