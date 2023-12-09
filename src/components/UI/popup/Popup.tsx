import {FC, memo, ReactNode} from "react";
import {CSSTransition} from "react-transition-group";
import "./Transitions.sass";

interface PopupProps {
    children: ReactNode;
    popupVisible: boolean;
}

const Popup: FC<PopupProps> = memo(({children, popupVisible}) => {

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
});

export default Popup;