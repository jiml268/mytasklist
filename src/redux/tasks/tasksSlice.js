import { createSlice } from '@reduxjs/toolkit';

const initialState = {
      Taskheading: {},
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