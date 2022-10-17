import { useEffect, useState } from "react";
import "./styles/App.css";
import { User } from "./interfaces/User";
import { UserCard } from "./components/UserCard";
import USERS from "./assets/USERS.json";
import { UserForm } from "./components/UserForm";
import { getAllUsers } from "./services/getAllUsers";

function App() {
  const [users, setUsers] = useState<User[]>(USERS);

  const handleNewUser = (user: User) => {
    console.log(user);
    setUsers(prevUsers => [...prevUsers, user]);
  };

  useEffect(() => {
    getAllUsers().then(users => {
      const mappedUsers = users.map(
        ({ name, phone }): User => ({
          name,
          since: phone,
          active: true,
        })
      );

      setUsers(mappedUsers);
    });
  }, []);

  return (
    <div>
      <h1>React + TypeScript</h1>
      <UserForm handleNewUser={handleNewUser} />
      <section className="user-cards-container">
        {users.map(user => (
          <UserCard key={Math.random()} {...user} />
        ))}
      </section>
    </div>
  );
}

export default App;
