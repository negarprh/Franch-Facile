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
        </div>
    )
}

export default Main
