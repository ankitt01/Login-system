import React from 'react'
import './Login.css'

function Logout() {
    return (
        <div className="logout">
            <h1>Welcome <span className="user__name">Ankit</span></h1>
            <button className="logout__button">Logout</button>
        </div>
    )
}

export default Logout