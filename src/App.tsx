import { useState } from "react";
import "./styles/App.css";
import { User } from "./interfaces/User";
import { UserCard } from "./components/UserCard";
import USERS from "./assets/USERS.json";
import { UserForm } from "./components/UserForm";

function App() {
  const [users, setUsers] = useState<User[]>(USERS);

  const handleNewUser = (user: User) => {
    console.log(user);
    setUsers(prevUsers => [...prevUsers, user]);
  };

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
