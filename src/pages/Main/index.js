/*
    •--------------------------------•
    |                                |
    |     © 2021 Matthew Perlman     |
    |                                |
    •--------------------------------•
*/

import React from "react"

import "./styles.scss"

import Page from "../../components/Page/index"

const Main = () => {
    return (
        <Page smallText={
            {
                English: "Main",
                Spanish: "Principal",
                French: "Principal",
                German: "Main"
            }[localStorage.getItem("language")]
        }>
            <h1>
                {
                    {
                        English: "My Math Tutor",
                        Spanish: "Mi Tutor de Matemáticas",
                        French: "Mon Professeur de Mathématiques",
                        German: "Mein Mathe-Tutor"
                    }[localStorage.getItem("language")]
                }
            </h1>
            <main className="wrapper explanatoryBoxes">
                <div className="box" onClick={() => {
                    window.location.hash = "Tutorials"
                    window.location.reload()
                }}>
                    <h2 className="title">
                        {
                            {
                                English: "Tutorials",
                                Spanish: "Tutoriales",
                                French: "Tutoriels",
                                German: "Tutorials"
                            }[localStorage.getItem("language")]
                        }
                    </h2>
                    <div className="explanation">
                        {
                            {
                                English: "Take a look through our library of math tutorials.",
                                Spanish: "Eche un vistazo a nuestra biblioteca de tutoriales de matemáticas.",
                                French: "Jetez un œil à notre bibliothèque de tutoriels mathématiques.",
                                German: "Schauen Sie sich unsere Bibliothek mit Mathe-Tutorials an."
                            }[localStorage.getItem("language")]
                        }
                        <br/><br/>
                        {
                            {
                                English: "Each tutorial has an introduction to the topic, instructions on hoe to solve the type of problem, and example problems with their solutions, and a guided walkthrough to help you learn.",
                                Spanish: "Cada tutorial tiene una introducción al tema, instrucciones sobre cómo resolver el tipo de problema y ejemplos de problemas con sus soluciones, y un recorrido guiado para ayudarlo a aprender.",
                                French: "Chaque didacticiel comprend une introduction au sujet, des instructions sur la houe pour résoudre le type de problème, des exemples de problèmes avec leurs solutions et une procédure pas à pas guidée pour vous aider à apprendre.",
                                German: "Jedes Tutorial enthält eine Einführung in das Thema, Anweisungen zur Hacke zur Lösung der Art des Problems sowie Beispielprobleme mit ihren Lösungen und eine Anleitung, die Ihnen beim Lernen hilft."
                            }[localStorage.getItem("language")]
                        }
                    </div>
                </div>
                <div className="box" onClick={() => {
                    window.location.hash = "Worksheets"
                    window.location.reload()
                }}>
                    <h2 className="title">
                        {
                            {
                                English: "Worksheets",
                                Spanish: "Hojas de Trabajo",
                                French: "Feuilles de Travail",
                                German: "Arbeitsblätter"
                            }[localStorage.getItem("language")]
                        }
                    </h2>
                    <div className="explanation">
                       {
                            {
                                English: "Find worksheets of problems to practice and perfect your math skills.",
                                Spanish: "Encuentre hojas de trabajo de problemas para practicar y perfeccionar sus habilidades matemáticas.",
                                French: "Trouvez des feuilles de calcul de problèmes pour vous entraîner et perfectionner vos compétences en mathématiques.",
                                German: "Finden Sie Arbeitsblätter mit Problemen, um Ihre mathematischen Fähigkeiten zu üben und zu perfektionieren."
                            }[localStorage.getItem("language")]
                        }
                        <br/><br/>
                        {
                            {
                                English: "Each of our 20+ worksheets has 10 problems along with their solutions for you to check your answers.",
                                Spanish: "Cada una de nuestras más de 20+ hojas de trabajo tiene 10 problemas junto con sus soluciones para que pueda verificar sus respuestas.",
                                French: "Chacune de nos plus de 20+ feuilles de travail comporte 10 problèmes ainsi que leurs solutions pour que vous puissiez vérifier vos réponses.",
                                German: "Jedes unserer über 20+ Arbeitsblätter enthält 10 Probleme und deren Lösungen, damit Sie Ihre Antworten überprüfen können."
                            }[localStorage.getItem("language")]
                        }
                    </div>
                </div>
                <div className="box" onClick={() => {
                    window.location.hash = "Calculator"
                    window.location.reload()
                }}>
                    <h2 className="title">
                        {
                            {
                                English: "Calculator",
                                Spanish: "Calculadora",
                                French: "Calculatrice",
                                German: "Taschenrechner"
                            }[localStorage.getItem("language")]
                        }
                    </h2>
                    <div className="explanation">
                        {
                            {
                                English: "With our calculator, you can solve a variety of numeric and algebraic problems.",
                                Spanish: "Con nuestra calculadora, puede resolver una variedad de problemas numéricos y algebraicos.",
                                French: "Avec notre calculatrice, vous pouvez résoudre une variété de problèmes numériques et algébriques.",
                                German: "Mit unserem Taschenrechner können Sie eine Vielzahl von numerischen und algebraischen Problemen lösen."
                            }[localStorage.getItem("language")]
                        }
                        <br/><br/>
                        {
                            {
                                English: "Our calculator is equipped to solve various types of math, from simple numeric operations to factoring multivariable polynomials",
                                Spanish: "Nuestra calculadora está equipada para resolver varios tipos de matemáticas, desde simples operaciones numéricas hasta factorización de polinomios multivariables.",
                                French: "Notre calculatrice est équipée pour résoudre divers types de mathématiques, des opérations numériques simples à la factorisation de polynômes multivariables",
                                German: "Unser Taschenrechner ist für die Lösung verschiedener Arten von Mathematik ausgestattet, von einfachen numerischen Operationen bis hin zum Faktorisieren multivariabler Polynome"
                            }[localStorage.getItem("language")]
                        }
                    </div>
                </div>
            </main>
        </Page>
    )
}

export default Main