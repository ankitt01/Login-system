import { createStore } from '@reduxjs/toolkit'
import userREducer from '../features/userSlice'
export default configureStore({
    reducer: {
        user: userReducer
    }
})