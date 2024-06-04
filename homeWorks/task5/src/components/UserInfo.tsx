import { Component } from "react";

interface IUser  {
  userName: string;
  userEmail: string;
  userCity: string;
};

export class UserInfo extends Component<IUser> {
  render() {
    const { userName, userEmail, userCity } = this.props;
    return (
      <>
        <p>User name: {userName}</p>
        <p>User email: {userEmail}</p>
        <p>User city: {userCity}</p>
      </>
    );
  }
}

export default UserInfo;
