import classes from "./ProgressStat.module.scss";
import {FC} from "react";

interface ProgressStatProps {
    value: string | number;
    percent?: number;
    label: string;
}

const ProgressStat: FC<ProgressStatProps> = ({value, percent, label}) => {

    const percentClassName = [classes.percent, percent && percent > 0 ? classes.increase : classes.decrease].join(" ");

    return (
        <div className={classes.progressStat}>
            <div className={percentClassName}>
                <h4>{value}</h4>
                {
                    percent &&
                    <span>{percent ? `${Math.abs(percent)}%` : ""}<i className="fa-light fa-arrow-up-right"></i></span>
                }
            </div>
            <h6>{label}</h6>
        </div>
    );
};

export default ProgressStat;