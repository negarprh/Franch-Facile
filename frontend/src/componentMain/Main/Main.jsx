import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
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
                <div className="card2"></div>
                <div className="card3"></div>
            </div>
        </div>
    )
}

export default Main
