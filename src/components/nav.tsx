import React from "react";
import github from "../images/github.svg"

const Navbar = () => (
    <nav>
        <div class="nav-left">
            <a href="#projects">Projects</a> 
            <a href="#templates">Templates</a>
            <a href="https://github.com/andrewobi/"><img src={github} alt="github portfolio" /></a>
        </div>
    </nav>
)


export default Navbar;