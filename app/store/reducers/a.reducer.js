import * as Actions from "../actions/a.actions";

const initialState = () => ({});

const aReducer = (state = initialState(), action) => {
  switch (action.type) {
  case Actions.A_RESET:
    return initialState();
  default:
    return state;
  }
};

export default aReducer;
