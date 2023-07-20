const quizDB=[
    {
        question: "Q1: What is the purpose of CSS in web development, and how does it differ from HTML?",
        a: "Cascading Style Sheets; Used for defining the structure of web pages",
        b: "Cascading Style Sheets; Used for creating interactive elements on web pages",
        c: "Cascading Style Sheets; Used for styling web pages",
        d: "Cascading Style Sheets; Used for server-side programming",
        ans: "ans3"

    },
    {
        question: "Q2: What does HTML stand for, and what is its primary purpose in web development?",
        a: "Hyperlinks and Text Markup Language; Used for styling web pages" ,
        b: "Hyper Text Markup Language; Used for creating the structure of web pages",
        c: "Hyperlinks and Text Markup Language; Used for creating interactive web pages",
        d: "Hyper Text Markup Language; Used for server-side programming",
        ans: "ans2"

    }, 
    {
      question: "Q3:What are the differences between client-side and server-side programming languages in web development?",
      a : "Client-side languages are executed on the server, while server-side languages are executed on the client's browser.",
      b: "Client-side languages are executed on the client's browser, while server-side languages are executed on the server.",
      c: "Client-side languages are used for defining the structure of web pages, while server-side languages are used for styling.",
      d: "There are no significant differences between client-side and server-side languages.",
      ans: "ans2"

  },
  {
    question: "Q4: Which programming language is primarily used for adding interactivity to web pages?",
    a: "HTML",
    b: "CSS",
    c: "Javascript",
    d: "Python",
    ans: "ans3"

  },
  {
  question: "Q5: What is the purpose of a responsive web design?",
  a: "To optimize web pages for search engines",
  b: "To improve the website's loading speed",
  c: "To create visually appealing web pages",
  d: "To adapt the layout for different devices and screen sizes",
  ans: "ans4"

 },
 {
  question: "Q6: Which HTTP method is primarily used for retrieving data from a server?",
  a: "GET",
  b: "DELETE",
  c: "POST",
  d: "PUT",
  ans: "ans1"

 },
 {
  question: "Q7: What does SPA stand for in web development?",
  a: "Single Point Application",
  b: "Single Programming Approach",
  c: "Single Page Application",
  d: "Single Process Application",
  ans: "ans3"
   },
    {
        question: "Q8:What is the name of the location address of the hypertext documents?",
        a: "Web server",
        b: "Uniform Resource Locator",
        c: " Web address",
        d: "File",
        ans: "ans2"

    },
    {
      question: "Q9:Which front-end framework is developed by Twitter and focuses on responsive web design?",
      a: "Angular",
      b: "React",
      c: "Vue.js",
      d: "BootStrap",
      ans: "ans4"

  },
    {
        question: "Q10: Which attribute is used to name an element uniquely?",
        a: "class",
        b: "id",
        c: "dot",
        d: "All of above",
        ans: "ans2"
    }

];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');


//  for answer 

const answers=document.querySelectorAll('.answer');

// for score 

const showScore=document.querySelector('#showScore');

// load question function 

    let questionCount=0;
    let score=0;

const loadQuestion =() =>{

    const questionList=quizDB[questionCount];
    question.innerHTML=questionList.question;
    option1.innerHTML=questionList.a;
    option2.innerHTML=questionList.b;
    option3.innerHTML=questionList.c;
    option4.innerHTML=questionList.d;
}


loadQuestion();

// User submitted answer function 

const getCheckAnswer=() =>{
    let answer;
    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer=curAnsElem.id;
        }
    });
    return answer;

}
    // decelect selected ans 

const deselectAll=() => {

    answers.forEach((curAnsElem)=> curAnsElem.checked=false);

}



submit.addEventListener('click',() => {
    const checkedAnswer= getCheckAnswer();
    console.log(checkedAnswer);

    // answer matched then score increase 

    if(checkedAnswer ==quizDB[questionCount].ans){
        score++;
    };

        // load another question 
        questionCount++;

        deselectAll();

        if(questionCount< quizDB.length){
            loadQuestion();
        }

        else{
            showScore.innerHTML=`
                <h3> Your Scored ${score}/${quizDB.length} </h3>            
                <button class="btn" onclick="location.reload()">Play Again</button>
            `;

            showScore.classList.remove('scoreArea');
        }

});
