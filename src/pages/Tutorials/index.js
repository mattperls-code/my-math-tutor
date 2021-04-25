/*
    •--------------------------------•
    |                                |
    |     © 2021 Matthew Perlman     |
    |                                |
    •--------------------------------•
*/

import React, { useState } from "react"

import "./styles.scss"

import Page from "../../components/Page/index"
import SearchBar from "../../components/SearchBar/index"
import SearchResults from "../../components/SearchResults/index"

import generateSearchResults from "../../scripts/generateSearchResults"

import tutorials from "../../content/tutorials.js"

const TutorialSearch = () => {

    let [searchQuery, setSearchQuery] = useState("")
    let searchResultsJSON = generateSearchResults(searchQuery, tutorials)

    return (
        <Page smallText={
            {
                English: "Tutorials",
                Spanish: "Tutoriales",
                French: "Tutoriels",
                German: "Tutorials"
            }[localStorage.getItem("language")]
        }>
            <h1>
                {
                    {
                        English: "Tutorial Search",
                        Spanish: "Búsqueda de Tutoriales",
                        French: "Recherche de Didacticiel",
                        German: "Tutorial-Suche"
                    }[localStorage.getItem("language")]
                }
            </h1>
            <main className="wrapper">
                <div className="description">
                    {
                        {
                            English: "Find The Perfect Lesson To Learn Some New Math",
                            Spanish: "Encuentre la lección perfecta para aprender algunas matemáticas nuevas",
                            French: "Trouvez la leçon parfaite pour apprendre de nouvelles mathématiques",
                            German: "Finden Sie die perfekte Lektion, um neue Mathematik zu lernen"
                        }[localStorage.getItem("language")]
                    }
                </div>
                <SearchBar placeholder={
                    {
                        English: "Search For A Tutorial",
                        Spanish: "Buscar un Tutorial",
                        French: "Rechercher un Didacticiel",
                        German: "Suche Nach Einem Tutorial"
                    }[localStorage.getItem("language")]
                } onChange={() => {
                    setSearchQuery(document.getElementById("searchBar").value)
                }}/>
                <SearchResults searchResultsJSON={searchResultsJSON} generateSearchResultMeta={({searchResult}) => {
                    const { id, title, description, imageSource, difficulty } = searchResult
                    return { id, title, description, imageSource, difficulty }
                }} hasDifficultyRating hashRoute="Tutorials"/>
            </main>
        </Page>
    )
}

const TutorialPage = () => {
    const tutorialId = window.location.hash.split("?")[1]
    const tutorialInfo = tutorials.find(tutorial => tutorial.id == tutorialId)
    const { title, tutorial} = tutorialInfo
    const { introduction, instructions, problem1, problem2 } = tutorial
    if(typeof tutorialInfo != "object"){
        window.location.hash = "Tutorials"
    } else {
        return (
            <Page smallText={
                {
                    English: "Tutorials",
                    Spanish: "Tutoriales",
                    French: "Tutoriels",
                    German: "Tutorials"
                }[localStorage.getItem("language")]
            }>
                <h1>
                    {
                        title
                    }
                </h1>
                <main className="wrapper tutorialContainer">
                    <div className="introduction">
                        {
                            introduction
                        }
                    </div>
                    <div className="instructions">
                        {
                            instructions
                        }
                    </div>
                    <h2 className="problemsLabel">Practice Problems:</h2>
                    <div className="problemContainer">
                        <div className="problem">
                        {
                                (() => {
                                    // Generate formatted html for the practice problem and solution, by line
                                    const text = []
                                    const [ problemText, problemSolution ] = problem1.split("\n\n")

                                    problemText.split("\n").forEach((textBlock, index) => {
                                        text.push(<strong key={"problem-"+index}>{textBlock}</strong>)
                                        text.push(<br key={"problemBreak-"+index}/>)
                                    })

                                    text.push(<React.Fragment key={"split"}><br/><br/></React.Fragment>)

                                    problemSolution.split("\n").forEach((textBlock, index) => {
                                        text.push(textBlock)
                                        text.push(<br key={"solutionBreak-"+index}/>)
                                    })

                                    // Remove the unnecessary line break at the end
                                    text.pop()

                                    return text
                                })()
                            }
                        </div>
                        <div className="problem">
                            {
                                (() => {
                                    // ! Same formatting as previous problem
                                    const text = []
                                    const [ problemText, problemSolution ] = problem2.split("\n\n")

                                    problemText.split("\n").forEach((textBlock, index) => {
                                        text.push(<strong key={"problem-"+index}>{textBlock}</strong>)
                                        text.push(<br key={"problemBreak-"+index}/>)
                                    })

                                    text.push(<React.Fragment key={"split"}><br/><br/></React.Fragment>)

                                    problemSolution.split("\n").forEach((textBlock, index) => {
                                        text.push(textBlock)
                                        text.push(<br key={"solutionBreak-"+index}/>)
                                    })

                                    text.pop()

                                    return text
                                })()
                            }
                        </div>
                    </div>
                </main>
            </Page>
        )
    }
}

const Tutorials = () => {
    return (
        // If the current url hash contains a query
        //   Display the specific tutorial queried
        //   Otherwise, display the search page
        window.location.hash.includes("?") ?
            <TutorialPage/> : <TutorialSearch/>
    )
}

export default Tutorials