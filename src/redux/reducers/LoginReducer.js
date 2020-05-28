const init = {
  isLogged: false,
  number: null,
  password:null,
  user: {}
};

const LoginReducer = (state = init, action) => {
  console.log("action____action:",action)
  switch (action.type) {
    case 'NUMBER_SUCCESS_DISPATCH':
      return {
        isLogged: true,
        number: action.payload.number,
        password: action.payload.password,
      };
    case 'LOGIN_FAILED':
      return {
        init,
      };
    case 'LOGIN_SUCCESS': 
      return {
        ...state,
        isLogged: true,
        user: action.payload
      }
    default:
      return state;
  }
};
export default LoginReducer;