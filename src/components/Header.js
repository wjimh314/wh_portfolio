import React from 'react'
import Typed from 'react-typed'

const Header = () => {
  return (
    <div className='header-wrapper'>
        <div className='main-info'>
            <h1>William J. Hart</h1>
            <Typed className="typed-text"
            strings={["Javascripts", "React","HTML5","css"]}
            typedSpeed={70}
            backSpeed={70}
            loop
            />
        </div>
    </div>
  )
}

export default Header