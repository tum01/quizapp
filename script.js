const questions = [
    {
        ques : "What is 2 + 3",
        ans : [
            {text : "5", is_correct : true},
            {text : "3", is_correct : false},
            {text : "2", is_correct : false},
            {text : "1", is_correct : false}
        ]
    },
    {
        ques : "What is 5 * 10",
        ans : [
            {text : "50", is_correct : true},
            {text : "2", is_correct : false},
            {text : "22", is_correct : false},
            {text : "111", is_correct : false}
        ]
    },
    {
        ques : "What is 2 * 3",
        ans : [
            {text : "06", is_correct : true},
            {text : "33", is_correct : false},
            {text : "32", is_correct : false},
            {text : "23", is_correct : false}
        ]
    }
];
const queValue = document.getElementById("question");
const ansBtn = document.getElementById("answer");
const nextBtn = document.getElementById("next");

let currentQuestion = 0;
let score = 0;
function showQuiz()
{
    currentQuestion = -1;
    score = 0;
    // nextBtn.innerHTML = "Next";
    // showQuestion();
}
function showQuestion(){
    resetState();
    nextBtn.innerHTML = "Next";
    let currentVal = questions[currentQuestion];
    let quesNo = currentQuestion + 1;
    queValue.innerHTML = quesNo + ". " + currentVal.ques;
    currentVal.ans.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        ansBtn.appendChild(button);
        button.dataset.is_correct = answer.is_correct;
        button.addEventListener("click", selectAnswer);
    })
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.is_correct;
    console.log(iscorrect)
    if(iscorrect === "true"){
        score++;
        selectedBtn.classList.add("correct");
    }
    else
    {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(ansBtn.children).forEach(btn =>{
        if(btn.dataset.is_correct === "true")
        {
            btn.classList.add("correct");
        }
        btn.disabled = true;
    });
    nextBtn.style.display = "block";
}
function resetState(){
    nextBtn.style.display = "none";
    while(ansBtn.firstChild){
        ansBtn.removeChild(ansBtn.firstChild);
    }
}
nextBtn.addEventListener("click", () =>{
    currentQuestion++;
    if(currentQuestion < questions.length)
    {
        showQuestion();
    }
    else
    {
        document.getElementsByClassName("quiz")[0].innerHTML = `<h2>Quiz over! Your final score is ${score}.</h2>`;
    }
});
showQuiz();