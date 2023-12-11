import {IUser} from "./IUser.ts";
import {IIp} from "./IIp.ts";
import {IGoal} from "./IGoal.ts";

export interface ISummary {
    userDTO: IUser;
    ipDTOList: IIp[];
    goalDTOList: IGoal[];
}