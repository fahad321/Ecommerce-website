import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from "../../store/app/store";
import { deleteUser, getUsers, updateUser } from '../../store/reducers/userReducer';
import styles from "./users.module.css";

interface User {
  avatar: string;
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

let Userslist: User[];

const Users: React.FC = () => {
  const [status, setStatus] = useState<string>('');
  const [isEdit, setIsEdit] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const dispatch: AppDispatch = useDispatch();
  // @ts-ignore
  const posts = useSelector((state) => state.users.users);
  const [fList, setFList] = useState(Userslist);
  const [list, setList] = useState(Userslist);

  useEffect(() => {
    setFList(posts);
    setList(posts);
  }, [posts]);

  function fetchUsers() {
    dispatch(getUsers());
  }

  function deleteSelectedUser(user: User) {
    let userId: number = user.id;
    const name = user.first_name;
    dispatch(deleteUser(userId));
    setStatus(`${name} has been deleted successfully`);
    setTimeout(() => {
      setStatus('');
    }, 3000);
  }

  function filterSelectedUser(user: User) {
    for (let i = 0; i < fList.length; i++) {
      if (user.id === fList[i].id) {
        let a = [];
        a.push(fList[i]);
        setList(a);
      }
    }
  }

  function editSelectedUser(user: User) {
    setIsEdit(true);
    for (let i = 0; i < list.length; i++) {
      if (user.id === list[i].id) {
        let a = [];
        a.push(fList[i]);
        setList(a);
      }
    }
  }

  function saveSelectedUser(user: User) {
    setIsEdit(false);
    let editedUser = {};
    const name = user.first_name;
    Object.assign(editedUser, {
      avatar: user.avatar,
      email: user.email,
      first_name: firstName,
      id: user.id,
      last_name: lastName,
    });
    // @ts-ignore
    dispatch(updateUser(editedUser));
    setStatus(`${name} has been updated successfully to ${firstName}`);
    setTimeout(() => {
      setStatus('');
    }, 3000);
  }
  return (
    <div className={styles.App}>
    <h2>Users from API:</h2>
    {fList !== undefined && !!fList.length && (
      <nav className={styles.nav__bar}>
        {' '}
        {fList.map((item) => (
          <li
            className={styles.nav__bar_links}
            onClick={() => filterSelectedUser(item)}
            key={item.id}
          >
            {' '}
            {item.first_name + ' ' + item.last_name}{' '}
          </li>
        ))}{' '}
      </nav>
    )}
    <button className={styles.fetch_users} onClick={fetchUsers}>
      Fetch Users
    </button>
    <div>
      <ul className={styles.list_users}>
        {' '}
        {list !== undefined &&
          !!list.length &&
          list.map((item) => (
            <li className={styles.li_user} key={item.id}>
              {' '}
              {item.first_name + ' ' + item.last_name}
              <button onClick={() => editSelectedUser(item)} className={styles.edit}>
                Edit
              </button>
              <button
                onClick={() => deleteSelectedUser(item)}
                className={styles.delete}
              >
                Delete
              </button>
              {!!isEdit && (
                <div>
                  <label>First Name</label>
                  <input
                    type="text"
                    className={styles.task}
                    onChange={(e) => setFirstName(e.target.value)}
                    name="firstName"
                  />
                  <label>Last Name</label>
                  <input
                    type="text"
                    className={styles.task}
                    onChange={(e) => setLastName(e.target.value)}
                    name="lastName"
                  />
                  <button
                    onClick={() => saveSelectedUser(item)}
                    className={styles.delete}
                  >
                    Save
                  </button>
                </div>
              )}{' '}
            </li>
          ))}{' '}
      </ul>
    </div>
    <p> {status}</p>
  </div>
  );
};

export default Users;
