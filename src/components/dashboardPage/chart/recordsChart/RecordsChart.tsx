import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import {IRecord} from "../../../../models/IRecord.ts";
import {FC} from "react";
import classes from "./RecordsChart.module.scss";
import {IUser} from "../../../../models/IUser.ts";
import {formatISODate} from "../../../../services/DateService.ts";
import CustomChartTooltip from "../customChartTooltip/CustomChartTooltip.tsx";
import {IRecordChartData} from "../../../../utils/types/RecordType.ts";

interface RecordsChartProps {
    records: IRecord[];
    user: IUser;
}

const RecordsChart: FC<RecordsChartProps> = ({records, user}) => {

    records = [{date: user.startDate, currentWeight: user.initialWeight, userId: user.id, id: -1}, ...records];

    const data: IRecordChartData[] = records.map(record => ({
        date: record.date,
        value: record.currentWeight,
    }));

    return (
        <ResponsiveContainer className={classes.recordsChart}>
            <LineChart data={data}>
                <CartesianGrid vertical={false} stroke="#F5F7F9"/>
                <XAxis
                    dataKey="date"
                    axisLine={false}
                    tickLine={false}
                    fontSize={15}
                    stroke="#A0B5BB"
                    tickMargin={18}
                    tickFormatter={value => formatISODate(value)}
                    interval={1}
                    padding={{right: 20}}
                />
                <YAxis
                    dataKey="value"
                    axisLine={false}
                    type="number"
                    domain={['dataMin', 'dataMax']}
                    tickLine={false}
                    tickCount={10}
                    fontSize={15}
                    stroke="#A0B5BB"
                />
                <Tooltip cursor={{stroke: "#F5F7F9", strokeWidth: 1.5}} content={<CustomChartTooltip />}/>
                <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#6CD2B0"
                    strokeWidth={2}
                    dot={{r: 1.8, fill: "#6CD2B0"}}
                    activeDot={{r: 4, strokeWidth: 0}}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default RecordsChart;