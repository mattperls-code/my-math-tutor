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

import "./styles.scss"

import tutorials from "../../content/tutorials.js"
import worksheets from "../../content/worksheets.js"

const content = [
    ...tutorials.map(tutorial => {return {type: "Tutorial", ...tutorial}}),
    ...worksheets.map(worksheet => {return {type: "Worksheet", ...worksheet}})
]

const Icon = ({ float, icon, label, page}) => {

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

const getContentFromQuery = (queryString) => {
    const queryWords = queryString.toLocaleLowerCase().replaceAll("\n", "").replaceAll("\t", "").replaceAll("  ", " ").split(" ")
    let queriedTutorials = []
    content.forEach(item => {
        let queryScore = 0
        queryWords.forEach(queryWord => {
            [...item.keywords, item.type.toLowerCase()].forEach(keyword => {
                if(queryWord != ""){
                    if(keyword === queryWord){
                        queryScore += 1.5
                    } else if(queryWord.includes(keyword) || keyword.includes(queryWord)){
                        queryScore++
                    }
                }
            })
        })
        if(queryScore != 0){
            queriedTutorials.push({
                content: item,
                queryScore
            })
        }
    })
    queriedTutorials = queriedTutorials.sort((a, b) => {
        if(a.queryScore >= b.queryScore){
            return -1
        } else {
            return 1
        }
    })
    return queriedTutorials
}

const NavBar = ({ smallText }) => {
    let [windowWidth, setWindowWidth] = useState(window.innerWidth)
    let [windowHeight, setWindowHeight] = useState(window.innerHeight)
    window.addEventListener("resize", () => {
        setWindowWidth(window.innerWidth)
        setWindowHeight(window.innerHeight)
    })

    let [showHamburgerMenu, setShowHamburgerMenu] = useState(false)

    let [searchBarFocused, setSearchBarFocused] = useState(false)
    let [searchQuery, setSearchQuery] = useState("")
    let searchResultsJSON = getContentFromQuery(searchQuery).slice(0, (
        Math.floor((windowHeight-90)/90)
    ))

    document.addEventListener("click", () => {
        setShowHamburgerMenu(false)
        setSearchBarFocused(document.activeElement == document.getElementById("navSearchBar"))
    })

    return (
        <div className={"navBar"}>
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
                                        const searchResultElements = []
                                        searchResultsJSON.forEach((searchResult, index) => {
                                            searchResultElements.push(
                                                <div className={"result"} key={index} onClick={() => {
                                                    window.location.hash = searchResult.content.type + "s?" + searchResult.content.id
                                                }}>
                                                    <strong style={{fontWeight: 900, fontSize: "22px"}}>
                                                        {
                                                            searchResult.content.type+":"
                                                        }
                                                    </strong>
                                                    <div className={"lineBreak"}></div>
                                                    {
                                                        searchResult.content.title
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