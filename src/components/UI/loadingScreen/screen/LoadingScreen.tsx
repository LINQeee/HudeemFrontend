import classes from "./LoadingScreen.module.scss";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner.tsx";

const LoadingScreen = () => {
    return (
        <div className={classes.loadingScreen}>
            <LoadingSpinner/>
        </div>
    );
};

export default LoadingScreen;