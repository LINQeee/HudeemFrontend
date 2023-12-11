import {IRecord} from "./IRecord.ts";

export interface IGoal {
    id: number;
    currentWeight: number;
    goalWeight: number;
    initialWeight: number;
    perDay: number;
    perWeek: number;
    perDayProgress: number;
    perWeekProgress: number;
    plannedDate: string;
    progress: number;
    startDate: string;
    weightLeft: number;
    weightLost: number;
    userId: number;
    recordDTOList: IRecord[];
}