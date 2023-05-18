
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
clicks:1000,
Xclick:1
}

const clicksReducer = createSlice({
  name: 'clicks',
  initialState,
  reducers: {
   addClicks:(state,action)=>{
state.clicks += action.payload
   },

       dobleClick:(state,action)=>{
        if(action.payload>state.clicks){
                 
        }else{
            state.Xclick *=2
state.clicks -= action.payload
        }
   
           },
   
  },
});

export const { addClicks,dobleClick } = clicksReducer.actions;
export default clicksReducer.reducer;