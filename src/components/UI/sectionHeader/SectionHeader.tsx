import classes from "./SectionHeader.module.scss";
import {FC, memo} from "react";

interface SectionHeaderProps {
    content: string;
}

const SectionHeader: FC<SectionHeaderProps> = memo(({content}) => {
    return <header className={classes.sectionHeader}>{content}</header>;
});

export default SectionHeader;