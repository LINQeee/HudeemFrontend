import classes from "./LoadingSpinner.module.scss";

const LoadingSpinner = () => {
    return (
        <div className={classes.loadingSpinner}>
            <svg className={classes.calories}>{}</svg>
        </div>
    );
};

export default LoadingSpinner;