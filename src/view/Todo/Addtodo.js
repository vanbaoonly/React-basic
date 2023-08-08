import React from "react";
import "./todo.scss";
import { toast } from "react-toastify";
class Addtodo extends React.Component {


    state = {
        tile: ''
    };
    HandleOnchangeTile = (event) => {
        this.setState({
            tile: event.target.value
        })
    }
    HandleAddtodo = () => {
        if (!this.state.tile) {
            toast.warning("No information ?");
            return;
            //if(undefined/null/empty) => false
        }
        let todo = {
            id: Math.floor(Math.random() * 100),
            tile: this.state.tile
        }
        this.props.addnew(todo);
        this.setState({ tile: '' })
    }



    render() {
        // let { tile } = this.state;
        return (
            <>
                <div className="add-new d-flex flex-row justify-content-center">
                    <input type='text' onChange={(event) => this.HandleOnchangeTile(event)} />
                    <button className="btn btn-primary" onClick={() => this.HandleAddtodo()}>Add</button>
                </div>




            </>
        )
    }

}
export default Addtodo;