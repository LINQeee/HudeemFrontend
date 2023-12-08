import classes from "./CardsBox.module.scss";
import StatsCard from "./statsCard/StatsCard.tsx";
import {formatNumeralFullDate} from "../../../services/DateService.ts";
import {IconColor} from "../../../utils/enums/IconColorEnum.ts";
import {IUser} from "../../../models/IUser.ts";
import {FC, memo} from "react";

interface CardsBoxProps {
    user: IUser;
}

const CardsBox: FC<CardsBoxProps> = memo(({user}) => {

    return (
        <div className={classes.cardsBox}>
            <StatsCard
                label={"Начальный вес"}
                value={user.initialWeight}
                iconClasses={"fa-light fa-weight-scale"}
                color={IconColor.GREEN}
            />
            <StatsCard
                label={"Текущий вес"}
                value={user.currentWeight}
                iconClasses={"fa-light fa-fire"}
                color={IconColor.YELLOW}
            />
            <StatsCard
                label={"Всего сброшено"}
                value={user.weightLost}
                iconClasses={"fa-light fa-arrow-trend-down"}
                color={IconColor.BLUE}
            />
            <StatsCard
                label={"Дата начала"}
                value={formatNumeralFullDate(user.startDate)}
                iconClasses={"fa-light fa-calendar-days"}
                color={IconColor.ORANGE}
            />
        </div>
    );
});

export default CardsBox;