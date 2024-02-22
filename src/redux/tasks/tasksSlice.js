import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Taskheading: {
    _id: "65c5034488306414d4cf9f8e",
    user_id: 1,
    boardName: "My Task Board",
    boardDescription: "Tasks to keep organise"
},
    userID: 1,
        isloading: false
};

const taskSlice = createSlice({
  name: 'task',
    initialState,
        reducers: {
                setID: (state, action) => {
       state.userID =action.payload 
          },
    },
         extraReducers: builder =>
        builder
         
         
});
         export const { setID,   } = taskSlice.actions;
  
export const taskReducer = taskSlice.reducer;