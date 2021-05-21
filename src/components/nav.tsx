import React from "react";
import github from "../images/github.svg"

const Header= () => (
    <header>
        <nav>
            <a href="#projects">Projects</a> 
            <a href="#templates">Templates</a>
            <a href="https://github.com/andrewobi/"><img src={github} alt="github portfolio" /></a>
        </nav>
    </header>
)


export default Header;