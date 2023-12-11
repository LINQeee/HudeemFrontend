import classes from "./CardsBox.module.sass";
import StatsCard from "./statsCard/StatsCard.tsx";
import {formatNumeralFullDate} from "../../../services/DateService.ts";
import {IconColor} from "../../../utils/enums/IconColorEnum.ts";
import {FC, memo} from "react";
import {IGoal} from "../../../models/IGoal.ts";

interface CardsBoxProps {
    goal: IGoal;
}

const CardsBox: FC<CardsBoxProps> = memo(({goal}) => {

    return (
        <div className={classes.cardsBox}>
            <StatsCard
                label={"Начальный вес"}
                value={goal.initialWeight}
                iconClasses={"fa-light fa-weight-scale"}
                color={IconColor.GREEN}
            />
            <StatsCard
                label={"Текущий вес"}
                value={goal.currentWeight}
                iconClasses={"fa-light fa-fire"}
                color={IconColor.YELLOW}
            />
            <StatsCard
                label={"Всего сброшено"}
                value={goal.weightLost}
                iconClasses={"fa-light fa-arrow-trend-down"}
                color={IconColor.BLUE}
            />
            <StatsCard
                label={"Дата начала"}
                value={formatNumeralFullDate(goal.startDate)}
                iconClasses={"fa-light fa-calendar-days"}
                color={IconColor.ORANGE}
            />
        </div>
    );
});

export default CardsBox;