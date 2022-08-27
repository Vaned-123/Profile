import React from 'react'
import {MenuItems} from './menu'
import {CgMenu} from 'react-icons/cg'
import './navbar.css'

function NavbarN() {

  // state = {clicked: false}

  // handleClick = () => {
  //   this.setState({clicked: !this.state.clicked})
  // }

  return (
    <div className='Navbar'>
      {/* <div className='menu-icon' onClick={this.handleClick}>
         <CgMenu className={this.state.clicked} /> 
      </div> */}
      <ul className='menu'>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default NavbarN