import PropTypes from "prop-types"
import React from "react"

import * as heroStyle from "./hero.module.scss"
import placeholderForest from '../../images/placeholderForest.jpg'


const Hero = () => (
    <section className={heroStyle.hero}>
        <div className={heroStyle.sectionleft}>
            <h1>Hey There!</h1>
            <p>I'm a Web Developer</p>
        </div>
        <div className={heroStyle.sectionright}>
            <img src={placeholderForest} width="250px" />
        </div>
    </section>
)


export default Hero