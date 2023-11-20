import React from 'react'
import firstFooterImg from '../images/image5.png'
import secondFooterImg from '../images/image6.png'
import thirdFooterImg from '../images/image7.png'
import fourthFooterImg from '../images/image8.png'

export default function Footer() {
  return (
    <footer className='footer'>
        <div class="on-footer-img">
          <img class="on-footer-pic" src={firstFooterImg} alt="#" />
          <img class="on-footer-pic" src={secondFooterImg} alt="#" />
          <img class="on-footer-pic" src={thirdFooterImg} alt="#" />
          <img class="on-footer-pic last" src={fourthFooterImg} alt="#" />
        </div>
    </footer>
  )
}
