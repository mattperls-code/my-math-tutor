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
                                        <strong>Difficult</strong>: {
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