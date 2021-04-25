/*
    •--------------------------------•
    |                                |
    |     © 2021 Matthew Perlman     |
    |                                |
    •--------------------------------•
*/

import React, { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faHome, faChalkboardTeacher, faBrain, faCalculator, faInfoCircle } from "@fortawesome/free-solid-svg-icons"

import generateSearchResults from "../../scripts/generateSearchResults"

import "./styles.scss"

import tutorials from "../../content/tutorials.js"
import worksheets from "../../content/worksheets.js"

// Since the nav search bar can find worksheets and tutorials, group them and specify which type each is
const content = [
    ...tutorials.map(tutorial => {return {type: "Tutorial", ...tutorial}}),
    ...worksheets.map(worksheet => {return {type: "Worksheet", ...worksheet}})
]

const Icon = ({ float, icon, label, page}) => {
    
    // Hoverable icon
    // ! Create a subcomponent for this to help with organization
    // ! Make "NavBar/Icon/<componentAndStyles>"

    let [ showLabel, setShowLabel ] = useState(false)

    return (
        <div className={"navIconContainer"} style={{float}}>
            <FontAwesomeIcon icon={icon} className={"icon"} onClick={() => {
                if(page != null){
                    window.location.hash = page
                    window.location.reload()
                }
            }} onMouseEnter={() => {
                setShowLabel(true)
            }} onMouseLeave={() => {
                setShowLabel(false)
            }}/>
            {
                label != null ?
                    (
                        <div className={"label"} style={{opacity: +showLabel }}>
                            <span>
                                {
                                    label
                                }
                            </span>
                        </div>
                    ) :
                    null
            }
        </div>
    )
}

const NavBar = ({ smallText }) => {
    // Allows for dynamic resizing of the window to not affect responsiveness
    let [windowWidth, setWindowWidth] = useState(window.innerWidth)
    let [windowHeight, setWindowHeight] = useState(window.innerHeight)
    window.addEventListener("resize", () => {
        setWindowWidth(window.innerWidth)
        setWindowHeight(window.innerHeight)
    })

    let [showHamburgerMenu, setShowHamburgerMenu] = useState(false)

    let [searchBarFocused, setSearchBarFocused] = useState(false)
    let [searchQuery, setSearchQuery] = useState("")

    // Makes the search output not excede the height of the screen
    let searchResultsJSON = generateSearchResults(searchQuery, content).slice(0, (
        Math.floor((windowHeight-90)/90)
    ))

    document.addEventListener("click", () => {
        setShowHamburgerMenu(false)
        // If the nav search bar is focused, show the results
        setSearchBarFocused(document.activeElement == document.getElementById("navSearchBar"))
    })

    return (
        <div className={"navBar"}>
            {
                // If the window width is less than 550
                //   Show the hamburger navigation and small title
                // TODO: Conditionally render, don't change display
            }
            <div style={{display: windowWidth < 550 ? "inline" : "none"}}>
                <div onClick={(e) => {
                    e.stopPropagation()
                    document.body.click()
                    setShowHamburgerMenu(!showHamburgerMenu)
                }}>
                    <FontAwesomeIcon icon={faBars} className={"hamburgerMenuIcon"}/>
                </div>
                <div className={showHamburgerMenu ? "hamburgerMenu show" : "hamburgerMenu hide"} onClick={(e) => {
                    e.stopPropagation()
                }}>
                    <div className={"option"} onClick={() => {
                        window.location.hash = "Main"
                        window.location.reload()
                    }}>
                        {
                            {
                                English: "Main",
                                Spanish: "Principal",
                                French: "Principal",
                                German: "Main"
                            }[localStorage.getItem("language")]
                        }
                    </div>
                    <div className={"option"} onClick={() => {
                        window.location.hash = "Tutorials"
                        window.location.reload()
                    }}>
                        {
                            {
                                English: "Tutorials",
                                Spanish: "Tutoriales",
                                French: "Tutoriels",
                                German: "Tutorials"
                            }[localStorage.getItem("language")]
                        }
                    </div>
                    <div className={"option"} onClick={() => {
                        window.location.hash = "Worksheets"
                        window.location.reload()
                    }}>
                        {
                            {
                                English: "Worksheets",
                                Spanish: "Hojas de Trabajo",
                                French: "Feuilles de Travail",
                                German: "Arbeitsblätter"
                            }[localStorage.getItem("language")]
                        }
                    </div>
                    <div className={"option"} onClick={() => {
                        window.location.hash = "Calculator"
                        window.location.reload()
                    }}>
                        {
                            {
                                English: "Calculator",
                                Spanish: "Calculadora",
                                French: "Calculatrice",
                                German: "Taschenrechner"
                            }[localStorage.getItem("language")]
                        }
                    </div>
                    <div className={"option"} onClick={() => {
                        window.location.hash = "About"
                        window.location.reload()
                    }}>
                        {
                            {
                                English: "About",
                                Spanish: "Acerca de",
                                French: "Sur",
                                German: "Information"
                            }[localStorage.getItem("language")]
                        }
                    </div>
                </div>
                <div className={"smallText"}>
                    <span>
                        {
                            smallText
                        }
                    </span>
                </div>
            </div>
            {
                // If the window width is greater than or equal to 550
                //   Show hoverable icon navigation
                // TODO: Conditionally render, don't change display
            }
            <div style={{display: windowWidth < 550 ? "none" : "inline"}}>
                <Icon float={"left"} icon={faHome} label={
                    {
                        English: "Main",
                        Spanish: "Principal",
                        French: "Principal",
                        German: "Main"
                    }[localStorage.getItem("language")]
                } page={"Main"}/>
                <Icon float={"left"} icon={faChalkboardTeacher} label={
                    {
                        English: "Tutorials",
                        Spanish: "Tutoriales",
                        French: "Tutoriels",
                        German: "Tutorials"
                    }[localStorage.getItem("language")]
                } page={"Tutorials"}/>
                <Icon float={"left"} icon={faBrain} label={
                    {
                        English: "Worksheets",
                        Spanish: "Hojas de Trabajo",
                        French: "Feuilles de Travail",
                        German: "Arbeitsblätter"
                    }[localStorage.getItem("language")]
                } page={"Worksheets"}/>
                <Icon float={"left"} icon={faCalculator} label={
                    {
                        English: "Calculator",
                        Spanish: "Calculadora",
                        French: "Calculatrice",
                        German: "Taschenrechner"
                    }[localStorage.getItem("language")]
                } page={"Calculator"}/>
                <Icon  float={"left"} icon={faInfoCircle} label={
                    {
                        English: "About",
                        Spanish: "Acerca de",
                        French: "Sur",
                        German: "Information"
                    }[localStorage.getItem("language")]
                } page={"About"}/>
                {
                    // If the window width is greater than 825
                    //   Show the nav search bar
                    // TODO: Conditionally render, don't change display
                }
                <div style={{display: windowWidth > 825 ? "inline" : "none"}}>
                    <div className={"searchBarContainer"}>
                        <input id={"navSearchBar"} className={"searchBarInput"} type={"text"} placeholder={
                        {
                            English: "🔎 Cool Math Topic",
                            Spanish: "🔎 Tema de Matemáticas Genial",
                            French: "🔎 Sujet Mathématique Sympa",
                            German: "🔎 Cooles Mathe-Thema"
                        }[localStorage.getItem("language")]
                    } value={searchQuery} onChange={() => {
                            setSearchQuery(document.getElementById("navSearchBar").value)
                        }}/>
                        <div className={searchResultsJSON.length > 0 && searchBarFocused ? "searchResultsContainer show" : "searchResultsContainer hide"}>
                            <div className={"searchResults"}>
                                {
                                    (() => {
                                        // Don't automatically fill results
                                        if(searchQuery == ""){
                                            return []
                                        }
                                        // Format the search results as html
                                        const searchResultElements = []
                                        searchResultsJSON.forEach(({searchResult}, index) => {
                                            searchResultElements.push(
                                                <div className={"result"} key={index} onClick={() => {
                                                    window.location.hash = searchResult.type + "s?" + searchResult.id
                                                }}>
                                                    <strong style={{fontWeight: 900, fontSize: "22px"}}>
                                                        {
                                                            searchResult.type + (searchResult?.noResults ? "" : ":")
                                                        }
                                                    </strong>
                                                    <div className={"lineBreak"}></div>
                                                    {
                                                        searchResult.title
                                                    }
                                                </div>
                                            )
                                        })
                                        return searchResultElements
                                    })()
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar