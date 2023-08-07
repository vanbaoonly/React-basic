import React from "react";

class Login extends React.Component {

    componentDidMount() {
        console.log(this.props)
        // setTimeout(() => {
        //     //dùng để chuyển hướng trang
        //     this.props.history.push("/home")
        // }, 3000);
    }
    render() {
        return (
            <>
                <button className="bg-primary mt-100" onClick={() => { alert("click login") }} >Login</button>
            </>
        )
    }

}

export default Login;
