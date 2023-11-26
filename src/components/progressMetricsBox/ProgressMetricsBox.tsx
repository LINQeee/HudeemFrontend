import classes from "./ProgressMetricsBox.module.scss";
import SectionHeader from "../UI/sectionHeader/SectionHeader.tsx";

const ProgressMetricsBox = () => {

    return (
        <section className={classes.progressMetricsBox}>
            <SectionHeader content={"Progress Metrics"}/>
        </section>
    );
};

export default ProgressMetricsBox;