/*
    •--------------------------------•
    |                                |
    |     © 2021 Matthew Perlman     |
    |                                |
    •--------------------------------•
*/

import React from "react"

import "./universalStyles.scss"

import TranslateToggle from "./components/TranslateToggle/index"

import Main from "./pages/Main/index"
import Tutorials from "./pages/Tutorials/index"
import Worksheets from "./pages/Worksheets/index"
import Calculator from "./pages/Calculator/index"
import About from "./pages/About/index"

const App = () => {

    const pages = {
        Main,
        Tutorials,
        Worksheets,
        Calculator,
        About
    }

    // If the hash of the current page is not a valid one, default to main and reload
    const page = window.location.hash.split("?")[0].slice(1)
    if(!pages.hasOwnProperty(page)){
        window.location.hash = "Main"
        window.location.reload()
    }

    window.addEventListener("hashchange", () => {
        window.location.reload()
    })

    document.title = "My Math Tutor - "+page

    // Return the current page
    return (
        <React.Fragment>
            {
                (() => {
                    return pages[page]()
                })()
            }
            <TranslateToggle/>
        </React.Fragment>
    )
    
}

export default App