import React from 'react'
import youtube from "../assets/images/youtube.jpg"
import spotify from "../assets/images/icon3.svg"
import facebook from "../assets/images/download.png"

export default function Footer() {
  return (
    <div className='footer'>
      <div className="inside-footer">
        <h2 className='footer-header'>The Generics</h2>
      </div>

      <ul className='footer-list'>
        <a href="#">
            <li><img className='utube' src={youtube} alt="" /></li>
        </a>
        <a href="#">
            <li><img className='utube' src={spotify} alt="" /></li>
        </a>
        <a href="#">
            <li><img className='utube' src={facebook} alt="" /></li>
        </a>
      </ul>
      
    </div>
  )
}
