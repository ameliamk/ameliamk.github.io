// congrats, you looked at the code to cheat. 

/*
    format is either:
    - ["question", "correct answer"] for text input
    - ["question", [<4 strings>], correct choice] for multichoice 
*/
const questions = [
    ["What is the worldwide network of computers called?", "internet"],
    ["What HTML element would be a table row?", ["<th>", "<tr>", "<tablerow>", "<td>"], 2],
    ["What do we call data with context?", "information"],
    ["What species of fish swarm the Krusty Krab in the first episode of Spongebob?", "anchovies"],
    ["What is the first name of the person that created HTTP/HTML?", ["Tim Burners Lee", "Tom Burners Lee", "Tom Burn Lee", "John Internet"], 1],
    ["When was HTML created?", ["2003", "1983", "1973", "1993"], 4],
    ["What category of devices do PCs fall in?", "fixed"],
    ["How is the computer you are using connected to the internet?\nE_______t", "ethernet"],
    ["When did Windows XP release?", ["2004", "2001", "1999", "2003"], 2],
    ["What kind of software filters out unknown packets?", "firewall"],
    ["What port is HTTPS on?", "443"],
    ["..and what port is HTTP?", "80"],
    ["What connection type would have the most latency?\nHint: think distance", ["WiFi", "Satellite", "Mobile data", "Bluetooth"], 2],
    ["What is the most iconic form of magnetic media?\n______ disk", "floppy"],
    ["What is the most common network topology?", ["mesh", "ad-hoc", "star", "token ring"], 3],
    ["\"_____ is an information type using sound waves. A common form of _____ is music\"\n- CSNewbs", "audio"],
    ["Which information format uses this information style?", ["Blog", "Social media", "Podcast", "Streamed video"], 3],
    ["In what question is the answer \"anchovies\"?\nQuestion _", "4"]
]

// <h1> and <p>
const quiznumber = document.getElementById("quiznumber")
const question = document.getElementById("question")

// inputs
const input = document.getElementById("input")
const submit = document.getElementById("submit")
const radioinputs = [
    [document.getElementById("radio1"), document.getElementById("label1")],
    [document.getElementById("radio2"), document.getElementById("label2")],
    [document.getElementById("radio3"), document.getElementById("label3")],
    [document.getElementById("radio4"), document.getElementById("label4")]
]
const radiosection = document.getElementById("radiosection")

function updatequiz(number, questionstr, questiontype) {
    quiznumber.innerText = number
    question.innerText = questionstr

    if (typeof(questiontype) == "string") {
        radiosection.style.display = "none" // hides radios
        input.style.display = "inline" // shows text input
    }
    else {
        for (let i = 0; i != 4; i++) { // updates each radio label
            radioinputs[i][1].innerText = questiontype[i]
        }
        radiosection.style.display = "inline" // shows radios
        input.style.display = "none" // hides text input
    }
}

let index = 0
let score = 0

updatequiz("Question 1", questions[0][0], questions[0][1])

submit.addEventListener("click", function(event) {
    if (submit.innerText == "Retry?") { window.location.reload() } // reload if quiz done

    if (typeof(questions[index][1]) == "string"){ 
        if (input.value.toLowerCase() == questions[index][1]) { 
            score++ // add score if correct (string matches)
        }
        input.value = "" // clear input 
    } 
    else {
        if (radioinputs[questions[index][2] - 1][0].checked == true) {
            score++ // add score if correct (right radio checked)
        }
        for (let i = 0; i != 4; i++) { // clear input
            radioinputs[i][0].checked = false
        }
    }
    index++  // advance to next question

    if (index > questions.length - 1) { // if no more questions, show score
        updatequiz("Score: ", `You got ${score}/${questions.length}`, "") // "" to hide radio inputs (easier than deleting)
        submit.innerText = "Retry?"
        input.remove()
    }
    else { 
        updatequiz(`Question ${index+1}`, questions[index][0], questions[index][1])
    }
})
