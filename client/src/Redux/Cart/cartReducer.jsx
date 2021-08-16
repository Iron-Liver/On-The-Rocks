const initialState = {
    itemsLoaded : [],
    }
    
    const reducer = (state = initialState, action) =>{
      switch(action.type){
          case "GET_ITEMS":
             return {
            ...state,
            itemsLoaded: action.payload,
          }  
          
          default: return state;
        }  
          
    }
    
    
    
    export default reducer;