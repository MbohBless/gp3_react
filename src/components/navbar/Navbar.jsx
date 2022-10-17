import React, {useState} from 'react'
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri'
import './navbar.css'
import logo from '../../assets/logo.svg'



const Navbar = () => {
  const [toogleMenu, setToogleMenu] = useState(false)
  const Menu = () => (
    <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#wgpt3'>What is GPT3</a></p>
    <p><a href='#posibility'>OpenAI</a></p>
    <p><a href='#features'>Case Studies</a></p>
    <p><a href='#blog'>Library</a></p>
    </>
 
  )
  return (
    <div className='gpt3__navbar'>
      <div className="gpt3__navbar-links">
        <div className='gpt3__navbar-links-logo'>
          <img src={logo} alt="log" />  
        </div>
        <div className='gpt3__navbar-links-container'>
           <Menu/>
            </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='gpt3__navbar-menu'>
       {toogleMenu?<RiCloseLine  color='#fff' size={27} onClick={()=>setToogleMenu(false)}/>:
        <RiMenu3Line color='#fff' size={27} onClick={()=>setToogleMenu(true)}/>
  }
      {toogleMenu&&<div className='gpt3__navbar-menu-container scale-up-left'>
        <div className='gpt3__navbar-menu-container-links'>
       <Menu/>
       <div className='gpt3__navbar-menu-container-links-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
        </div>
        </div>}
      </div>
    </div>
  )
}
 
export default Navbar