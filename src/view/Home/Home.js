import React from 'react';

import Color from "../HOC/randomColor"
import { withRouter } from "react-router";
class Home extends React.Component {

    render() {

        return (
            <>
                <h1 className='text-center '> Welcom to Home Page</h1>
            </>
        );
    }

}
// export default withRouter(Home);
// withRouter dùng để chuyển hướng trang

export default Color(Home);
// dung HOC để thay đổi component
