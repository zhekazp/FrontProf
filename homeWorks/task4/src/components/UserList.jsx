import { Component } from 'react'
import User from './User';
import UserInfo from './UserInfo';
import { Preloader } from './Preloader';


export class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isLoading: false,
            currentUser: {
                userName: "",
                userEmail: "",
                userCity: "",
                userId: 0
            }
        }
    }
    componentDidMount() {
        this.setState({ ...this.state, isLoading: true });
        try {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(data => {
                    this.setState({ users: data, isLoading: false });
                });
        } catch (err) {
            console.log(err);
        }
    }

    handleClick = (index) => {
        this.setState({
            currentUser: {
                userName: this.state.users[index].username,
                userEmail: this.state.users[index].email,
                userCity: this.state.users[index].address.city,
                userId: this.state.users[index].id
            }
        });
    }

    render() {
        const { users, isLoading } = this.state;
        const { userName, userEmail, userCity, userId } = this.state.currentUser;
        return (
            <>
                {isLoading ? (<Preloader/>) : (
                    <>
                        <h4>Chose a user:</h4>
                        <div className='users'>
                            {users.map((user, index) => (

                                <div key={user.id} onClick={() => this.handleClick(index)}>
                                    <User name=
                                        {user.name}
                                    />
                                </div>

                            ))}
                        </div>
                        {userName ?
                            <>
                                <div className='userInfo'>
                                    <UserInfo
                                        userName={userName}
                                        userEmail={userEmail}
                                        userCity={userCity}
                                    />

                                </div>
                                <button onClick={()=>{this.props.changePage(userId)}}>Get user`s tasks</button>
                            </>
                            : <></>
                        }
                    </>
                )}
            </>
        )
    }
}

export default UserList