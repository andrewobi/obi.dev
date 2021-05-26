import {graphql, useStaticQuery} from "gatsby";
import { ImgCard } from "../util/card";
import React from "react";

import * as experimStyles from './experiments.module.scss'

const ExperimSection = () => {




    return <section className={experimStyles.section} id="templates"><ImgCard headerImg="test.jpg" title="Test" text="test summary" /></section>
}

export default ExperimSection