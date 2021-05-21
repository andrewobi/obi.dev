import React from "react";
import {Link} from "gatsby";

const Card = (props) => (
    <article>
        <h2>
            <Link to={`/$ {props.slink} `} >{props.title}</Link>
        </h2>
        <h3>{props.secondary}</h3>

        <p>{props.text}</p>
    </article>
)

export default Card;