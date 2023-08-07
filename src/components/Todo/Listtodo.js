import React from "react";
import Addtodo from "./Addtodo";
import "./todo.scss";
import { toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
class Listtodo extends React.Component {
    state = {
        list: [
            { id: 1, tile: "Desi" },
            { id: 2, tile: "Font-end " },
            { id: 3, tile: "Back-end" },
            { id: 4, tile: "DevS" },
        ],
        edittodo: {}
    }
    addnew = (todo) => {
        this.setState({
            list: [...this.state.list, todo]
        })
        toast.success('ADD Todo new succes.');
    }


    edit = (todo) => {
        let { edittodo } = this.state;
        let isEmptyEdit = Object.keys(edittodo).length === 0;

        // Save
        if (!isEmptyEdit && edittodo.id === todo.id) {
            let list2 = [...this.state.list];
            let objIndex = list2.findIndex((item) => item.id === todo.id);
            list2[objIndex].tile = edittodo.tile;
            this.setState({
                list: list2,
                edittodo: {}
            });
            toast.success('Edit success');
            return;
        }
        // Edit
        this.setState({
            edittodo: todo
        });
    }
    OnchangeEdit = (event) => {
        let edittodo2 = { ...this.state.edittodo };
        edittodo2.tile = event.target.value;
        this.setState({
            edittodo: edittodo2
        });

    }
    delete = (todo) => {
        let listdel = this.state.list;
        listdel = listdel.filter(item => item.id !== todo.id);
        this.setState({
            list: listdel
        })

        toast.success('Del success');
    }
    render() {
        let { list, edittodo } = this.state
        let isEmpty = Object.keys(edittodo).length === 0; // check object  nêu length = 0 thì = true , và ngược lại 
        // console.log(isEmpty)
        return (
            <>
                <div className="container d-flex justify-content-center align-items-center ">
                    <div className="">
                        <Addtodo
                            addnew={this.addnew}
                        />
                        <div className="d-flex flex-column ">
                            {
                                list && list.length > 0 &&
                                list.map((item, index) => {
                                    return (
                                        <div className="child d-flex justify-content-between" key={item.id}>
                                            {isEmpty === true ?
                                                <span> {index + 1} - {item.tile}</span>
                                                :
                                                <>
                                                    {item.id === edittodo.id ?

                                                        <span > {index + 1} - <input className="input-tile" type='text' value={edittodo.tile}
                                                            onChange={(event) => this.OnchangeEdit(event)}
                                                        /> </span>
                                                        :
                                                        <span> {index + 1} - {item.tile}</span>
                                                    }
                                                </>
                                            }
                                            <span>
                                                <button className="btn btn-warning" onClick={() => this.edit(item)}>
                                                    {item.id === edittodo.id ? "Save" : "edit"
                                                    }

                                                </button>


                                                <button className="btn btn-danger"
                                                    onClick={() => { this.delete(item) }}
                                                >Delete
                                                </button>
                                            </span>

                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </>
        )
    }

}
export default Listtodo;