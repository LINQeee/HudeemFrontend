import classes from "./CardsBox.module.scss";
import {FC} from "react";
import StatsCard, {IconColor} from "../statsCard/StatsCard.tsx";
import {IUser} from "../../models/IUser.ts";

interface CardsBoxProps {
    user: IUser
}

const CardsBox: FC<CardsBoxProps> = ({user}) => {
    return (
        <div className={classes.cardsBox}>
            <StatsCard
                label={"Start Weight"}
                value={user.initialWeight}
                iconClasses={"fa-light fa-weight-scale"}
                color={IconColor.GREEN}
            />
            <StatsCard
                label={"Current Weight"}
                value={user.currentWeight}
                iconClasses={"fa-light fa-fire"}
                color={IconColor.YELLOW}
            />
            <StatsCard
                label={"Lost Weight"}
                value={user.weightLost}
                iconClasses={"fa-light fa-arrow-trend-down"}
                color={IconColor.BLUE}
            />
            <StatsCard
                label={"Start Date"}
                value={user.startDate}
                iconClasses={"fa-light fa-calendar-days"}
                color={IconColor.ORANGE}
            />
        </div>
    );
};

export default CardsBox;