import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/GA_02_-83.jpg'

import './Header.css'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <div className="test">
                        <a href="#" className="image avatar"><img src={avatar} alt="Roger Campbell II" /></a>
                        <h1>Roger Campbell II </h1>
                        <h1>Software Engineer</h1>
                        <p>Washington DC</p>
                    </div>
                    {/* <br />
                    <h1>Software Engineer</h1> */}
                    {/* <h1><strong>I am Roger Campbell</strong>, a mission driven Software Engineer equipped with the insight to thrive under pressure and tackle complex problems.
                    </h1>

                    <br />

                    <p> <strong>JavaScript | React.js | React Native | Python | Django <br /> Express | MongoDB | Mongoose | Node |  PostgresSQL </strong></p> */}
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
