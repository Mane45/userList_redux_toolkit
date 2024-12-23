import { useDispatch, useSelector } from "react-redux"
import styles from "./userList.module.css"
import { removeUser } from "./userList.slice"

export const UserList = () => {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
    console.log(users)
    return <>
        <h3>User List</h3>
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>name</th>
                    <th>age</th>
                    <th>salary</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user =>
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.salary}</td>
                        <td><button onClick={() => dispatch(removeUser(user.id))}>remove</button></td>
                    </tr>
                )}
            </tbody>
        </table>
    </>
}