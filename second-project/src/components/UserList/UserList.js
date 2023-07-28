import { useState } from "react";
import classes from "./UserList.module.css";
import UserInputForm from "../UserInput/UserInputForm";
const UserList = (props) => {
    const [users, setUsers] = useState([]);
    const [isThereAUser, setIsThereAUser] = useState(false);

    const addUserHandler = (user) => {
        setUsers((prevUser) => [...prevUser, user]);
        setIsThereAUser(true);
    };
    return (
        <div>
            <UserInputForm onAddUser={addUserHandler}></UserInputForm>
            {isThereAUser && (
                <div className={classes.container}>
                    {users.length > 0 && (
                        <ul>
                            {users.map((user, index) => (
                                <li key={index}>
                                    <div className={classes.output}>
                                        <p className={classes.para}>
                                            Name: {user.name}
                                        </p>
                                        <p className={classes.para}>
                                            Age: {user.age}
                                        </p>
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
