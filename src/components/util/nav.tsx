import React from "react";
import { Link } from 'gatsby';

import * as navStyle from "./nav.module.scss"
import github from "../../images/github.svg"

const Header= () => (
    <header className={navStyle.navbar}>
        <Link to="/">Andrew Obi</Link>
        <nav>
            <a href="#projects">Projects</a> 
            <a href="#templates">Templates</a>
            <a href="https://github.com/andrewobi/"><img src={github} alt="github portfolio" /></a>
        </nav>
    </header>
)

export const ExperimNav = (props) => {
    <header>
        <nav>
            <Link to="/">&larr; Back</Link>
            <a href={props.githubrepo} ><img src={github} /></a>
        </nav>
    </header>
}


export default Header;