import React from "react";
import { Link } from 'react-router-dom'

export default function LandingPage () {
    return(
        <div>
            <h1>Welcome to all Countrys 🌐</h1>
            <Link to='/home'>
                <button>Get into...</button>
            </Link>
        </div>
    )
}