import {createSlice} from "@reduxjs/toolkit"

const initialState ={
    form:{
        fname:"",
        lname: "",
        age: "",
        moNumber: ""
    }
}
const Formslice =createSlice({
name:"form",
initialState:initialState,
reducers:{
    addForm:(state,actions)=>{
         state.form=actions.payload
    },

    clearForm:(state)=>{
        state.form =initialState
    }
}

})

export const {addForm,clearForm}=Formslice.actions;
export default Formslice.reducer;