import classes from "./CustomLink.module.sass";
import {Link} from "react-router-dom";
import {FC} from "react";

interface CustomLinkProps {
    href: string;
    label: string;
    fontSize: number;
    onClick?: () => void;
}

const CustomLink: FC<CustomLinkProps> = ({href, label, fontSize, onClick}) => {
    return (
        <Link className={classes.link} to={href} style={{fontSize: fontSize}} onClick={onClick}>{label}</Link>
    );
};

export default CustomLink;