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

const About = () => {
    return (
        <Page smallText={
            {
                English: "About",
                Spanish: "Acerca de",
                French: "Sur",
                German: "Information"
            }[localStorage.getItem("language")]
        }>
            <h1>
                {
                    {
                        English: "About My Math Tutor",
                        Spanish: "Acerca de Mi Tutor de Matemáticas",
                        French: "À Propos de My Math Tutor",
                        German: "Über meinen Mathe-Tutor"
                    }[localStorage.getItem("language")]
                }
            </h1>
            <main className="wrapper">
                <div className="description">
                    {
                        {
                            English: "My Math Tutor is tool for students to learn and practice math",
                            Spanish: "My Math Tutor es una herramienta para que los estudiantes aprendan y practiquen matemáticas",
                            French: "My Math Tutor est un outil permettant aux étudiants d'apprendre et de pratiquer les mathématiques",
                            German: "Mein Mathe-Tutor ist ein Werkzeug, mit dem Schüler Mathematik lernen und üben können"
                        }[localStorage.getItem("language")]
                    }
                </div>
                <br/>
                <hr/>
                <h2 className="subheader">
                    {
                        {
                            English: "Our Mission",
                            Spanish: "Nuestra Misión",
                            French: "Notre Mission",
                            German: "Unsere Aufgabe"
                        }[localStorage.getItem("language")]
                    }
                </h2>
                <p className="subdescription">
                    {
                        {
                            English: "Math is a life long skill. It drives our society into the future and allows the incredible technology we have to exist. Every year, there are more and more jobs that require math. Because of this, having a good foundation in math at a young age is very important. Despite its importance, math is commonly viewed as one of the harder academic subjects.",
                            Spanish: "Las matemáticas son una habilidad que dura toda la vida. Conduce a nuestra sociedad hacia el futuro y permite que exista la increíble tecnología que tenemos. Cada año, hay más y más trabajos que requieren matemáticas. Debido a esto, tener una buena base en matemáticas a una edad temprana es muy importante. A pesar de su importancia, las matemáticas se consideran comúnmente como una de las materias académicas más difíciles.",
                            French: "Les mathématiques sont une compétence à vie. Il conduit notre société vers l'avenir et permet à la technologie incroyable dont nous disposons d'exister. Chaque année, de plus en plus d'emplois nécessitent des mathématiques. Pour cette raison, avoir de bonnes bases en mathématiques à un jeune âge est très important. Malgré son importance, les mathématiques sont généralement considérées comme l'une des matières académiques les plus difficiles.",
                            German: "Mathe ist eine lebenslange Fähigkeit. Es treibt unsere Gesellschaft in die Zukunft und ermöglicht die unglaubliche Technologie, die wir existieren müssen. Jedes Jahr gibt es immer mehr Jobs, die Mathematik erfordern. Aus diesem Grund ist es sehr wichtig, in jungen Jahren eine gute Grundlage in Mathematik zu haben. Trotz seiner Bedeutung wird Mathematik allgemein als eines der schwierigeren akademischen Fächer angesehen."
                        }[localStorage.getItem("language")]
                    }
                    <br/>
                    {
                        {
                            English: "With My Math Tutor, students now have access to high quality math content to help them get ahead of the curve.",
                            Spanish: "Con My Math Tutor, los estudiantes ahora tienen acceso a contenido matemático de alta calidad para ayudarlos a adelantarse a la curva.",
                            French: "Avec My Math Tutor, les élèves ont désormais accès à un contenu mathématique de haute qualité pour les aider à prendre une longueur d'avance.",
                            German: "Mit My Math Tutor haben Schüler jetzt Zugriff auf hochwertige Mathematikinhalte, um der Kurve einen Schritt voraus zu sein."
                        }[localStorage.getItem("language")]
                    }
                </p>
                <br/>
                <h2 className="subheader">
                    {
                        {
                            English: "Tutorials",
                            Spanish: "Tutoriales",
                            French: "Tutoriels",
                            German: "Tutorials"
                        }[localStorage.getItem("language")]
                    }
                </h2>
                <p className="subdescription">
                    {
                        {
                            English: "My Math Tutor offers 10+ custom math tutorials, and we are planning on releasing many more. These tutorials introduce the topic in a digestable way that helps students understand what they are learning. Additionally, each tutorials has sample problems, where we walk students through every step of the solving process. From there they can go to our worksheets to practice for themself.",
                            Spanish: "My Math Tutor ofrece más de 10 tutoriales de matemáticas personalizados, y estamos planeando lanzar muchos más. Estos tutoriales presentan el tema de una manera digerible que ayuda a los estudiantes a comprender lo que están aprendiendo. Además, cada tutorial tiene problemas de muestra, donde guiamos a los estudiantes a través de cada paso del proceso de resolución. A partir de ahí, pueden ir a nuestras hojas de trabajo para practicar por sí mismos.",
                            French: "My Math Tutor propose plus de 10 tutoriels mathématiques personnalisés, et nous prévoyons d'en publier beaucoup d'autres. Ces didacticiels présentent le sujet d'une manière compréhensible qui aide les étudiants à comprendre ce qu'ils apprennent. De plus, chaque didacticiel comporte des exemples de problèmes, dans lesquels nous accompagnons les étudiants à chaque étape du processus de résolution. De là, ils peuvent accéder à nos feuilles de travail pour s'entraîner eux-mêmes.",
                            German: "Mein Mathe-Tutor bietet mehr als 10 benutzerdefinierte Mathe-Tutorials an, und wir planen, viele weitere zu veröffentlichen. Diese Tutorials führen das Thema auf eine verdauliche Weise ein, die den Schülern hilft, zu verstehen, was sie lernen. Darüber hinaus enthält jedes Tutorial Beispielprobleme, bei denen wir die Schüler durch jeden Schritt des Lösungsprozesses führen. Von dort aus können sie zu unseren Arbeitsblättern gehen, um selbst zu üben."
                        }[localStorage.getItem("language")]
                    }
                </p>
                <br/>
                <h2 className="subheader">
                    {
                        {
                            English: "Worksheets",
                            Spanish: "Hojas de Trabajo",
                            French: "Feuilles de Travail",
                            German: "Arbeitsblätter"
                        }[localStorage.getItem("language")]
                    }
                </h2>
                <p className="subdescription">
                    {
                        {
                            English: "We have over 20+ worksheets and over 200 practice problems in total. With our worksheets, students can test what they have learned for themself, and if they are unsure of their answers, they can use the answer key to check. Our worksheets are also great for teachers. With our download feature, teachers can download worksheets and answer keys to use in the classroom.",
                            Spanish: "Tenemos más de 20 hojas de trabajo y más de 200 problemas de práctica en total. Con nuestras hojas de trabajo, los estudiantes pueden probar lo que han aprendido por sí mismos y, si no están seguros de sus respuestas, pueden usar la clave de respuestas para verificar. Nuestras hojas de trabajo también son excelentes para los profesores. Con nuestra función de descarga, los profesores pueden descargar hojas de trabajo y claves de respuestas para usar en el aula.",
                            French: "Nous avons plus de 20 feuilles de travail et plus de 200 problèmes de pratique au total. Avec nos feuilles de travail, les élèves peuvent tester ce qu'ils ont appris par eux-mêmes, et s'ils ne sont pas sûrs de leurs réponses, ils peuvent utiliser la clé de correction pour vérifier. Nos feuilles de travail sont également idéales pour les enseignants. Grâce à notre fonction de téléchargement, les enseignants peuvent télécharger des feuilles de calcul et des réponses à utiliser en classe.",
                            German: "Wir haben über 20 Arbeitsblätter und insgesamt über 200 Übungsprobleme. Mit unseren Arbeitsblättern können die Schüler testen, was sie selbst gelernt haben, und wenn sie sich über ihre Antworten nicht sicher sind, können sie den Antwortschlüssel verwenden, um dies zu überprüfen. Unsere Arbeitsblätter eignen sich auch hervorragend für Lehrer. Mit unserer Download-Funktion können Lehrer Arbeitsblätter und Antwortschlüssel herunterladen, um sie im Klassenzimmer zu verwenden."
                        }[localStorage.getItem("language")]
                    }
                </p>
                <br/>
                <h2 className="subheader">
                    {
                        {
                            English: "Calculator",
                            Spanish: "Calculadora",
                            French: "Calculatrice",
                            German: "Taschenrechner"
                        }[localStorage.getItem("language")]
                    }
                </h2>
                <p className="subdescription">
                    {
                        {
                            English: "Sometimes math can be really tough. Every student should try their best, but when they come across a problem they just can't crack, our calculator can help. Our calculator is equipped to solve a large variety of problems, so when they get stuck we are able to help them find the answer they need.",
                            Spanish: "A veces, las matemáticas pueden ser muy difíciles. Todos los estudiantes deben hacer todo lo posible, pero cuando se encuentran con un problema que simplemente no pueden resolver, nuestra calculadora puede ayudar. Nuestra calculadora está equipada para resolver una gran variedad de problemas, por lo que cuando se atascan podemos ayudarlos a encontrar la respuesta que necesitan.",
                            French: "Parfois, les mathématiques peuvent être très difficiles. Chaque élève doit faire de son mieux, mais lorsqu'il rencontre un problème qu'il ne peut tout simplement pas résoudre, notre calculatrice peut vous aider. Notre calculatrice est équipée pour résoudre une grande variété de problèmes, donc quand ils sont bloqués, nous sommes en mesure de les aider à trouver la réponse dont ils ont besoin.",
                            German: "Manchmal kann Mathe sehr schwierig sein. Jeder Schüler sollte sein Bestes geben, aber wenn er auf ein Problem stößt, das er einfach nicht lösen kann, kann unser Taschenrechner helfen. Unser Taschenrechner ist für die Lösung einer Vielzahl von Problemen ausgestattet. Wenn sie nicht weiterkommen, können wir ihnen helfen, die Antwort zu finden, die sie benötigen."
                        }[localStorage.getItem("language")]
                    }
                </p>
                <br/>
                <h2 className="subheader">
                    {
                        {
                            English: "Accessibility",
                            Spanish: "Accesibilidad",
                            French: "Accessibilité",
                            German: "Barrierefreiheit"
                        }[localStorage.getItem("language")]
                    }
                </h2>
                <p className="subdescription">
                    {
                        {
                            English: "We want our website to be available to as many people as possible. Our website supports mobile browsers, so that all the content of the website can be viewed from any device. We also have integrated translations for static content, that allow users to read in English, Spanish, French, and German. Currently, our tutorials, worksheets, search bars, and calculator output do not have translation support. We hope to add support in the future, but translating is a very tedious proccess.",
                            Spanish: "Queremos que nuestro sitio web esté disponible para la mayor cantidad de personas posible. Nuestro sitio web es compatible con navegadores móviles, por lo que todo el contenido del sitio web se puede ver desde cualquier dispositivo. También contamos con traducciones integradas para contenido estático, que permiten a los usuarios leer en inglés, español, francés y alemán. Actualmente, nuestros tutoriales, hojas de trabajo, barras de búsqueda y salida de calculadora no tienen soporte para traducción. Esperamos agregar soporte en el futuro, pero traducir es un proceso muy tedioso.",
                            French: "Nous voulons que notre site Web soit accessible au plus grand nombre. Notre site Web prend en charge les navigateurs mobiles, de sorte que tout le contenu du site Web peut être consulté à partir de n'importe quel appareil. Nous avons également intégré des traductions pour le contenu statique, qui permettent aux utilisateurs de lire en anglais, espagnol, français et allemand. Actuellement, nos didacticiels, feuilles de calcul, barres de recherche et sortie de la calculatrice ne prennent pas en charge la traduction. Nous espérons ajouter du support à l'avenir, mais la traduction est un processus très fastidieux.",
                            German: "Wir möchten, dass unsere Website möglichst vielen Menschen zur Verfügung steht. Unsere Website unterstützt mobile Browser, sodass der gesamte Inhalt der Website von jedem Gerät aus angezeigt werden kann. Wir haben auch Übersetzungen für statische Inhalte integriert, mit denen Benutzer auf Englisch, Spanisch, Französisch und Deutsch lesen können. Derzeit bieten unsere Tutorials, Arbeitsblätter, Suchleisten und Taschenrechnerausgaben keine Übersetzungsunterstützung. Wir hoffen, in Zukunft weitere Unterstützung zu erhalten, aber das Übersetzen ist ein sehr mühsamer Prozess."
                        }[localStorage.getItem("language")]
                    }
                </p>
            </main>
        </Page>
    )
}

export default About