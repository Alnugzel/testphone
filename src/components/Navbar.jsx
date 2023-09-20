import React from 'react'
import "./styles/navbar.css"
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Navbar = () => {
  return (
    
    <nav className='navbar'>
        <header className='navbar__header'>
          <button> <SlArrowLeft/></button> <p> <span><img src="./vector/vector1.png" alt="" /></span> 30-DAY SATISFACTION GUARANTEE</p> <button><SlArrowRight/></button>
        </header>
        <section className='navbar__logo'>
            <div className='container__logos'>

            <div className='navbar__logo-clarifon'>
            <img src="./clarifon.png" alt="" />
            </div>
            <div className='navbar__logo-antivirus'>
                <img src="./mcafee.png" alt="" />
                <img src="./norton.png" alt="" />
            </div>
            </div>
        </section>
    </nav>
  )
}

export default Navbar