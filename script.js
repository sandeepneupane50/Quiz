window.onload= function() {
    show(0);
}






let questions = [
    {
        id:1,
        question: "An electronic tool that allows information to be input, processed, and output is called ... ",
        answer: "CPU",
        options: [
            "Operating System",
            "CPU",
            "Motherboard",
            "Computer",
        ]
    },
    {
        id:2,
        question: "... is a worldwide network of computers.",
        answer: "Internet",
        options: [
            "Internet",
            "Network",
            "CPU",
            "Intranet",
        ]
    },
    {
        id:3,
        question: "... brain of the computer that does the calculation, moving, and processing of information.",
        answer: "CPU",
        options: [
            "Motherboard",
            "Monitor",
            "CPU",
            "Storage Device",
        ]
    },
    {
        id:4,
        question: "Part of a computer that allows a user to put information into the computer is called ...",
        answer: "Input Device",
        options: [
            "Input Device",
            "Output Device",
            "Printer",
            "Software",
        ]
    },
    {
        id:5,
        question: "The physical parts of a computer are known as ...",
        answer: "Hardware",
        options: [
            "Hard Drive",
            "Disk Drive",
            "Software",
            "Hardware",
        ]
    }
]

let fname = sessionStorage.getItem("name");
document.querySelector(".ffname").innerHTML = fname;

function submitform(e){
    e.preventDefault();
    let name = document.forms["start"]["name"].value;
    sessionStorage.setItem("name", name);
    location.href="quiz.htm"
}


let question_count= 0;
let point= 0;

function next() {
    let useranswer= document.querySelector("li.option.active").innerHTML;
    if( useranswer== questions[question_count].answer) {
        point += 10;
        sessionStorage.setItem("points", point);
    }
    if(question_count== questions.length - 1) {
        sessionStorage.setItem("time", `${minute} minutes ${seconds} seconds`);
        clearInterval(mtime);
        location.href="final.htm";
        return;
    }


   

   
    question_count++;
    show(question_count);
}

function show(count) {
    let question= document.getElementById("questions");
    
    question.innerHTML= `
    <h2>Q${question_count+1}.${questions[count].question}</h2>
    <ul class="options">
                    <li class="option">${questions[count].options[0]}</li>
                    <li class="option">${questions[count].options[1]}</li>
                    <li class="option">${questions[count].options[2]}</li>
                    <li class="option">${questions[count].options[3]}</li>
                </ul> 
    `;
    toggleActive();
}
function toggleActive(){
    let option= document.querySelectorAll("li.option");

    for(let i=0; i<option.length; i++) {
        option[i].onclick= function() {
            for(let j=0; j<option.length; j++) {
                if(option[j].classList.contains("active")){
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");

        }
    }
}



























