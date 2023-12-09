import classes from "./ProgressStatsBox.module.sass";
import ProgressStat from "./progressStat/ProgressStat.tsx";
import {FC, memo} from "react";
import {IUser} from "../../../models/IUser.ts";
import {formatNumeralFullDate} from "../../../services/DateService.ts";

interface ProgressStatsBoxProps {
    user: IUser;
}

const ProgressStatsBox: FC<ProgressStatsBoxProps> = memo(({user}) => {
    return (
        <div className={classes.progressStatsBox}>
            <ProgressStat value={user.perDay} percent={-11} label={"В среднем в день"}/>
            <ProgressStat value={user.perWeek} percent={11} label={"В среднем в неделю"}/>
            <ProgressStat value={user.goalWeight} label={"Вес цели"}/>
            <ProgressStat value={user.weightLeft} label={"Оставшийся вес"}/>
            <ProgressStat value={formatNumeralFullDate(user.plannedDate)} label={"Дата достижения цели"}/>
        </div>
    );
});

export default ProgressStatsBox;