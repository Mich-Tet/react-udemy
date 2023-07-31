import { useState } from "react";
import UserList from "./components/UserList/UserList";
import UserInputForm from "./components/UserInput/UserInputForm";
function App() {
    const [users, setUsers] = useState([]);
    const [isThereAUser, setIsThereAUser] = useState(false);
    const deleteUserHandler = (newData) => {
        setUsers(newData);
        if (newData.length === 0) {
            setIsThereAUser(false);
        } else {
            setIsThereAUser(true);
        }
    };
    const addUserHandler = (user) => {
        setUsers((prevUser) => [...prevUser, user]);
        setIsThereAUser(true);
    };
    return (
        <div>
            <UserInputForm onAddUser={addUserHandler}></UserInputForm>
            <UserList
                data={users}
                condition={isThereAUser}
                onDeleteUser={deleteUserHandler}
            />
        </div>
    );
}

export default App;
