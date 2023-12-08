import classes from "./ProgressMetricsSection.module.scss";
import SectionHeader from "../../UI/sectionHeader/SectionHeader.tsx";
import ProgressStatsBox from "../progressStatsBox/ProgressStatsBox.tsx";
import RecordsChart from "../chart/recordsChart/RecordsChart.tsx";
import {IUser} from "../../../models/IUser.ts";
import {IRecord} from "../../../models/IRecord.ts";
import {FC, memo} from "react";

interface ProgressMetricsSectionProps {
    user: IUser;
    recordList: IRecord[];
}

const ProgressMetricsSection: FC<ProgressMetricsSectionProps> = memo(({user, recordList}) => {

    return (
        <section className={classes.progressMetricsBox}>
            <SectionHeader content={"Статистика прогресса"}/>
            <ProgressStatsBox user={user}/>
            <RecordsChart records={recordList} user={user}/>
        </section>
    );
});

export default ProgressMetricsSection;