import React from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets'
import { SiHomeadvisor } from "react-icons/si";
import { SiGitbook } from "react-icons/si";
import { SiQuizlet } from "react-icons/si";
import { GiProgression } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { HiSparkles } from "react-icons/hi2";

const Sidebar = () => {
    return (
        <div className='sidebar'>

            <div className='logo'>
                <img src={assets.logo} alt="" />
            </div>
            <nav className='nav'>
                <ul>
                    <li><SiHomeadvisor />Home</li>
                    <li><SiGitbook />Lesson</li>
                    <li><SiQuizlet /> Quiz</li>
                    <li><GiProgression />Progress</li>
                    <li><IoSettingsOutline />Settings</li>

                </ul>
            </nav>


            <div className="rand-quote">
                <span className='quote-icon'><HiSparkles /></span>
                <p>"The best way to predict the future is to create it." - Abraham Lincoln</p>
            </div>
        </div>
    )
}

export default Sidebar
