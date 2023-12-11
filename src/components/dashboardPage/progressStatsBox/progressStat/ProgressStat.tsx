import classes from "./ProgressStat.module.sass";
import {FC, memo, useMemo} from "react";

interface ProgressStatProps {
    value: string | number;
    percent?: number;
    label: string;
}

const ProgressStat: FC<ProgressStatProps> = memo(({value, percent, label}) => {

    const percentClassName = [classes.percent, percent !== undefined && percent > 0 ? classes.increase : classes.decrease].join(" ");

    const calculatePercent: string = useMemo(() => percent !== undefined ? `${Math.abs(percent)}%` : "", [percent]);

    return (
        <div className={classes.progressStat}>
            <div className={percentClassName}>
                <h4>{value}</h4>
                {
                    <span>{calculatePercent}{percent !== undefined && <i className="fa-light fa-arrow-up-right"></i>}</span>
                }
            </div>
            <span>{label}</span>
        </div>
    );
});

export default ProgressStat;