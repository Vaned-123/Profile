import React from 'react'
import NavbarN from './Navbar/NavbarN'
import {FaHtml5, FaCss3, FaReact, FaJava, FaNpm} from 'react-icons/fa'
import './home.css'

function Home() {
  return (
    <div className='box'>
        <NavbarN />
        <div className='onside-box'>
        <div className='section' id='edu'>
            <div className='Title'>
                <h1>Education</h1>
            </div>
            <div className='school'>
                <ul>
                    <div className='high'>
                    <li className='titlle-school'>Cecyt 9: Juan De Dios Batiz</li>
                    <li className='body-school'>Digital Systems Technician</li>
                    <li className='date'>July, 2021</li>
                    </div>
                    </ul>
                    <ul>
                    <div className='U-camp'>
                    <li className='titlle-school'>U-camp</li>
                    <li className='body-school'>Web Development Full Stack</li>
                    <li className='date'>August, 2022</li>
                    </div>
                    </ul>
                    <ul>
                    <div className='University'>
                    <li className='titlle-school'>UPITTA</li>
                    <li className='body-school'>Mecatronic Enginier</li>
                    </div>
                    </ul>
            </div>
        </div>
        <div className='section' id='skill'>
            <div className='Title'>
                <h1>Skills</h1>
            </div>
            <div className='programs'>
                <div className='icons'>
                    <h3>PORGRAMMING LANGUAGES</h3>
                    <FaCss3 className='icon' size='5vmax'/>
                    <FaHtml5 className='icon' size='5vmax'/>
                    <FaJava className='icon' size='5vmax'/>
                    <FaReact className='icon' size='5vmax'/>
                    <FaNpm className='icon' size='5vmax'/>
                </div>
                <div className='workflow'>
                    <h3>WORKFLOW</h3>
                    <ul>
                        <li>Mobile, Responsive Desing</li>
                        <li>Backend, MongoDB and FireBase</li>
                        <li>Teamwork</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='section' id='idiom'>
            <div className='Title'>
                <h1>Idioms</h1>
            </div>
            <div className='idioms'>
            <ul>
                    <div className='Spanich'>
                    <li className='titlle-school'>Spanisch</li>
                    <li className='level'>Mother tongue</li>
                    </div>
                </ul>
                <ul>
                <div className='English'>
                    <li className='titlle-school'>Enghlish</li>
                    <li className='level'>Level:  B1</li>
                    </div>
                </ul>
                <ul>
                <div className='Deutsch'>
                    <li className='titlle-school'>Deutsch</li>
                    <li className='level'>Level:   A1</li>
                    </div>
                </ul>
                <ul>
                <div className='Chinese'>
                    <li className='titlle-school'>Chinese</li>
                    <li className='level'>Level:   A1+ </li>
                    </div>
                </ul>
            </div>
        </div>
        <div className='section' id='inter'>
            <div className='Title'>
                <h1>Interests</h1>
            </div>
            <p>Apart from being student, I enjoy most of my time being indoors, 
                I follow a number of sci-fi and fantasy genre movies and television shows. I am a gamer, but 
                I spend a large amount of my free time exploring the latest technology advancements.
                <br /><br />
                When I am outdoors. I enjoy discovering new places in my beloved Mexico, learn about any kind of rural communities
                and take some of their knowledge with me.   
            </p>
        </div>
        </div>
    </div>
  )
}

export default Home