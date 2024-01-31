import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import shopdetailsServices from './shopServices';
import axios from 'axios';

// Assuming you have a service for daily entries similar to authService
// dailyEntryService should have a function like getDailyEntries()

const initialState = {
shopDetails: [],
       isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
};

export const getShopDetails = createAsyncThunk('shopDetails/get', 
async (u, thunkAPI) => {
    try{
        return await shopdetailsServices.shopProfile()
    }
    catch(error){

        const message =(error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const postShopDetails = createAsyncThunk('shopDetails/post', 
async (shopData, thunkAPI) => {
    try{
        return await shopdetailsServices.postshopProfile(shopData)
    }
    catch(error){

        const message =(error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


      
export const shopDetailsSlice = createSlice({
    name: 'shopDetails',
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
        .addCase(getShopDetails.fulfilled, (state, action) => {
            state.isSuccess = true;
            state.shopDetails = action.payload;
            state.isLoading =false;
          })
          .addCase(getShopDetails.rejected, (state, action) => {
            state.isError = true;
            state.message = action.payload;
            state.shopDetails = null;
          })
          .addCase(getShopDetails.pending, (state)=>{
            state.isLoading =true
        })
       ;
    }
  });

export const { reset  , show} = shopDetailsSlice.actions;

export default shopDetailsSlice.reducer;
