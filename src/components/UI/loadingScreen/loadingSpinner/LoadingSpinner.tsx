import classes from "./LoadingSpinner.module.sass";

const LoadingSpinner = () => {
    return (
        <div className={classes.loadingSpinner}>
            <i className={[classes.calories, "fa-thin", "fa-fire"].join(" ")}></i>
            <div className={classes.loadingCircles}>
                <i className={"fa-solid fa-circle"}></i>
                <i className={"fa-solid fa-circle"}></i>
                <i className={"fa-solid fa-circle"}></i>
                <i className={"fa-solid fa-circle"}></i>
            </div>
        </div>
    );
};

export default LoadingSpinner;