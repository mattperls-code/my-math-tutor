/*
    •--------------------------------•
    |                                |
    |     © 2021 Matthew Perlman     |
    |                                |
    •--------------------------------•
*/

import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"

import "./styles.scss"

const BottomBar = () => {
    return (
        <div className={"bottomBar"}>
            <a href={"mailto:mattperls.code@gmail.com"} target={"_blank"} rel={"noreferrer"} aria-label={"Email"}>
                <FontAwesomeIcon icon={faEnvelope} className={"icon"}/>
            </a>
            <a href={"https://github.com/mattperls-code"} target={"_blank"} rel={"noreferrer"} aria-label={"Github"}>
                <FontAwesomeIcon icon={faGithub} className={"icon"}/>
            </a>
            <a href={"https://www.instagram.com/mattperls.code/"} target={"_blank"} rel={"noreferrer"} aria-label={"Instagram"}>
                <FontAwesomeIcon icon={faInstagram} className={"icon"}/>
            </a>
            <div className={"copyrightNotice"}>&copy; 2021 Matthew Perlman</div>
        </div>
    )
}

export default BottomBar