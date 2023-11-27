import classes from "./Checkbox.module.scss";

const Checkbox = () => {
    return (
        <div className={classes.checkbox}>
            <input type={"checkbox"}/>
            <i className="fa-regular fa-check"></i>
        </div>
    );
};

export default Checkbox;