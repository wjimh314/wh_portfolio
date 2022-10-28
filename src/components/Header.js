import React from 'react'
 import Typed from 'react-typed'

const Header = () => {
  return (
    <div className='header-wrapper'>
        <div className='main-info'>
            <h1>William J. Hart</h1>
            <h2>Web Developer</h2>
            {<Typed className="typed-text"
            strings={["Javascript", "React","HTML5","css"]}
            typedSpeed={70}
            backSpeed={70}
            loop
            /> }
            <a href="#" className="btn-main-offer">Contact me</a>
        </div>
    </div>
  )
}

export default Header