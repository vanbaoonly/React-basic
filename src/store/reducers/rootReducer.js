const inState = {
    user: [
        { id: '1', name: 'name 1' },
        { id: '2', name: 'name 2' },
        { id: '3', name: 'name 3' }
    ],
    post: []

}

const rootReducer = (state = inState, action) => {
    switch (action.type) {
        case "Del_User":
            console.log("del", action)
            let userFilter = state.user;
            userFilter = userFilter.filter(item => item.id != action.payload.id)
            return { ...state, user: userFilter };

        case "Add_User":
            console.log("add", action)
            let id = Math.floor(Math.random() * 100);
            let userAdd = { id: id, name: `random ${id}` }

            return { ...state, user: [...state.user, userAdd] };

        default: {
            return state;
        }
    }



}
export default rootReducer;