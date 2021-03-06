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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons"

import domToImage from "dom-to-image"

import worksheets from "../../content/worksheets.js"

const WorksheetSearch = () => {

    let [searchQuery, setSearchQuery] = useState("")
    let searchResultsJSON = generateSearchResults(searchQuery, worksheets)

    return (
        <Page smallText={
            {
                English: "Worksheets",
                Spanish: "Hojas de Trabajo",
                French: "Feuilles de Travail",
                German: "Arbeitsblätter"
            }[localStorage.getItem("language")]
        }>
            <h1>
                {
                    {
                        English: "Worksheet Search",
                        Spanish: "Búsqueda de Hoja de Trabajo",
                        French: "Recherche de Feuille de Travail",
                        German: "Arbeitsblattsuche"
                    }[localStorage.getItem("language")]
                }
            </h1>
            <main className="wrapper">
                <div className="description">
                    {
                        {
                            English: "Find Helpful Worksheets To Practice Your Math Skills",
                            Spanish: "Encuentre hojas de trabajo útiles para practicar sus habilidades matemáticas",
                            French: "Trouvez des feuilles de travail utiles pour mettre en pratique vos compétences en mathématiques",
                            German: "Hier finden Sie hilfreiche Arbeitsblätter zum Üben Ihrer mathematischen Fähigkeiten"
                        }[localStorage.getItem("language")]
                    }
                </div>
                <SearchBar placeholder={
                    {
                        English: "Search For A Worksheet",
                        Spanish: "Buscar una hoja de trabajo",
                        French: "Rechercher une feuille de calcul",
                        German: "Suchen Sie nach einem Arbeitsblatt"
                    }[localStorage.getItem("language")]
                } onChange={() => {
                    setSearchQuery(document.getElementById("searchBar").value)
                }}/>
                <SearchResults searchResultsJSON={searchResultsJSON} generateSearchResultMeta={({searchResult}) => {
                    const { id, title, description, imageSource, difficulty } = searchResult
                    return { id, title, description, imageSource, difficulty }
                }} hasDifficultyRating hashRoute="Worksheets"/>
            </main>
        </Page>
    )
}

const WorksheetPage = () => {
    // Not the cleanest solution, but succesfully represents states for all problems visibility
    const [showSolutions, setShowSolutions] = useState(
        [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false
        ]
    )

    // Get id of current worksheet from url hash
    const worksheetId = window.location.hash.split("?")[1]
    // Get worksheet by id from content
    let worksheetInfo = worksheets.find(worksheet => worksheet.id == worksheetId)
    // If the worksheet wasn't found, default back to worksheets page
    if(typeof worksheetInfo != "object"){
        window.location.hash = "Worksheets"
    } else {
        return (
            <Page smallText={
                {
                    English: "Worksheets",
                    Spanish: "Hojas de Trabajo",
                    French: "Feuilles de Travail",
                    German: "Arbeitsblätter"
                }[localStorage.getItem("language")]
            }>
                <h1>
                    {
                        worksheetInfo.title
                    }
                </h1>
                <main className="wrapper">
                    <div className="description">
                        {
                            // Capitalize each word of the description
                            worksheetInfo.description.split(" ").map(text => text.slice(0,1).toUpperCase() + text.slice(1)).join(" ")
                        }
                    </div>
                    <div className="page">
                        <div className="download" onClick={() => {
                            // Get downloadable html page, domToImage, and automatically download
                            document.getElementById("problems").style.display = "flex"
                            domToImage.toPng(document.getElementById("problems"), {
                                bgcolor: "white"
                            }).then(dataURL => {
                                document.getElementById("problems").style.display = "none"
                                let autoDownloadLink = document.createElement("a")
                                autoDownloadLink.href = dataURL
                                // MyMathTutor-TitleOfWorksheetProblems
                                autoDownloadLink.download = "MyMathTutor-"+worksheetInfo.title.split(" ").map(text => text.slice(0,1).toUpperCase() + text.slice(1)).join("")+"WorksheetProblems.png"
                                document.body.append(autoDownloadLink)
                                autoDownloadLink.click()
                                document.body.removeChild(autoDownloadLink)
                            })
                        }}>
                            <div className="text">Download Worksheet</div>
                            <FontAwesomeIcon className={"button"} icon={faCloudDownloadAlt}/>
                        </div>
                        {
                            (() => {
                                const problemElements = []
                                worksheetInfo.problems.forEach((problem, index) => {
                                    problemElements.push(
                                        <div className="problem" key={index}>
                                            <div className="number">
                                                {
                                                    (index+1) + "."
                                                }
                                            </div>
                                            <div className="text">
                                                {
                                                    (() => {
                                                        // Formatting each problem problem
                                                        let problemText = problem.split(";")[0].replaceAll("*", "•")
                                                        // If the problem contains a fraction, convert that fraction to html
                                                        if(problemText.includes("_")){
                                                            let tempProblemElementChild = []
                                                            let rawFractionText = ""
                                                            let isInsideFracion = false
                                                            // Loop through each character
                                                            //   Find numerator and denominator, and format as html
                                                            for(let i = 0;i<problemText.length;i++){
                                                                if(problemText[i] == "_"){
                                                                    isInsideFracion = !isInsideFracion
                                                                    if(!isInsideFracion){
                                                                        tempProblemElementChild.push(
                                                                            <div className={"fraction"} key={i}>
                                                                                {
                                                                                    rawFractionText.split("/")[0]
                                                                                }
                                                                                <div className="slash"></div>
                                                                                <div className="denominator">
                                                                                    {
                                                                                        rawFractionText.split("/")[1]
                                                                                    }
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                        rawFractionText = ""
                                                                    }
                                                                } else if(isInsideFracion){
                                                                    rawFractionText += problemText[i]
                                                                } else {
                                                                    tempProblemElementChild.push(problemText[i])
                                                                }
                                                            }
                                                            problemText = tempProblemElementChild
                                                        }
                                                        return problemText
                                                    })()
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                                return problemElements
                            })()
                        }
                    </div>
                    <div className="page">
                        <div className="download" onClick={() => {
                            // ! Same download process as before
                            document.getElementById("solutions").style.display = "flex"
                            domToImage.toPng(document.getElementById("solutions"), {
                                bgcolor: "white"
                            }).then(dataURL => {
                                document.getElementById("solutions").style.display = "none"
                                let autoDownloadLink = document.createElement("a")
                                autoDownloadLink.href = dataURL
                                autoDownloadLink.download = "MyMathTutor-"+worksheetInfo.title.split(" ").map(text => text.slice(0,1).toUpperCase() + text.slice(1)).join("")+"WorksheetSolutions.png"
                                document.body.append(autoDownloadLink)
                                autoDownloadLink.click()
                                document.body.removeChild(autoDownloadLink)
                            })
                        }}>
                            <div className="text">Download Solutions</div>
                            <FontAwesomeIcon className={"button"} icon={faCloudDownloadAlt}/>
                        </div>
                        {
                            (() => {
                                const solutionElements = []
                                worksheetInfo.problems.forEach((problem, index) => {
                                    solutionElements.push(
                                        <div className="problem" key={index}>
                                            <div className="number">
                                                {
                                                    (index+1) + "."
                                                }
                                            </div>
                                            {
                                                // Toggle show solution button
                                                !showSolutions[index] &&
                                                    (
                                                        <div className="revealSolutionButton" onClick={() => {
                                                            let tempShowSolutions = [...showSolutions]
                                                            tempShowSolutions[index] = true
                                                            setShowSolutions(tempShowSolutions)
                                                        }}>Show<br/>Solution</div>
                                                    )
                                            }
                                            <div className={showSolutions[index] ? "text" : "text blur"}>
                                                {
                                                    // If the solution is not visible, blur it
                                                    (() => {
                                                        const solutions = [];
                                                        var solutionSet = problem.split(";")[1].slice(2, -1).split(" | ")
                                                        solutionSet.forEach(solution => {
                                                            // ! Same fraction to html code as before
                                                            if(solution.includes("_")){
                                                                let tempSolutionElementChild = []
                                                                let rawFractionText = ""
                                                                let isInsideFracion = false
                                                                for(let i = 0;i<solution.length;i++){
                                                                    if(solution[i] == "_"){
                                                                        isInsideFracion = !isInsideFracion
                                                                        if(!isInsideFracion){
                                                                            tempSolutionElementChild.push(
                                                                                <div className={"fraction"} key={i}>
                                                                                    {
                                                                                        rawFractionText.split("/")[0]
                                                                                    }
                                                                                    <div className="slash"></div>
                                                                                    <div className="denominator">
                                                                                        {
                                                                                            rawFractionText.split("/")[1]
                                                                                        }
                                                                                    </div>
                                                                                </div>
                                                                            )
                                                                            rawFractionText = ""
                                                                        }
                                                                    } else if(isInsideFracion){
                                                                        rawFractionText += solution[i]
                                                                    } else {
                                                                        tempSolutionElementChild.push(<React.Fragment key={i}>{solution[i]}</React.Fragment>)
                                                                    }
                                                                }
                                                                solutions.push(tempSolutionElementChild)
                                                            } else {
                                                                solutions.push(solution)
                                                            }
                                                        })
                                                        const solutionElements = []
                                                        // For multiple solutions, format with a break between each
                                                        for(let i = 0;i<solutions.length-1;i++){
                                                            solutionElements.push(solutions[i])
                                                            solutionElements.push(
                                                                <React.Fragment key={i}>
                                                                    <br/>
                                                                    Or
                                                                    <br/>
                                                                </React.Fragment>
                                                            )
                                                        }
                                                        solutionElements.push(solutions[solutions.length-1])
                                                        return <React.Fragment key={index}>{solutionElements}</React.Fragment>
                                                    })()
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                                return solutionElements
                            })()
                        }
                    </div>
                    <div className="downloadablePage" id="problems" style={{display: "none"}}>
                        {
                            (() => {
                                const problemElements = []
                                worksheetInfo.problems.forEach((problem, index) => {
                                    problemElements.push(
                                        <div className="problem" key={index}>
                                            <div className="number">
                                                {
                                                    (index+1) + "."
                                                }
                                            </div>
                                            <div className="text">
                                                {
                                                    (() => {
                                                        // ! Same as before
                                                        let problemText = problem.split(";")[0].replaceAll("*", "•")
                                                        if(problemText.includes("_")){
                                                            let tempProblemElementChild = []
                                                            let rawFractionText = ""
                                                            let isInsideFracion = false
                                                            for(let i = 0;i<problemText.length;i++){
                                                                if(problemText[i] == "_"){
                                                                    isInsideFracion = !isInsideFracion
                                                                    if(!isInsideFracion){
                                                                        tempProblemElementChild.push(
                                                                            <div className={"fraction"} key={i}>
                                                                                {
                                                                                    rawFractionText.split("/")[0]
                                                                                }
                                                                                <div className="slash"></div>
                                                                                <div className="denominator">
                                                                                    {
                                                                                        rawFractionText.split("/")[1]
                                                                                    }
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                        rawFractionText = ""
                                                                    }
                                                                } else if(isInsideFracion){
                                                                    rawFractionText += problemText[i]
                                                                } else {
                                                                    tempProblemElementChild.push(problemText[i])
                                                                }
                                                            }
                                                            problemText = tempProblemElementChild
                                                        }
                                                        return problemText
                                                    })()
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                                return problemElements
                            })()
                        }
                    </div>
                    <div className="downloadablePage" id="solutions" style={{display: "none"}}>
                        {
                            (() => {
                                const solutionElements = []
                                worksheetInfo.problems.forEach((problem, index) => {
                                    solutionElements.push(
                                        <div className="problem" key={index}>
                                            <div className="number">
                                                {
                                                    (index+1) + "."
                                                }
                                            </div>
                                            <div className="text">
                                                {
                                                    (() => {
                                                        const solutions = [];
                                                        var solutionSet = problem.split(";")[1].slice(2, -1).split(" | ")
                                                        solutionSet.forEach(solution => {
                                                            // ! Same as before
                                                            if(solution.includes("_")){
                                                                let tempSolutionElementChild = []
                                                                let rawFractionText = ""
                                                                let isInsideFracion = false
                                                                for(let i = 0;i<solution.length;i++){
                                                                    if(solution[i] == "_"){
                                                                        isInsideFracion = !isInsideFracion
                                                                        if(!isInsideFracion){
                                                                            tempSolutionElementChild.push(
                                                                                <div className={"fraction"} key={i}>
                                                                                    {
                                                                                        rawFractionText.split("/")[0]
                                                                                    }
                                                                                    <div className="slash"></div>
                                                                                    <div className="denominator">
                                                                                        {
                                                                                            rawFractionText.split("/")[1]
                                                                                        }
                                                                                    </div>
                                                                                </div>
                                                                            )
                                                                            rawFractionText = ""
                                                                        }
                                                                    } else if(isInsideFracion){
                                                                        rawFractionText += solution[i]
                                                                    } else {
                                                                        tempSolutionElementChild.push(<React.Fragment key={i}>{solution[i]}</React.Fragment>)
                                                                    }
                                                                }
                                                                solutions.push(tempSolutionElementChild)
                                                            } else {
                                                                solutions.push(solution)
                                                            }
                                                        })
                                                        const solutionElements = []
                                                        for(let i = 0;i<solutions.length-1;i++){
                                                            solutionElements.push(solutions[i])
                                                            solutionElements.push(
                                                                <React.Fragment key={i}>
                                                                    <br/><br/>
                                                                    Or
                                                                    <br/>
                                                                </React.Fragment>
                                                            )
                                                        }
                                                        solutionElements.push(solutions[solutions.length-1])
                                                        return <React.Fragment key={index}>{solutionElements}</React.Fragment>
                                                    })()
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                                return solutionElements
                            })()
                        }
                    </div>
                </main>
            </Page>
        )
    }
}


const Worksheets = () => {
    return (
        // If the current url hash contains a query
        //   Display the specific worksheet queried
        //   Otherwise, display the search page
        window.location.hash.includes("?") ?
            <WorksheetPage/> : <WorksheetSearch/>
    )
}

export default Worksheets