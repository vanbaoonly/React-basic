import React from "react";
import axios from "axios"
import "./User.scss"
import { withRouter } from "react-router-dom";
class ListUser extends React.Component {
    state = {
        ListUsers: [],

    }


    // dùng async await  khi fetch api  để tráng việc chạy bất đồng bộ
    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=1')
        console.log("check res", res.data.data)
        this.setState({
            ListUsers: res && res.data && res.data.data ? res.data.data : []
        })

    }

    HandleDetail = (user) => {
        this.props.history.push(`/user/${user.id}`)
    }


    render() {
        let { ListUsers } = this.state;
        console.log(ListUsers)
        return (
            <div className="wrapper">
                <h1>List User</h1>
                <table className="tb_list">
                    <tr align="center">
                        <th>id</th>
                        <th>name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>

                    {ListUsers && ListUsers.length > 0 &&
                        ListUsers.map((user) => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.first_name} {user.last_name}</td>
                                    <td>{user.email}</td>
                                    <td><button onClick={() => this.HandleDetail(user)}>Detail</button></td>
                                </tr>
                            )
                        })
                    }

                </table>

            </div>
        )
    }

}
export default withRouter(ListUser);