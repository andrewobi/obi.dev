import React from "react";

import * as footerStyle from "./footer.module.scss";

import fccprimary from "../../images/fccprimary.svg"
import gitlab1 from "../../images/gitlab1.svg"
import linkedin from "../../images/linkedin.svg"


const FooterSection = () => (
    <footer className={footerStyle.foot}>
        <div className={footerStyle.container}>
            <section>
                <p className={footerStyle.Name}>Andrew Obi</p>
                <p>© {new Date().getFullYear()} All rights are reserved</p>
            </section>
            <section className={footerStyle.socialicons}>
                <a href="https://www.freecodecamp.org/andrewobi"><img src={fccprimary} width="25px"/></a>
                <a href="https://gitlab.com/andrewobi"><img src={gitlab1} width="25px" /></a>
                <a href="https://www.linkedin.com/in/andrewobi1/"><img src={linkedin} width="25px" /></a>
            </section>
        </div>
    </footer>
)

export default FooterSection;