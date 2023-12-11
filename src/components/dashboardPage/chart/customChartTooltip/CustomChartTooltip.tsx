import classes from "./CustomChartTooltip.module.sass";
import {FC, memo} from "react";
import {formatFullISODate} from "../../../../services/DateService.ts";

interface CustomChartTooltipProps {
    active?: boolean;
    payload?: [{value:string}];
    label?: string;
}

const CustomChartTooltip: FC<CustomChartTooltipProps> = memo(({active, payload, label}) => {

    if (!active || !label || !payload || !payload[0]) return null;

    return (
        <div className={classes.customChartTooltip}>
            <h4>{formatFullISODate(label)}</h4>
            <span>{`Вес - ${payload[0].value}кг`}</span>
        </div>
    );
});

export default CustomChartTooltip;