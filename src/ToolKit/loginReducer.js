import { createSlice } from "@reduxjs/toolkit";
import data from "./Data";
const initalValue={email:"dummy",username:"dummy"}

const userSlice=createSlice({
    name:"userinfo",
    initialState:{
        loginInfo:initalValue,
        isLogged:false,
        todoData:data
    },
    reducers:{
        login:(state,action)=>{
           //const datajs=[...data,action.payload]
            console.log(action.payload)
            state.loginInfo=action.payload
            state.isLogged=true
            state.todoData=[...state.todoData,action.payload]

        },
        changeTodoPending:(state,action)=>{
            console.log(action.payload.id)
            state.todoData.map((item)=>{
                if (item.id === action.payload.id) {
                    console.log("i",{...item})
                    console.log("item details", {...item, status: !item.status});
                    return { ...item, status: !item.status }
                } else {
                    // console.log("else item:", item);
                    return item;
                }
                
            })    
        },
        logout:(state)=>{
            state.loginInfo=initalValue
            state.isLogged=false
        },
        removed:(state,action)=>{
            state.todoData.splice(action.payload.index,1)
        }

       

    }
})
export const {login,logout,changeTodoPending,removed}=userSlice.actions

export default userSlice.reducer