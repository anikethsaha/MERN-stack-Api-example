 import { createStore }  from 'redux';


// All redux approach below

const initialState = () => {
  return ({
    user : [],

  })
}
const myReducer = (state = initialState(),action) => {
  // console.log("inside reducer" , action , state);
  switch (action.type) {
    case "ADD":
      // console.log("add");
      return state.data + 1;
      break;
      case "FETCH_ALL":
        // console.log("fetching all here all the best");
        return Object.assign({},state,{
          user: action.data
        });
        break;

    default:
      return state;
  }
}

let store = createStore(myReducer);
export default store;
