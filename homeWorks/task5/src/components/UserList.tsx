import { Component } from "react";
import User from "./User";
import UserInfo from "./UserInfo";
import { Preloader } from "./Preloader";

interface IProps {
  changePage(userId: number): void;
}
interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
interface ICurrentUser{
    userName: string,
        userEmail: string,
        userCity: string,
        userId: number
}
interface IState{
    users: IUser[],
    isLoading:boolean,
    currentUser: ICurrentUser
}

export class UserList extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state=  {
      users: [],
      isLoading: false,
      currentUser: {
        userName: "",
        userEmail: "",
        userCity: "",
        userId: 0,
      },
    };
  }
  componentDidMount() {
    this.setState({ ...this.state, isLoading: true });
    try {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
          this.setState({ users: data, isLoading: false });
        });
    } catch (err) {
      console.log(err);
    }
  }

  handleClick = (index: number) => {
    this.setState({
      currentUser: {
        userName: this.state.users[index].username,
        userEmail: this.state.users[index].email,
        userCity: this.state.users[index].address.city,
        userId: this.state.users[index].id,
      },
    });
  };

  render() {
    const { users, isLoading } = this.state;
    const { userName, userEmail, userCity, userId } = this.state.currentUser;
    return (
      <>
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <h4>Chose a user:</h4>
            <div className="users">
              {users.map((user, index) => (
                <div key={user.id} onClick={() => this.handleClick(index)}>
                  <User name={user.name} />
                </div>
              ))}
            </div>
            {userName ? (
              <>
                <div className="userInfo">
                  <UserInfo
                    userName={userName}
                    userEmail={userEmail}
                    userCity={userCity}
                  />
                </div>
                <button
                  onClick={() => {
                    this.props.changePage(userId);
                  }}
                >
                  Get user`s tasks
                </button>
              </>
            ) : (
              <></>
            )}
          </>
        )}
      </>
    );
  }
}

export default UserList;
