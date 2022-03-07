const ForumReducer = (state, action) => {
    if (action.type == "submit") {
        let todoObject = {
            topic: action.topic,
            users: action.users,
            time: action.time
        }
        let newTodos = [...state, todoObject];
        localStorage.setItem("topicDetails", JSON.stringify(newTodos))
        return newTodos
    }
    if (action.type == "delete") {
        console.log(action.index)
        let newState = state.filter(function (val, index) {
            if (action.index == index) {
                return false
            }
            return true
        })
        localStorage.setItem("topicDetails", JSON.stringify(newState))
        return newState
    }
    if (action.type == "delete5mins") {
        let newState = state.filter(function(val, ind){
            if (new Date().getFullYear() - new Date(val.time).getFullYear() >= 1) {
                return true;
            } else if (new Date().getMonth() - new Date(val.time).getMonth() >= 1) {
                return true;
            } else if (new Date().getDay() - new Date(val.time).getDay() >= 1) {
                return true;
            } else if (new Date().getHours() - new Date(val.time).getHours() >= 1) {
                return true;
            } else if (
                new Date().getMinutes() - new Date(val.time).getMinutes() >
                5
            ) {
                return true;
            } else {
                return false;
            }
        });
        localStorage.setItem("topicDetails", JSON.stringify(newState));
        return newState;
    }

}
export default ForumReducer;