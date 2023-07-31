import classes from "./UserList.module.css";
import { GrClose } from "react-icons/gr";
const UserList = (props) => {
    const deleteHandler = (index) => {
        const newData = props.data.filter((_, i) => i !== index);
        props.onDeleteUser(newData);
    };
    return (
        <div>
            {props.condition && (
                <div className={classes.container}>
                    {props.data.length >= 0 && (
                        <ul>
                            {props.data.map((user, index) => (
                                <li key={index}>
                                    <div className={classes.output}>
                                        <p className={classes.para}>
                                            Name: {user.name}
                                        </p>
                                        <p className={classes.para}>
                                            Age: {user.age}
                                        </p>
                                        <h3 className={classes.head3}>
                                            <GrClose
                                                className={classes.myicon}
                                                onClick={() =>
                                                    deleteHandler(index)
                                                }
                                            />
                                        </h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
};

export default UserList;
