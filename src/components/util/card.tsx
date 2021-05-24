import React from "react";
import {Link} from "gatsby";
import * as cardStyles from "./card.module.scss"

const Card = (props) => (
    <article className={cardStyles.cardText}>
        <h2 className={cardStyles.cardTitle}>
            <Link to={`/${props.slink}`} >{props.title}</Link>
        </h2>
        <h3>{props.secondary}</h3>

        <p>{props.text}</p>
    </article>
)

export const ImgCard = (props) => (
    <article className={cardStyles.cardText}>
        <header>
            <img src={props.headerImg} />
        </header>
        <section>
            <h2 className={cardStyles.cardTitle}>{props.title}</h2>

            <p>{props.text}</p>
        </section>

    </article>
)

export default Card;