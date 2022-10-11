const quizData = [
    {
        question: "Question - 1/5\nHow old was Gandhi ji when he reached London to become a barrister?",
        a: "20 years",
        b: "19 years",
        c: "21 years",
        d: "16 years",
        correct: "b",
    },
    {
        question: "Question - 2/5\nWho was the political guru of Mahatma Gandhi?",
        a: "Ravindra Nath Tagore",
        b: "Swami Vivekananda",
        c: "Gopal Krishna Gokhale",
        d: "None",
        correct: "c",
    },
    {
        question: "Question - 3/5\nWhat was Gandhiji's age at the time of his marriage?",
        a: "12 years",
        b: "13 years",
        c: "16 years",
        d: "20 years",
        correct: "b",
    },
    {
        question: "Question - 4/5\nFrom which station in South Africa was Gandhiji thrown out of the train?",
        a: "Natal",
        b: "Johannesburg",
        c: "Pietermartizburg",
        d: "Durban",
        correct: "c",
    },
    {
        question: "Question - 5/5\nWhen was the Gandhi-Irwin Pact signed?",
        a: "March 1, 1932",
        b: "March 5, 1931",
        c: "March 10, 1935",
        d: "March 7, 1937",
        correct: "b",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h1>Your score = ${score}/${quizData.length}</h1>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})