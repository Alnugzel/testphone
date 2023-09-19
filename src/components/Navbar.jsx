import React from 'react'
import "./styles/navbar.css"

const Navbar = () => {
  return (
    
    <nav className='navbar'>
        <header className='navbar__header'>
          <button><img src="./vector/prev.png" alt="" /></button> <p> <span><img src="./vector/vector1.png" alt="" /></span> 30-DAY SATISFACTION GUARANTEE</p> <button><img src="./vector/next.png" alt="" /></button>
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