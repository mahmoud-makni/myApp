import flatListData from '../../data/flatListData'
const init = {
  isLogged: false,
  number: null,
  password:null,
  user: {},
  flatListData
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
    case 'ARTICLE_SALE':
      return {
        ...state,
        flatListData: [
          {
            "key": "598a68b778fee204ee51cd32",
            "name": "Vegetable",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/42/Hemd.jpg",
            "foodDescription": "Fresh vegetables",
            "PrixClient": "60DT",
            "PrixGanger": "5DT",
            "CodeQr": "00001",
            "Taille": "Taille XXL",
            "providerPhone": "20136213",
    
    
    
    
            "image": "https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg",
            "notification": "Un de vos article a été vendu",
        },
          ...state.flatListData,

        ]
      }
    default:
      return state;
  }
};
export default LoginReducer;