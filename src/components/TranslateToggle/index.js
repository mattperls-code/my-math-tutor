/*
    •--------------------------------•
    |                                |
    |     © 2021 Matthew Perlman     |
    |                                |
    •--------------------------------•
*/

import React, { useState, useRef, useLayoutEffect } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLanguage } from "@fortawesome/free-solid-svg-icons"

import "./styles.scss"

const TranslateToggle = () => {

    let [ showTranslateSelector, setTranslateSelector ] = useState(false)
    let [ buttonBottom, setButtonBottom ] = useState(window.innerHeight - 15)
    let buttonRef = useRef(null)
    useLayoutEffect(() => {
        document.getElementsByClassName("content")[0].addEventListener("scroll", () => {
            setButtonBottom(Math.max(window.innerHeight-document.getElementsByClassName("bottomBar")[0].getBoundingClientRect().top,0))
        })
        setButtonBottom(Math.max(window.innerHeight-document.getElementsByClassName("bottomBar")[0].getBoundingClientRect().top,0))
    }, [])

    document.addEventListener("click", () => {
        setTranslateSelector(false)
    })

    if(!["English", "Spanish", "French", "German"].includes(localStorage.getItem("language"))){
        localStorage.setItem("language", "English")
        window.location.reload()
    }

    return (
        <React.Fragment>
            <div ref={buttonRef} className={"translateToggleButton"} style={{
                borderTopRightRadius: 5-showTranslateSelector*5,
                bottom: buttonBottom+15+"px"
            }} onClick={(e) => {
                e.stopPropagation()
                document.body.click()
                setTranslateSelector(!showTranslateSelector)
            }}>
                <FontAwesomeIcon icon={faLanguage} className={"icon"}/>
            </div>
            <div className={showTranslateSelector ? "translateOptions show" : "translateOptions hide"} onClick={(e) => {
                e.stopPropagation()
            }} style={{
                bottom: buttonBottom+50+"px"
            }}>
                {
                    (() => {
                        const translateOptions = [
                            {
                                label: "English",
                                key: "English"
                            },
                            {
                                label: "Español",
                                key: "Spanish"
                            },
                            {
                                label: "Français",
                                key: "French"
                            },
                            {
                                label: "Deutsche",
                                key: "German"
                            }
                        ]
                        let translateOptionElements = []
                        translateOptions.forEach(translateOption => {
                            translateOptionElements.push(
                                <div className={"option"} key={translateOption.key}>
                                    <div className={"text"} onClick={(e) => {
                                        e.stopPropagation()
                                        if(localStorage.getItem("language") != translateOption.key){
                                            localStorage.setItem("language", translateOption.key)
                                            window.location.reload()
                                        }
                                        setTranslateSelector(false)
                                    }}>
                                        {
                                            translateOption.label
                                        }
                                    </div>
                                </div>
                            )
                        })
                        return translateOptionElements
                    })()
                }
            </div>
        </React.Fragment>
    )
}

export default TranslateToggle