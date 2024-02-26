import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3030/api';

export const getheader = createAsyncThunk(
  'user/getheader',
     async (credentials, thunkAPI) => {
       try {
      const response = await axios.post(
        `/getHeader`, credentials
         );
      return response.data;
       } catch (error) {
              

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editHeader = createAsyncThunk(
  'user/editHeader',
  async  (credentials, { dispatch, rejectWithValue }) => {

    try {
      const response = await axios.post(
        `editHeader`, credentials
      );
      return response.data.data.result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getTasks = createAsyncThunk(
  'user/getTasks',
    async  (credentials, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post(
        `getTasks`, credentials
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);