import React from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets'

const Sidebar = () => {
    return (
        <div className='sidebar'>

            <div className='logo'>
                <img src={assets.logo} alt="" />
            </div>
            <nav className='nav'>
                <ul>
                    <li>Home</li>
                    <li>Lessons</li>
                    <li>Quiz</li>
                    <li>Progress</li>
                    <li>Settings</li>

                </ul>
            </nav>
        </div>
    )
}

export default Sidebar
