import React from 'react'
import firstCardImage from '../images/Image.png'
import secondCardImage from '../images/Image2.png'
import thirdCardImage from '../images/Image3.png'
import fourthCardImage from '../images/Image4.png'

export default function HeaderCards() {
  return (
    <div className='picture-cards'>
        <div className="picture-card">
            <img className='picture-card__image' src={firstCardImage} alt="#" />
            <div className='picture-card__border-line'></div>
            <div className="picture-card__title">
                <h1>RESEARCH - STRATEGY - DESIGN - DEVELOPMENT</h1>
                <p>2022</p>
            </div>
            <h1 className='picture-card__title-name'>DADEY</h1>
        </div>
        <div className="picture-card">
            <img className='picture-card__image' src={secondCardImage} alt="#" />
            <div className='picture-card__border-line'></div>
            <div className="picture-card__title">
                <h1>DESIGN - DEVELOPMENT</h1>
                <p>2024</p>
            </div>
            <h1 className='picture-card__title-name'>ASANTE</h1>
        </div>
        <div className="picture-card">
            <img className='picture-card__image' src={thirdCardImage} alt="#" />
            <div className='picture-card__border-line'></div>
            <div className="picture-card__title">
                <h1>RESEARCH - STRATEGY - DESIGN - DEVELOPMENT</h1>
                <p>2023</p>
            </div>
            <h1 className='picture-card__title-name'>AMEKPOR</h1>
        </div>
        <div className="picture-card">
            <img className='picture-card__image' src={fourthCardImage} alt="#" />
            <div className='picture-card__border-line'></div>
            <div className="picture-card__title">
                <h1>RESEARCH - STRATEGY - DESIGN - DEVELOPMENT</h1>
                <p>2021</p>
            </div>
            <h1 className='picture-card__title-name'>KWABENA SPORTS</h1>
        </div>
    </div>
  )
}
