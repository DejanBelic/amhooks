const notesReducer = (state, action) => {
    console.log(state, 'state')
    console.log(action, 'action')
    switch (action.type) {
        case "POPULATE_NOTES":
            {
                return action.notes;
            }
        case "ADD_NOTE":
            return [
                ...state,
                {
                    title: action.title,
                    body: action.body
                }
            ]
        case "REMOVE_NOTE":
            return state.filter(note => note.title !== action.title)
        default:
            return state;
    }
}

export { notesReducer as default }