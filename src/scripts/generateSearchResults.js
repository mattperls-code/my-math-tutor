/*
    •--------------------------------•
    |                                |
    |     © 2021 Matthew Perlman     |
    |                                |
    •--------------------------------•
*/

const generateSearchResults = (searchQuery, allSearchResults) => {
    if(searchQuery == ""){
        const allResults = []
        allSearchResults.forEach(searchResult => {
            // Output expected to be an object, will refactor later
            allResults.push({
                searchResult
            })
        })
        return allResults
    }
    // Get an array of lowercase sanitized keywords from the query
    const queryWords = searchQuery.toLocaleLowerCase().replaceAll("\n", "").replaceAll("\t", "").replaceAll("  ", " ").split(" ")
    const queriedResults = []
    allSearchResults.forEach(searchResult => {
        let queryScore = 0
        searchResult.keywords.forEach(keyword => {
            queryWords.forEach(queryWord => {
                // For each worksheet keyword and query word
                //   If they are a direct match, the queryScore of that worksheet goes up by 1.5
                //   If one contains the other, the queryScore of the worksheet goes up by 1
                if(queryWord != ""){
                    if(keyword == queryWord){
                        queryScore += 1.5
                    } else if(queryWord.includes(keyword) || keyword.includes(queryWord)){
                        queryScore++
                    }
                }
            })
        })
        // If search results is relevent, include it in the output
        if(queryScore > 0){
            queriedResults.push({
                searchResult,
                queryScore
            })
        }
    })
    if(queriedResults.length == 0){
        return [{
            searchResult: {
                noResults: true,
                type: {
                    English: "No Results Found",
                    Spanish: "No Se Han Encontrado Resultados",
                    French: "Aucun Résultat Trouvé",
                    German: "Keine Ergebnisse Gefunden"
                }[localStorage.getItem("language")],
                title: {
                    English: "Search For Something Else",
                    Spanish: "Buscar Algo Más",
                    French: "Rechercher Autre Chose",
                    German: "Suche Nach Etwas Anderem"
                }[localStorage.getItem("language")]
                // TODO: Add Translated Versions
            }
        }]
    }
    // Sort all the results so the ones with the greatest queryScore are shown at the top
    return queriedResults.sort((a, b) => {
        if(a.queryScore >= b.queryScore){
            return -1
        } else {
            return 1
        }
    })
}

export default generateSearchResults