import classes from "./CustomLink.module.sass";
import {Link} from "react-router-dom";
import {FC} from "react";

interface CustomLinkProps {
    href: string;
    label: string;
    fontSize: number;
}

const CustomLink: FC<CustomLinkProps> = ({href, label, fontSize}) => {
    return (
        <Link className={classes.link} to={href} style={{fontSize: fontSize}}>{label}</Link>
    );
};

export default CustomLink;