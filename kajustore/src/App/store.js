import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import dailyEntriesReducer from '../features/dailyentry/dailyentrySlice'
import shopDetailsReducer from '../features/shop/shopSlices'

export const store = configureStore({
    reducer:{
        auth: authReducer,
        dailyentry: dailyEntriesReducer,
        shops: shopDetailsReducer
    },
})


