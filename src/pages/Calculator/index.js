/*
    •--------------------------------•
    |                                |
    |     © 2021 Matthew Perlman     |
    |                                |
    •--------------------------------•
*/

import React, { useState } from "react"

import "./styles.scss"

import { simplify, rationalize, derivative } from "mathjs"
import { parse } from "algebra.js"

import Page from "../../components/Page/index"

const getSolution = () => {
    const solutionType = document.getElementById("solutionType").value

    let questionInput = document.getElementById("question").value.trim()
    if(questionInput[questionInput.length-1] == ";"){
        questionInput = questionInput.slice(0, questionInput.length-1)
    }

    let [problem, scope, target] = ["", {}, ""]

    if(questionInput.split(";").length == 1){
        problem = ""+questionInput
    } else if(questionInput.split(";").length == 2){
        problem = questionInput.split(";")[0]
        if(questionInput.split(";")[1].includes("=")){
            questionInput.split(";")[1].split(",").forEach(variable => {
                if(variable.split("=").length != 2){
                    return {
                        successful: false,
                        error: "Syntax Error: Variables Should Be Assigned Like \"x = 2\" And Should Be Seperated By A Comma"
                    }
                }
                const varName = variable.split("=")[0].trim()
                const varValue = variable.split("=")[1].trim()
                scope[varName] = Number(varValue)
            })
        } else {
            target = questionInput.split(";")[1].trim()
        }
    } else if(questionInput.split(";").length == 3){
        problem = questionInput.split(";")[0]
        if(questionInput.split(";")[1].includes("=")){
            questionInput.split(";")[1].split(",").forEach(variable => {
                if(variable.split("=").length != 2){
                    return {
                        successful: false,
                        error: "Syntax Error: Variables Should Be Assigned Like \"x = 2\" And Should Be Seperated By A Comma"
                    }
                }
                const varName = variable.split("=")[0].trim()
                const varValue = variable.split("=")[1].trim()
                scope[varName] = Number(varValue)
            })
            target = questionInput.split(";")[2].trim()
        } else if(questionInput.split(";")[2].includes("=")) {
            questionInput.split(";")[2].split(",").forEach(variable => {
                if(variable.split("=").length != 2){
                    return {
                        successful: false,
                        error: "Syntax Error: Variables Should Be Assigned Like \"x = 2\" And Should Be Seperated By A Comma"
                    }
                }
                const varName = variable.split("=")[0].trim()
                const varValue = variable.split("=")[1].trim()
                scope[varName] = Number(varValue)
            })
            target = questionInput.split(";")[1].trim()
        } else {
            return {
                successful: false,
                error: "Syntax Error: Expected A Variable To Be Assigned, But None Were"
            }
        }
    } else {
        return {
            successful: false,
            error: "Syntax Error: An Invalid Number Of Parameters Were Given"
        }
    }

    const hasScope = Object.keys(scope).length > 0
    if(solutionType == 
        {
            English: "Evaluate Expression",
            Spanish: "Evaluar Expresión",
            French: "Évaluer l'Expression",
            German: "Ausdruck Auswerten"
        }[localStorage.getItem("language")]
    ){
        if(problem.includes("=")){
            return {
                successful: false,
                error: "Error In Problem: The Problem You Entered Was An Equation Not An Expression"
            }
        }
        if(hasScope){
            return {
                successful: true,
                value: simplify(problem, scope).toString()
            }
        } else {
            return {
                successful: true,
                value: simplify(problem).toString()
            }
        }
    } else if(solutionType == 
        {
            English: "Rationalize",
            Spanish: "Racionalizar",
            French: "Rationaliser",
            German: "Rationalisieren"
        }[localStorage.getItem("language")]
    ){
        if(problem.includes("=")){
            return {
                successful: false,
                error: "Error In Problem: The Problem You Entered Was An Equation Not An Expression"
            }
        }
        if(hasScope){
            return {
                successful: true,
                value: rationalize(problem, scope).toString()
            }
        } else {
            return {
                successful: true,
                value: rationalize(problem).toString()
            }
        }
    } else if(solutionType == 
        {
            English: "Solve For Variable",
            Spanish: "Resolver para Variable",
            French: "Résoudre pour la Variable",
            German: "Nach Variablen lösen"
        }[localStorage.getItem("language")]
    ){
        if(!problem.includes("=")){
            return {
                successful: false,
                error: "Error In Problem: The Problem You Entered Was An Expression Not An Equation"
            }
        }
        if(target.length != 1){
            return {
                successful: false,
                error: "Error In Problem: You Did Not Specify A Valid Variable To Solve For. Specify A Variable By Adding \"; variable\" At The End Of Your Problem"
            }
        }
        // Algebra.js allows For Implicit Multiplication And Variable Scope
        if(hasScope){
            const side1 = simplify(problem.split("=")[0], scope).toString()
            const side2 = simplify(problem.split("=")[1], scope).toString()
            if(!problem.split("=")[0].includes(target) && !problem.split("=")[1].includes(target)){
                return {
                    successful: false,
                    error: "Error In Problem: Variable Not Present In Problem"
                }
            }
            if(side1 == side2){
                return {
                    successful: true,
                    value: "Infinite Solutions"
                }
            }
            try {
                const targetValue = parse(side1 + "=" + side2).solveFor(target)
                if(targetValue == undefined){
                    return {
                        successful: false,
                        error: "Internal Error: Unable To Solve This Equation, Sorry"
                    }
                } else {
                    return {
                        successful: true,
                        value: targetValue.toString()
                    }
                }
            } catch {
                return {
                    successful: true,
                    value: "No Solution"
                }
            }
        } else {
            const side1 = simplify(problem.split("=")[0]).toString()
            const side2 = simplify(problem.split("=")[1]).toString()
            if(!problem.split("=")[0].includes(target) && !problem.split("=")[1].includes(target)){
                return {
                    successful: false,
                    error: "Error In Problem: Variable Not Present In Problem"
                }
            }
            if(side1 == side2){
                return {
                    successful: true,
                    value: "Infinite Solutions"
                }
            }
            try {
                const targetValue = parse(side1 + "=" + side2).solveFor(target)
                if(targetValue == undefined){
                    return {
                        successful: false,
                        error: "Internal Error: Unable To Solve This Equation, Sorry"
                    }
                } else {
                    return {
                        successful: true,
                        value: targetValue.toString()
                    }
                }
            } catch {
                return {
                    successful: true,
                    value: "No Solution"
                }
            }
        }
    } else if(solutionType == 
        {
            English: "Find Derivative",
            Spanish: "Encontrar derivada",
            French: "Rechercher un Dérivé",
            German: "Derivat Finden"
        }[localStorage.getItem("language")]
    ){
        if(problem.includes("=")){
            return {
                successful: false,
                error: "Error In Problem: The Problem You Entered Was An Equation Not An Expression"
            }
        }
        if(target.length == 1){
            return {
                successful: true,
                value: derivative(problem, target, { simplify: true }).toString()
            }
        } else if(problem.includes("x")){
            return {
                successful: true,
                value: derivative(problem, "x", { simplify: true }).toString()
            }
        } else {
            return {
                successful: false,
                error: "Error In Problem: Please Specify The Variable To Calculate The Derivative With Respect To. Specify A Variable By Adding \"; variable\" At The End Of Your Problem"
            }
        }
    } else {
        return {
            successful: false,
            error: "An Internal Error Occcurred, Try Refreshing The Page"
        }
    }
}

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
                            let solution = getSolution()
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