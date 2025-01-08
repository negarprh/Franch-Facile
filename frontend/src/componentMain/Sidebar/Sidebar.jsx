import React, { useState, useEffect } from 'react';
import './sidebar.css'
import { assets } from '../../assets/assets'
import { SiHomeadvisor } from "react-icons/si";
import { SiGitbook } from "react-icons/si";
import { SiQuizlet } from "react-icons/si";
import { GiProgression } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { HiSparkles } from "react-icons/hi2";

const Sidebar = () => {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [error, setError] = useState("");

    /////menu toggle
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle menu state

    }

    // Fetch the quote from the API
    useEffect(() => {
        fetch('/api/quote/') // Make sure your backend API is running
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setQuote(data.quote || "No quote found.");
                setAuthor(data.author || "Unknown");
            })
            .catch((error) => {
                setError("Failed to fetch quote");
                console.error("Error fetching quote:", error);
            });
    }, []);





    return (
        <>
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

                    {error ? (
                        <p className="error">{error}</p>
                    ) : (
                        <>
                            <p>{quote}</p>
                            {/*<p>{author}</p>*/}
                        </>
                    )}

                </div>
            </div>

            <nav className='navsmall'>
                <div className='line' onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`menu ${isOpen ? 'open' : 'close'}`}>
                    <li><SiHomeadvisor />Home</li>
                    <li><SiGitbook />Lesson</li>
                    <li><SiQuizlet /> Quiz</li>
                    <li><GiProgression />Progress</li>
                    <li><IoSettingsOutline />Settings</li>

                </ul>
            </nav>
        </>





    )
}

export default Sidebar
