import React from 'react'
import { Image } from 'react-bootstrap'
import 'react-bootstrap'
import profile from '../../assets/mi.png'
import {FaFacebook, FaGithub} from 'react-icons/fa'
import './header.css'

function Header() {
  return (
    <div className='container'>
        <div className='about'>
            <Image
            className='images'
             src={profile}
            roundedCircle='true' />
            <div className='contact'>
                <h3>Tel: 55-8594-0328</h3>
                <h3>E-mail: delacruzv368@gmail.com</h3>
            </div>
            <div className='icon-header'>
          <div className='h4-icon'>
            <h4>Social Media          </h4>
          </div>
          <div className='icon-container'>
            <a href='https://www.facebook.com/vanessa.delacruz.7355'><FaFacebook size='6.5vmax' color='white' className='icon-he'/></a>
            <a href='https://github.com/Vaned-123'><FaGithub  size='6.5vmax' color='white' className='icon-he'/></a>
          </div>
        </div>
       </div>
       <h1>Vanessa De La Cruz</h1>
       <p>I got some experiencie doing backend and fronted in a very short time. If I don't 
        know some programing language, I can learn it very quickly, there is always somenthing new to learn
       </p>
        
    </div>
  )
}

export default Header