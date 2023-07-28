import classes from "./InvalidInputForm.module.css";

const InvalidInputForm = ({ typeOfMessage, message, onClose }) => {
    return (
        <div className={classes.popupOverlay}>
            <div className={classes.popup}>
                <h2>{typeOfMessage}</h2>
                <p>
                    {message}
                    <button onClick={onClose}>Close</button>
                </p>
            </div>
        </div>
    );
};

export default InvalidInputForm;
