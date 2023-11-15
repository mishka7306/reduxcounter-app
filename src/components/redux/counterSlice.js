import { createSlice } from "@reduxjs/toolkit";



export const counterSlice = createSlice({   //slice aitt consider cheyan "createslice"
    name:'counterApp',                 //name n ore impotnce um illa
    initialState:{
        value:0
    },

    //actions are created inside this reducers key as objct.
    reducers:{
    //logics to update state
     
    //func to incrmnt number
    increment:(state, action)=>{
      //if its a argument func then it can only be accessed by action and value in payload.  
        state.value += action.payload
    },

    //funct to decrmnt numbr
    decrement:(state, action)=>{
       //if its a argument func then it can only be accessed by action and value in payload.   
        state.value -= action.payload
    },

    //funct to reset nmbr
    reset:(state)=>{
        state.value = 0
    }


    }  
}) 

//action is required by compont inorder to updt state
export const{increment,decrement,reset} = counterSlice.actions

//reducer is required to store to chnge the state value.
export default counterSlice.reducer
