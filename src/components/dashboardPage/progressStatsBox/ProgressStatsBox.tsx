import classes from "./ProgressStatsBox.module.sass";
import ProgressStat from "./progressStat/ProgressStat.tsx";
import {FC, memo} from "react";
import {formatNumeralFullDate} from "../../../services/DateService.ts";
import {IGoal} from "../../../models/IGoal.ts";

interface ProgressStatsBoxProps {
    goal: IGoal;
}

const ProgressStatsBox: FC<ProgressStatsBoxProps> = memo(({goal}) => {
    return (
        <div className={classes.progressStatsBox}>
            <ProgressStat value={goal.perDay} percent={goal.perDayProgress} label={"В среднем в день"}/>
            <ProgressStat value={goal.perWeek} percent={goal.perWeekProgress} label={"В среднем в неделю"}/>
            <ProgressStat value={goal.goalWeight} label={"Вес цели"}/>
            <ProgressStat value={goal.weightLeft} label={"Оставшийся вес"}/>
            <ProgressStat value={formatNumeralFullDate(goal.plannedDate)} label={"Дата достижения цели"}/>
        </div>
    );
});

export default ProgressStatsBox;