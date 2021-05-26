import {graphql, useStaticQuery} from "gatsby";
import { ImgCard } from "../util/card";
import React from "react";

import * as experimStyles from './experiments.module.scss'

const ExperimSection = () => {




    return <section className={experimStyles.section} id="templates"><h1 className={experimStyles.Title}>Experiments</h1><ImgCard headerImg="test.jpg" title="Test" text="test summary" /></section>
}

export default ExperimSection