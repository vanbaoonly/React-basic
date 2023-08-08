import React from 'react';
import { connect } from 'react-redux';

class About extends React.Component {

    state = {
        ListDataRedux: this.props.DataRedux
    }

    Delete = (user) => {
        this.props.DelUserRedux(user)
    }
    Add = () => {
        this.props.AddUser()
    }


    render() {
        console.log(this.props.DataRedux)
        let ListDataRedux = this.props.DataRedux

        return (
            <div>
                {
                    ListDataRedux && ListDataRedux.length > 0 &&
                    ListDataRedux.map((item, index) => {
                        return (
                            <div key={item.id}>
                                {index + 1}- {item.name}  <button onClick={() => this.Delete(item)}>X</button>
                            </div>
                        )
                    })
                }
                <button onClick={() => this.Add()}>Add new</button>
            </div>
        )
    }
}


// hàm để biến trạng thái  lưu trữ trong redux thành duwxw liệu truyền vào component  
const mapReduxToProps = (state) => {
    return { DataRedux: state.user } // dl 'user' từ redux store đc chuyển vào props 'DataRedux' 
}

// hàm để các action trong redux thành các phạm vi (props)  của component
const mapDispatchToProps = (dispatch) => {
    return {
        // Action 'DelUserRedux' trong Redux được biến thành hành vi có thể gọi từ component
        DelUserRedux: (userDel) => { dispatch({ type: "Del_User", payload: userDel }) },
        AddUser: () => { dispatch({ type: "Add_User" }) }
    }

}

export default connect(mapReduxToProps, mapDispatchToProps)(About);
