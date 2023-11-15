import { configureStore } from "@reduxjs/toolkit";//"store" create cheyan vndi reduce tool kit install chytu.
import counterSlice from "./counterSlice";
                                               



export const store = configureStore({        // store create chyndikil "configstore" method venm.So ee method "reduxtoolkit" ill matre ullu.
//reducer can only update value of state in store
//reducer key is predefine (object which can hold more than one reducer)
//export compont
reducer:{
    //reducer is coming from counterSlice since we are  export reducer as export default.
        counter:counterSlice
}

})