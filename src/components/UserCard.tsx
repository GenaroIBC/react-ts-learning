import { User } from "../interfaces/User";

export function UserCard({ name, active, since }: User) {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <button className={active ? "user-card__active" : "user-card__inactive"}>
        {active ? "active" : "inactive"}
      </button>
      <p>Since: {since}</p>
    </div>
  );
}
