interface DefaultStateI {

}

const defaultState: DefaultStateI = {

};

const newsReducer = (state: DefaultStateI = defaultState, action: any): DefaultStateI => {
   return state
};

export default newsReducer;