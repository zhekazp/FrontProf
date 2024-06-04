import  { Component } from 'react'

interface IProps{
  name: string
}
export class User extends Component<IProps> {
  render() {
    return (
      <div className='user'>{this.props.name}</div>
    )
  }
}

export default User