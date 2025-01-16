import React, { useState, useEffect } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
    const [wordData, setWordData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Example word to fetch
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/fetch-word/?word=bonjour');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setWordData(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchData();
    }, []);





    return (
        <div className='main'>
            <div className='welcome'>
                <img className='icon1' src={assets.cap} alt="" />
                <span>
                    <h1>Welcome to French Facile</h1>
                    <p>Learn French with ease and fun!</p>
                    <button>Get Started</button>
                </span>
                <img className='icon2' src={assets.book} alt="" />
            </div>

            <div className="mainCards">
                <div className="card1"></div>
                <div className="card2">
                     {wordData ? (
                         <div>
                                <h2>{wordData.word}</h2>
                                <p><strong>Translations:</strong></p>
                                <ul>
                                    {wordData.translations.map((translation, index) => (
                                        <li key={index}>{translation}</li>
                                    ))}
                                </ul>
                                <p><strong>Examples:</strong></p>
                                <ul>
                                    {wordData.examples.map((example, index) => (
                                        <li key={index}>{example}</li>
                                    ))}
                                </ul>
                            </div>
                        ) : error ? (
                            <p>Error: {error}</p>
                        ) : (
                            <p>Loading...</p>
                    )}
                </div>
                <div className="card3"></div>
            </div>
        </div>
    )
}

export default Main
