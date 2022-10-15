import { useState } from "react";
import { User } from "../interfaces/User";

interface Props {
  handleNewUser: (user: User) => void;
}

export function UserForm({ handleNewUser }: Props) {
  const [inputValues, setInputValues] = useState({
    name: "",
    active: false,
    since: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);

    setInputValues(prevValues => ({
      ...prevValues,
      [e.target.name]:
        e.target.name === "active" ? e.target.checked : e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleNewUser(inputValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        required
        onChange={handleChange}
        id="name"
        name="name"
        type="text"
        placeholder="Name"
      />

      <label htmlFor="since">Since</label>
      <input
        required
        onChange={handleChange}
        id="since"
        name="since"
        type="text"
        placeholder="Since"
      />

      <label htmlFor="active">Active</label>
      <input
        onChange={handleChange}
        id="active"
        name="active"
        type="checkbox"
        placeholder="Active"
      />

      <button type="submit">Create user!</button>
    </form>
  );
}
