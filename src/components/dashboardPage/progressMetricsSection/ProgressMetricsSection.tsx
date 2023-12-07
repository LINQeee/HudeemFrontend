import classes from "./ProgressMetricsSection.module.scss";
import SectionHeader from "../../UI/sectionHeader/SectionHeader.tsx";
import ProgressStatsBox from "../progressStatsBox/ProgressStatsBox.tsx";
import {useFetchUserQuery} from "../../../api/userApi.ts";
import RecordsChart from "../chart/recordsChart/RecordsChart.tsx";

const ProgressMetricsSection = () => {

    const { data } = useFetchUserQuery(2);

    if (data === undefined) return null;

    return (
        <section className={classes.progressMetricsBox}>
            <SectionHeader content={"Статистика прогресса"}/>
            <ProgressStatsBox user={data.userDTO}/>
            <RecordsChart records={data.recordDTOList} user={data.userDTO}/>
        </section>
    );
};

export default ProgressMetricsSection;