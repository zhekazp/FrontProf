import { useState } from "react";
import Planet from "./Planet";

interface IUserInfo {
  name: string;
  surName: string;
  planet: string;
  text: string;
  gender: string;
  rules: boolean;
}
export const Contact = () => {
  const newUser: IUserInfo = {
    name: "",
    surName: "",
    planet: "",
    text: "",
    gender: "Male",
    rules: false,
  };
  const [user, setUser] = useState(newUser);
  const [error, setError] = useState(false);

  const setPlanet = (planet: string) => {
    setUser({ ...user, planet: planet });
  };

  const sentUserData = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!user.rules) {
      setError(true);
    } else {
      console.log(user);
      setError(false);
    }
  };

  return (
    <>
      <h1>Contact</h1>
      <div>
        <form action="">
          <div className="userData">
            <label>
              Name{" "}
              <input
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                type="text"
                value={user.name}
              />
            </label>
          </div>
          <div className="userData">
            <label>
              Surname{" "}
              <input
                onChange={(e) => setUser({ ...user, surName: e.target.value })}
                type="text"
                value={user.surName}
              />
            </label>
          </div>
          <div className="userData">
            <label>
              Planet <Planet setPlanet={setPlanet} planet={user.planet} />
            </label>
          </div>
          <div className="userData">
            <textarea
              onChange={(e) => setUser({ ...user, text: e.target.value })}
              value={user.text}
              rows={4}
            ></textarea>
          </div>
          <div className="userData">
            <label>
              <input
                type="radio"
                value="Male"
                name="gender"
                checked={user.gender === "Male"}
                onChange={(e) => setUser({ ...user, gender: e.target.value })}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                value="Female"
                name="gender"
                checked={user.gender === "Female"}
                onChange={(e) => setUser({ ...user, gender: e.target.value })}
              />{" "}
              Female
            </label>
            <label>
              <input
                type="radio"
                value="Other"
                name="gender"
                checked={user.gender === "Other"}
                onChange={(e) => setUser({ ...user, gender: e.target.value })}
              />{" "}
              Other
            </label>
          </div>
          <div className="userData">
            <label>
              {" "}
              <span className={error? "error" : ""}>I've read the rules</span>{" "}
              <input
                type="checkbox"
                checked={user.rules}
                onChange={(e) => {setUser({ ...user, rules: e.target.checked });
              setError(false);
              }}
              />
            </label>
          </div>
          <div className="userData">
            <button onClick={(e) => sentUserData(e)} type="submit">
              SENT
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
