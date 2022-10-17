import { useUserFormReducer } from "../hooks/useUserFormReducer";
import { User } from "../interfaces/User";

interface FormProps {
  handleNewUser: (user: User) => void;
}

export function UserForm({ handleNewUser }: FormProps) {
  const [inputValues, formDispatch] = useUserFormReducer();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    formDispatch({
      type: "MODIFY_FIELD",
      payload: {
        inputName: name,
        inputValue: name === "active" ? checked : value,
      },
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleNewUser(inputValues);

    formDispatch({ type: "CLEAR_FORM" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        value={inputValues.name}
        required
        onChange={handleChange}
        id="name"
        name="name"
        type="text"
        placeholder="Name"
      />

      <label htmlFor="since">Since</label>
      <input
        value={inputValues.since}
        required
        onChange={handleChange}
        id="since"
        name="since"
        type="text"
        placeholder="Since"
      />

      <label htmlFor="active">Active</label>
      <input
        checked={inputValues.active}
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
