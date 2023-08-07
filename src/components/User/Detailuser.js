import axios from "axios";
import React from "react";
import "./User.scss";
import { withRouter } from "react-router";
class Detailuser extends React.Component {

    state = {
        user: {}
    }
    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id
            let res = await axios.get(`https://reqres.in/api/users/${id}`)
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })

        }

    }
    // back
    HandleBack = () => {
        this.props.history.push('/user');

    }
    render() {
        let { user } = this.state
        let isEmptyObj = Object.keys(user).length === 0; // check object  nếu = 0 là rỗng(true) ngược lại là false
        console.log(user)
        return (
            <div className="wrapper">
                {
                    isEmptyObj === false &&
                    <>
                        <div className="tb_detail">
                            <p>ID: {user.id}</p>
                            <p>Name: {user.first_name} {user.last_name}</p>
                            <p>Email: {user.email}</p>
                            <p className="img">
                                <img src={user.avatar} alt="User Avatar" />
                                <div> Avatar </div>
                            </p>
                            <button type="button" onClick={() => this.HandleBack()}>Back</button>
                        </div>
                    </>
                }
            </div>


        )




    }
}

export default withRouter(Detailuser);