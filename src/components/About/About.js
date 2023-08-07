import React, { Component } from 'react';
import { toast } from 'react-toastify'; // Assuming you have imported the toast library

class About extends Component {
    state = {
        list: [
            { id: 1, title: "Desi" },
            { id: 2, title: "Front-end " },
            { id: 3, title: "Back-end" },
            { id: 4, title: "DevS" },
        ],
        edittodo: {}
    }

    OnchangeEdit = (event) => {
        let edittodo2 = { ...this.state.edittodo };
        edittodo2.title = event.target.value;
        this.setState({
            edittodo: edittodo2
        });
    }

    edit = (todo) => {
        let { edittodo } = this.state;
        let isEmptyEdit = Object.keys(edittodo).length === 0;

        // Save
        if (!isEmptyEdit && edittodo.id === todo.id) {
            let list2 = [...this.state.list];
            let objIndex = list2.findIndex((item) => item.id === todo.id);
            list2[objIndex].title = edittodo.title;
            this.setState({
                list: list2,
                edittodo: {}
            });
            toast.success('Edit success');
            return;
        }
        // Edit
        this.setState({
            edittodo: { ...todo }
        });
    }

    render() {
        const { list, edittodo } = this.state;
        return (
            <div>
                <ul>
                    {list.map((item) => (
                        <li key={item.id}>
                            {item.id === edittodo.id ? (
                                <div>
                                    <input
                                        className="input-tile"
                                        type='text'
                                        value={edittodo.title}
                                        onChange={(event) => this.OnchangeEdit(event)}
                                    />
                                    <button className="btn btn-warning" onClick={() => this.edit(item)}>
                                        Save
                                    </button>
                                </div>
                            ) : (
                                <div>
                                    {item.title}
                                    <button className="btn btn-warning" onClick={() => this.edit(item)}>
                                        Edit
                                    </button>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default About;
