import { createSlice } from '@reduxjs/toolkit'
const UserSlice = createSlice({
    name:"users",
    initialState: {
        users:[
            {id:101, name:"Arman", age:30 ,salary: 54000},
            {id:102, name:"Arevik", age:42, salary: 20000},
            {id:103, name:"Gayane", age:35, salary: 70000}
        ]
    },
    reducers: {
        removeUser:(state, action) => {
            state.users = state.users.filter(user => user.id != action.payload)
        }
    }

})
export const userReducer = UserSlice.reducer
export const {removeUser} = UserSlice.actions