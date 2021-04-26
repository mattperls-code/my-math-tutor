/*
    •--------------------------------•
    |                                |
    |     © 2021 Matthew Perlman     |
    |                                |
    •--------------------------------•
*/

import { parse } from "algebra.js"

const calculateOutput = (problem) => {
    try {
        for(let i = 0;i<problem.length;i++){
            // Make sure all input is valid
            if(!"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+-*/=^.()[] ".includes(problem[i])){
                return {
                    successful: false,
                    output: `Problem Contains Illegal Character "${problem[i]}"`
                }
            }
        }
        if(problem.includes("=")){
            let activeVariables = []
            for(let i = 0;i<problem.length;i++){
                if("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(problem[i]) && !activeVariables.includes(problem[i])){
                    activeVariables.push(problem[i])
                }
            }
            let previousPrompt = false
            let targetVar = activeVariables.length == 1 ? activeVariables[0] : false
            // As long as it is not defined, keep asking
            while(targetVar === false){
                let variable = prompt(previousPrompt ? "The Variable You Entered Was Not Valid. Please Try Again" : "Please Enter The Variable You Want To Solve For")
                previousPrompt = true
                if(activeVariables.includes(variable)){
                    targetVar = variable
                } else if(variable == ""){
                    // Makes loop user breakable
                    return false;
                }
            }
            const solution = parse(problem)
            if(solution == undefined){
                return {
                    successful: false,
                    output: "Unable To Find Solution. This May Mean The Problem Has No Real Solutions Or That There Is No Definite Answer"
                }
            } else {
                const variableValue = solution.solveFor(targetVar)
                if(variableValue == undefined || (Array.isArray(variableValue) && variableValue.length == 0)){
                    return {
                        successful: false,
                        output: "Unable To Find Solution. This May Mean The Problem Has No Real Solutions Or That There Is No Definite Answer"
                    }
                }
                return {
                    successful: true,
                    output: variableValue.toString()
                }
            }
            
        } else if(problem.includes("<") || problem.includes(">") || problem.includes("≤") || problem.includes("≥")){
            alert("Sorry, We Don't Currently Support Inequalities. Hopefully We Will In The Future.")
            return false
        } else {
            const solution = parse(problem)
            if(solution == undefined || (Array.isArray(solution) && solution.length == 0)){
                return {
                    successful: false,
                    output: "Unable To Find Solution. This May Mean The Problem Has No Real Solutions Or That There Is No Definite Answer"
                }
            } else {
                return {
                    successful: true,
                    output: solution.toString()
                }
            }
        }
    } catch(error) {
        return {
            successful: false,
            output: "Unable To Solve. This May Be An Internal Error"
        }
    }
}

export default calculateOutput