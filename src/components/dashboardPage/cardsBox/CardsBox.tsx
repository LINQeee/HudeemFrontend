import classes from "./CardsBox.module.scss";
import StatsCard, {IconColor} from "./statsCard/StatsCard.tsx";
import {useFetchUserQuery} from "../../../api/userApi.ts";
import {formatNumeralFullDate} from "../../../services/DateService.ts";

const CardsBox = () => {

    const {data} = useFetchUserQuery(1);

    if (data === undefined) return null;

    const {userDTO: user} = data;

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
};

export default CardsBox;