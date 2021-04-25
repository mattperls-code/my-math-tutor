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
import calculateOutput from "../../scripts/calculatorOutput"

const Calculator = () => {

    // ! TODO: Add Translation Support For Output Warnings/Errors

    let [solutionElement, setSolutionElement] = useState(null)

    return (
        <Page smallText={
            {
                English: "Calculator",
                Spanish: "Calculadora",
                French: "Calculatrice",
                German: "Taschenrechner"
            }[localStorage.getItem("language")]
        }>
            <h1>
                {
                    {
                        English: "Calculator",
                        Spanish: "Calculadora",
                        French: "Calculatrice",
                        German: "Taschenrechner"
                    }[localStorage.getItem("language")]
                }
            </h1>
            <main className="wrapper">
                <div className="description">
                    {
                        {
                            English: "Solve Problems From Numerics To Complex Algebra",
                            Spanish: "Resolver Problemas desde Numéricos Hasta Álgebra Compleja",
                            French: "Résoudre les Problèmes des Nombres à l'Algèbre Complexe",
                            German: "Lösen Sie Probleme von der Numerik bis zur Komplexen Algebra"
                        }[localStorage.getItem("language")]
                    }
                </div>
                <div className="calculator">
                    <div className="absoluteWrapper">
                        <input className="inputBar" id="question" placeholder={
                            {
                                English: "Enter A Math Problem",
                                Spanish: "Introduzca un Problema de Matemáticas",
                                French: "Entrez un Problème Mathématique",
                                German: "Geben Sie ein Mathematisches Problem ein"
                            }[localStorage.getItem("language")]
                        }/>
                        <select className="solutionTypeSelector" id="solutionType">
                            <option>
                                {
                                    {
                                        English: "Please Select A Solution Type",
                                        Spanish: "Seleccione un Tipo de Solución",
                                        French: "Veuillez Sélectionner un Type de Solution",
                                        German: "Bitte Wählen Sie einen Lösungstyp"
                                    }[localStorage.getItem("language")]
                                }
                            </option>
                            <option>
                                {
                                    {
                                        English: "Evaluate Expression",
                                        Spanish: "Evaluar Expresión",
                                        French: "Évaluer l'Expression",
                                        German: "Ausdruck Auswerten"
                                    }[localStorage.getItem("language")]
                                }
                            </option>
                            <option>
                                {
                                    {
                                        English: "Rationalize",
                                        Spanish: "Racionalizar",
                                        French: "Rationaliser",
                                        German: "Rationalisieren"
                                    }[localStorage.getItem("language")]
                                }
                            </option>
                            <option>
                                {
                                    {
                                        English: "Solve For Variable",
                                        Spanish: "Resolver para Variable",
                                        French: "Résoudre pour la Variable",
                                        German: "Nach Variablen lösen"
                                    }[localStorage.getItem("language")]
                                }
                            </option>
                            <option>
                                {
                                    {
                                        English: "Find Derivative",
                                        Spanish: "Encontrar derivada",
                                        French: "Rechercher un Dérivé",
                                        German: "Derivat Finden"
                                    }[localStorage.getItem("language")]
                                }
                            </option>
                        </select>
                        <div className="solveButton" onClick={() => {
                            if(document.getElementById("solutionType").value == 
                                {
                                    English: "Please Select A Solution Type",
                                    Spanish: "Seleccione un Tipo de Solución",
                                    French: "Veuillez Sélectionner un Type de Solution",
                                    German: "Bitte Wählen Sie einen Lösungstyp"
                                }[localStorage.getItem("language")]
                            ){
                                alert("Please Select A Solution Type")
                                return
                            }
                            let solution = calculateOutput()
                            if(solution.successful){
                                solution.value = solution.value.replaceAll("*", "•").replaceAll(",", ", ")
                                if(solution.value == "1" && document.getElementById("solutionType").value == 
                                    {
                                        English: "Evaluate Expression",
                                        Spanish: "Evaluar Expresión",
                                        French: "Évaluer l'Expression",
                                        German: "Ausdruck Auswerten"
                                    }[localStorage.getItem("language")]
                                ){
                                    setSolutionElement(
                                        <React.Fragment>
                                            <div className="text">Solution:<br/><strong>{solution.value}</strong></div>
                                            <div className="warning">We Recommend You Check To Make Sure There Are Not Infinite Solutions</div>
                                        </React.Fragment>
                                    )
                                } else if(solution.value == "No Solution"){
                                    setSolutionElement(
                                        <React.Fragment>
                                            <div className="text">Solution: <strong>{solution.value}</strong></div>
                                            <div className="warning">We Recommend That You Check This Answer, It May Be Wrong</div>
                                        </React.Fragment>
                                    )
                                } else if(solution.value == ""){
                                    setSolutionElement(
                                        <div className="text">Solution: <strong>No Real Solutions</strong></div>
                                    )
                                } else {
                                    setSolutionElement(
                                        <div className="text">Solution: <strong>{solution.value}</strong></div>
                                    )
                                }
                            } else {
                                setSolutionElement(
                                    <div className="error">
                                        {
                                            solution.error
                                        }
                                    </div>
                                )
                            }
                        }}>
                            <span>
                                {
                                    {
                                        English: "Go",
                                        Spanish: "Vamos",
                                        French: "Aller",
                                        German: "Gehen"
                                    }[localStorage.getItem("language")]
                                }
                            </span>
                        </div>
                    </div>
                </div>
                <div className="solution">
                    {
                        solutionElement
                    }
                </div>
            </main>
        </Page>
    )
}

export default Calculator