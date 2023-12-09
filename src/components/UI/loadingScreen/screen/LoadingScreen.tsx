import classes from "./LoadingScreen.module.sass";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner.tsx";

const LoadingScreen = () => {
    return (
        <div className={classes.loadingScreen}>
            <LoadingSpinner/>
        </div>
    );
};

export default LoadingScreen;