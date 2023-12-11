import classes from "./ProgressMetricsSection.module.scss";
import SectionHeader from "../../UI/sectionHeader/SectionHeader.tsx";
import ProgressStatsBox from "../progressStatsBox/ProgressStatsBox.tsx";
import RecordsChart from "../chart/recordsChart/RecordsChart.tsx";
import {IRecord} from "../../../models/IRecord.ts";
import {FC, memo} from "react";
import {IGoal} from "../../../models/IGoal.ts";

interface ProgressMetricsSectionProps {
    goal: IGoal;
    recordList: IRecord[];
}

const ProgressMetricsSection: FC<ProgressMetricsSectionProps> = memo(({goal, recordList}) => {

    return (
        <section className={classes.progressMetricsBox}>
            <SectionHeader content={"Статистика прогресса"}/>
            <ProgressStatsBox goal={goal}/>
            <RecordsChart records={recordList} goal={goal}/>
        </section>
    );
});

export default ProgressMetricsSection;