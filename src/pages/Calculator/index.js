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

    const solve = () => {
        if(document.getElementById("question").value.trim() == ""){
            setSolutionElement(null)
            return
        }
        let solution = calculateOutput(document.getElementById("question").value)
        if(solution === false){
            setSolutionElement(null)
        } else {
            setSolutionElement(solution)
        }
    }

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
                        } onKeyUp={(e) => {
                            if(e.key == "Enter"){
                                solve()
                            }
                        }}/>
                        <div className="solveButton" onClick={solve}>
                            <div className="goText">
                                {
                                    {
                                        English: "Go",
                                        Spanish: "Vamos",
                                        French: "Aller",
                                        German: "Gehen"
                                    }[localStorage.getItem("language")]
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="solution">
                    {
                        (() => {
                            if(solutionElement == null){
                                return
                            } else if(solutionElement.successful){
                                return <div className="text">{ solutionElement.output.replaceAll(",", ", ") }</div>
                            } else {
                                return <div className="error">{ solutionElement.output }</div>
                            }
                        })()
                    }
                </div>
            </main>
        </Page>
    )
}

export default Calculator