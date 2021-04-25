/*
    •--------------------------------•
    |                                |
    |     © 2021 Matthew Perlman     |
    |                                |
    •--------------------------------•
*/

import React from "react"

import "./styles.scss"

const SearchResults = ({searchResultsJSON, generateSearchResultMeta, hasDifficultyRating, hashRoute}) => {
    return (
        <div className="searchBarListContainer">
            {
                (() => {
                    console.log(searchResultsJSON)
                    if(searchResultsJSON[0].searchResult?.noResults){
                        return (
                            <React.Fragment>
                                <div className={"noResultsFoundWarning"}>
                                    {
                                        {
                                            English: "Sorry, No Results Found",
                                            Spanish: "Lo Sentimos, No Se Han Encontrado Resultados",
                                            French: "Désolé, Aucun Résultat Trouvé",
                                            German: "Entschuldigung, keine Ergebnisse gefunden"
                                        }[localStorage.getItem("language")]
                                    }
                                    <br/>
                                    {
                                        {
                                            English: "Try Searching For Something Else",
                                            Spanish: "Intenta Buscar Algo Más",
                                            French: "Essayez De Rechercher Autre Chose",
                                            German: "Versuchen Sie, Nach Etwas Anderem Zu Suchen"
                                        }[localStorage.getItem("language")]
                                    }
                                </div>
                            </React.Fragment>
                        )
                    }
                    let searchResultElements = []
                    searchResultsJSON.forEach((searchResult, index) => {
                        if(hasDifficultyRating){
                            const { id, title, imageSource, description, difficulty } = generateSearchResultMeta(searchResult)
                            searchResultElements.push(
                                <section className="result" key={index} onClick={() => {
                                    window.location.hash = hashRoute + "?" + id
                                }}>
                                    <h3>
                                        {
                                            title
                                        }
                                    </h3>
                                    <img className="image" src={imageSource} alt={"Preview of "+title}/>
                                    <div className="description">
                                        {
                                            description
                                        }
                                        <br/><br/>
                                        <strong>Difficulty</strong>: {
                                            difficulty
                                        }
                                    </div>
                                </section>
                            )
                        } else {
                            const { id, title, description, imageSource } = generateSearchResultMeta(searchResult)
                            searchResultElements.push(
                                <section className="result" key={index} onClick={() => {
                                    window.location.hash = hashRoute + "?" + id
                                }}>
                                    <h3>
                                        {
                                            title
                                        }
                                    </h3>
                                    <img className="image" src={imageSource} alt={"Preview of "+title}/>
                                    <div className="description">
                                        {
                                            description
                                        }
                                    </div>
                                </section>
                            )
                        }
                    })
                    return searchResultElements
                })()
            }
        </div>
    )
}

export default SearchResults