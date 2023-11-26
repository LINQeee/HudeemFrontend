import classes from "./SectionHeader.module.scss";
import {FC} from "react";

interface SectionHeaderProps {
    content: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({content}) => {
    return <header className={classes.sectionHeader}>{content}</header>;
};

export default SectionHeader;