import { GET_COUPONS, SET_DESC } from "../../Utils/constants";

const initialState = {
    Coupons : [],
    Desc: []
    }
    
    const reducer = (state = initialState, action) =>{
 
      switch(action.type){
         case GET_COUPONS:
             return {
            ...state,
            Coupons: action.payload,
           } 
         case SET_DESC:
          return {
            ...state,
            Desc: action.payload,
          }    
          default: return state;
        }  
        
    }
    
    
    
    export default reducer;