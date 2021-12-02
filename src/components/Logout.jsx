import React from 'react'
import { useDispatch } from 'react-redux'
import {logout} from '../features/userSlice'
import './Login.css'

function Logout() {
    const dispatch = useDispatch(logout())

    const handleLogout = (e) => {
        e.preventDefault()
        dispatch(logout())
    }
    return (
        <div className="logout">
            <h1>Welcome <span className="user__name">Ankit</span></h1>
            <button className="logout__button" onClick={(e) => handleLogout(e)}>Logout</button>
        </div>
    )
}

export default Logout