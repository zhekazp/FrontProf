import  { Component } from 'react'

export class UserInfo extends Component {

    render() {
       
    return (
      <>
      <p>User name: {this.props.userName}</p>
      <p>User email: {this.props.userEmail}</p>
      <p>User city: {this.props.userCity}</p>
      </>
    )
  }
}

export default UserInfo