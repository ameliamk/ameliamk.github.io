// congrats, you used inspect element to cheat. or looked at the repo. whatever

let questions = [
    ["What is the worldwide network of computers called?", "internet"],
    ["What HTML element would be a table row?\n<__>", "tr"],
    ["What do we call data with context?", "information"],
    ["What species of fish swarm the Krusty Krab in the first episode of Spongebob?", "anchovies"],
    ["What is the first name of the person that created HTTP/HTML?", "tim"],
    ["When was HTML created?", "1993"],
    ["What category of devices do PCs fall in?", "fixed"],
    ["How is the computer you are using connected to the internet?\nE_______t", "ethernet"],
    ["When did Windows XP release?", "2001"],
    ["What port is HTTPS on?", "443"],
    ["..and what port is HTTP?", "80"],
    ["In what question is the answer \"anchovies\"?\nQuestion _", "4"],
    ["What is the most iconic form of magnetic media?\n______ disk", "floppy"],
    ["What is the most common network topology?\nHint: space", "star"]
]

const quiznumber = document.getElementById("quiznumber")
const question = document.getElementById("question")

const input = document.getElementById("input")
const submit = document.getElementById("submit")

function updatequiz(number, questionstr) {
    quiznumber.innerText = number
    question.innerText = questionstr
}

let index = 0

updatequiz("Question 1", questions[0][0])

let score = 0

submit.addEventListener("click", function(event) {
    if (submit.innerText == "Retry?") { window.location.reload() }

    if (input.value.toLowerCase() == questions[index][1]) { score++ }
    input.value = ""
    index++ 

    if (index > questions.length - 1) { 
        updatequiz("Score: ", `You got ${score}/${questions.length}`)
        submit.innerText = "Retry?"
        input.remove()
    }
    else { updatequiz(`Question ${index+1}`, questions[index][0]) }
})
