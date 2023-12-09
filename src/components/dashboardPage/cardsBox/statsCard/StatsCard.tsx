import classes from "./StatsCard.module.sass";
import {FC, memo} from "react";
import {IconColor} from "../../../../utils/enums/IconColorEnum.ts";

interface StatsCardProps {
    label: string;
    value: string | number;
    iconClasses: string;
    color: IconColor;
}

const StatsCard: FC<StatsCardProps> = memo(({ label, value, iconClasses, color}) => {

    const iconBoxClassName = [
        classes.iconBox,
        color === IconColor.GREEN ? classes.green : undefined,
        color === IconColor.YELLOW ? classes.yellow : undefined,
        color === IconColor.ORANGE ? classes.orange : undefined,
        color === IconColor.BLUE ? classes.blue : undefined
    ].join(" ");

    return (
        <div className={classes.statsCard}>
            <div className={iconBoxClassName}><i className={iconClasses}></i></div>
            <span>{label}</span>
            <h4>{value}</h4>
        </div>
    );
});

export default StatsCard;