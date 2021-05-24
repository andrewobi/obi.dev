import { graphql, useStaticQuery} from "gatsby";
import {ImgCard}from "../util/card";
import React from "react";

import * as projStyles from "./projects.module.scss"

const ProjSection = () => (
    <section className={projStyles.section}>
        <header className={projStyles.Title}>
            <h1>Projects</h1>
        </header>
        <div>
            <ImgCard />
        </div>
        <div>
            <ImgCard />
        </div>
        <div>
            <ImgCard />
        </div>
    </section>
)

export default ProjSection