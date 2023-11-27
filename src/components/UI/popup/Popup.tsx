import {FC, ReactNode} from "react";
import {CSSTransition} from "react-transition-group";
import "./Transitions.scss";

interface PopupProps {
    children: ReactNode;
    popupVisible: boolean;
}

const Popup: FC<PopupProps> = ({children, popupVisible}) => {

    return (
        <CSSTransition
            in={popupVisible}
            timeout={200}
            classNames="popup"
            unmountOnExit
        >
            {children}
        </CSSTransition>
    );
};

export default Popup;