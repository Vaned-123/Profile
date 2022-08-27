import React from 'react'
import { Image } from 'react-bootstrap'
import 'react-bootstrap'
import profile from '../../assets/mi.png'
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
       </div>
       <h1>Vanessa De La Cruz</h1>
       <p>I got some experiencie doing backend and fronted in a very short time. If I don't 
        know some programing language, I can learn it very quickly, there is always somenthing new to learn
       </p>
    </div>
  )
}

export default Header