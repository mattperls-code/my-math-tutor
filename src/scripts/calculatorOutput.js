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
            if(!"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+-*/=^.()[]<>≤≥ ".includes(problem[i])){
                return {
                    successful: false,
                    output: {
                        English: `Problem Contains Illegal Character "${problem[i]}"`,
                        Spanish: `El Problema Contiene Carácter Ilegal "${problem[i]}"`,
                        French: `Le Problème Contient Un Caractère Illégal "${problem[i]}"`,
                        German: `Problem Enthält Illegalen Charakter "${problem[i]}"`
                    }[localStorage.getItem("language")]
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
                let variable = prompt(previousPrompt ? 
                    {
                        English: "The Variable You Entered Was Not Valid. Please Try Again",
                        Spanish: "La Variable Que Ingresó No Era Válida. Inténtalo De Nuevo",
                        French: "La Variable Que Vous Avez Saisie n'était Pas Valide. Veuillez Réessayer",
                        German: "Die Eingegebene Variable War Ungültig. Bitte Versuche Es Erneut"
                    }[localStorage.getItem("language")] : 
                    {
                        English: "Please Enter The Variable You Want To Solve For",
                        Spanish: "Ingrese La Variable Que Desea Resolver",
                        French: "Veuillez Saisir La Variable Pour Laquelle Vous Souhaitez Résoudre",
                        German: "Bitte Geben Sie Die Variable Ein, Nach Der Sie Lösen Möchten"
                    }[localStorage.getItem("language")]
                )
                previousPrompt = true
                if(activeVariables.includes(variable)){
                    targetVar = variable
                } else if(variable.trim() == ""){
                    // Makes loop user breakable
                    return false;
                }
            }
            const solution = parse(problem)
            if(solution == undefined){
                return {
                    successful: false,
                    output: {
                        English: "Unable To Find Solution. This May Mean The Problem Has No Real Solutions Or That There Is No Definite Answer",
                        Spanish: "No Se Pudo Encontrar Una Solución. Esto Puede Significar Que El Problema No Tiene Soluciones Reales O Que No Hay Una Respuesta Definitiva",
                        French: "Impossible De Trouver La Solution. Cela Peut Signifier Que Le Problème N'a Pas De Vraies Solutions Ou Qu'il N'y A Pas De Réponse Définitive",
                        German: "Lösung Kann Nicht Gefunden Werden. Dies Kann Bedeuten, Dass Das Problem Keine Wirklichen Lösungen Hat Oder Dass Es Keine Eindeutige Antwort Gibt"
                    }[localStorage.getItem("language")]
                }
            } else {
                const variableValue = solution.solveFor(targetVar)
                if(variableValue == undefined || (Array.isArray(variableValue) && variableValue.length == 0)){
                    return {
                        successful: false,
                        output: {
                            English: "Unable To Find Solution. This May Mean The Problem Has No Real Solutions Or That There Is No Definite Answer",
                            Spanish: "No Se Pudo Encontrar Una Solución. Esto Puede Significar Que El Problema No Tiene Soluciones Reales O Que No Hay Una Respuesta Definitiva",
                            French: "Impossible De Trouver La Solution. Cela Peut Signifier Que Le Problème N'a Pas De Vraies Solutions Ou Qu'il N'y A Pas De Réponse Définitive",
                            German: "Lösung Kann Nicht Gefunden Werden. Dies Kann Bedeuten, Dass Das Problem Keine Wirklichen Lösungen Hat Oder Dass Es Keine Eindeutige Antwort Gibt"
                        }[localStorage.getItem("language")]
                    }
                }
                return {
                    successful: true,
                    output: variableValue.toString()
                }
            }
            
        } else if(problem.includes("<") || problem.includes(">") || problem.includes("≤") || problem.includes("≥")){
            alert({
                English: "Sorry, We Don't Currently Support Inequalities. Hopefully We Will In The Future.",
                Spanish: "Lo Sentimos, Actualmente No Apoyamos Las Desigualdades. Con Suerte Lo Haremos En El Futuro.",
                French: "Désolé, Nous Ne Soutenons Actuellement Pas Les Inégalités. J'espère Que Nous Le Ferons À l'avenir.",
                German: "Leider Unterstützen Wir Derzeit Keine Ungleichheiten. Hoffentlich Werden Wir In Zukunft."
            }[localStorage.getItem("language")])
            return false
        } else {
            const solution = parse(problem)
            if(solution == undefined || (Array.isArray(solution) && solution.length == 0)){
                return {
                    successful: false,
                    output: {
                        English: "Unable To Find Solution. This May Mean The Problem Has No Real Solutions Or That There Is No Definite Answer",
                        Spanish: "No Se Pudo Encontrar Una Solución. Esto Puede Significar Que El Problema No Tiene Soluciones Reales O Que No Hay Una Respuesta Definitiva",
                        French: "Impossible De Trouver La Solution. Cela Peut Signifier Que Le Problème N'a Pas De Vraies Solutions Ou Qu'il N'y A Pas De Réponse Définitive",
                        German: "Lösung Kann Nicht Gefunden Werden. Dies Kann Bedeuten, Dass Das Problem Keine Wirklichen Lösungen Hat Oder Dass Es Keine Eindeutige Antwort Gibt"
                    }[localStorage.getItem("language")]
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
            output: {
                English: "Unable To Solve. This May Be An Internal Error",
                Spanish: "Incapaz De Resolver. Esto Puede Ser Un Error Interno",
                French: "Incapable De Résoudre. Cela Peut Être Une Erreur Interne",
                German: "Kann Nicht Lösen. Dies Kann Ein Interner Fehler Sein"
            }[localStorage.getItem("language")]
        }
    }
}

export default calculateOutput