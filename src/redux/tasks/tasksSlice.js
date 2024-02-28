import { createSlice } from '@reduxjs/toolkit';
import {getheader,editHeader, getTasks } from './tasksOperators'

const initialState = {
      Taskheading: {},
      Tasklist: [],
        userID: 1,
        isloading: false,
        editTaskNo: null,
        modalopen: false,
        editData: {}
};

const taskSlice = createSlice({
  name: 'task',
    initialState,
        reducers: {
                setID: (state, action) => {
       state.userID =action.payload 
                },
                SetEditIndex: (state, action) => {
                        state.editTaskNo = action.payload 
                        state.editTaskNo !== null ? state.modalopen = true : state.modalopen = false
                },
                setEditData: (state, action) => {
                        state.editData = action.payload 

                },
    },
         extraReducers: builder =>
        builder
        .addCase(getheader.pending, (state, action) => {
                          state.isloading = true;

                  })
                  
                  .addCase(getheader.fulfilled, (state, action) => {
                          if (action.payload.code === 200) {
                                state.Taskheading = action.payload.data;

                          }
                          if (action.payload.code === 404) {
                                   state.Taskheading = {};

                          }
                         
                                state.isloading = false
        
      })
                  .addCase(getheader.rejected, (state, action) => {
                      state.isloading = false    
                  } 
    )
       .addCase(editHeader.pending, (state, action) => { state.isloading = true;})
              .addCase(editHeader.fulfilled, (state, action) => {
        state.isloading = false
         
      })
              .addCase(editHeader.rejected, (state, action) => {
      state.isloading = false
        
      }
            )   
          .addCase(getTasks.pending, (state, action) => { state.isloading = true;})
                  .addCase(getTasks.fulfilled, (state, action) => {
                          if (action.payload.code === 200) {
                                  state.Tasklist = action.payload.data
                          }      

                          state.isloading = false
                          
      })
              .addCase(getTasks.rejected, (state, action) => {
      state.isloading = false
        
      }
            )
         
});
         export const { setID, SetEditIndex, setEditData  } = taskSlice.actions;
  
export const taskReducer = taskSlice.reducer;