/*
    •--------------------------------•
    |                                |
    |     © 2021 Matthew Perlman     |
    |                                |
    •--------------------------------•
*/

import React from "react"

import "./styles.scss"

import NavBar from "../NavBar/index"
import BottomBar from "../BottomBar/index"

const Page = ({smallText, children}) => {

    return (
        <div className={"bg"}>
            <div className="imageOverlay"></div>
            <NavBar smallText={smallText}/>
            <div className={"content"}>
                {
                    children
                }
                <BottomBar/>
            </div>
        </div>
    )
}

export default Page