import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import dailyentryServices from './dailyentryServices';
import axios from 'axios';

// Assuming you have a service for daily entries similar to authService
// dailyEntryService should have a function like getDailyEntries()

const initialState = {
dailyEntries: [],
       isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
};

export const getDailyEntries = createAsyncThunk('dailyEntries/get', 
async (_, thunkAPI) => {
    try{
        return await dailyentryServices.getDailyTransactions()
    }
    catch(error){

        const message =(error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const postDailyEntries = createAsyncThunk('dailyEntries/post', 
async (transactionData, thunkAPI) => {
    try{
        return await dailyentryServices.postDailyTransactions(transactionData)
    }
    catch(error){

        const message =(error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


      
export const dailyEntriesSlice = createSlice({
    name: 'dailyEntries',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = '';
        }

    

    },
    extraReducers: (builder) => {
        builder
        //get transaction
        .addCase(getDailyEntries.fulfilled, (state, action) => {
            state.isSuccess = true;
            state.dailyEntries = action.payload;
            state.isLoading =false;
          })
          .addCase(getDailyEntries.rejected, (state, action) => {
            state.isError = true;
            state.message = action.payload;
            state.dailyEntries = null;
          })
          .addCase(getDailyEntries.pending, (state)=>{
            state.isLoading =true
        })
        //post transaction

        .addCase(postDailyEntries.pending, (state)=>{
            state.isLoading =true;
        })
        .addCase(postDailyEntries.fulfilled, (state , action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.message =action.payload
        })
        .addCase(postDailyEntries.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = true
            state.message =action.payload
          
        })
       ;
    }
  });

export const { reset  , show} = dailyEntriesSlice.actions;

export default dailyEntriesSlice.reducer;
