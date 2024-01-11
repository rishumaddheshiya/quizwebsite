const quizData=[

{
    "question":"what is my name?",
   
"a":        "Rishu Maddheshiya",
    "b":    "Rishu kumar",
        "c": "Rishu",
       "d":"Rishu Kumar Maddheshiya",


    "correct":"a",
},
{
    "question":"what is my Date of Birth?",
   
"a":        "13/04/2002",
    "b":    "10/12/2001",
        "c": "10/12/2002",
       "d":"10/12/2000",


    "correct":"d",
},
{
    "question":"which course i am pursuing currently?",
   
"a":        "B Tech",
    "b":    "M Tech",
        "c":"BSc",
       "d":"BA",


    "correct":"a",
},
{
    "question":"In which college i am currently studying?",
   
"a":        "Buddha P.G. College ",
    "b":    "Madan Mohan Malviya University of Technology",
        "c":"Deen Dayal University ",
       "d":"Allahabad University",
        


    "correct":"b",
},
{
    "question":"what was my childhood dream to become?",
    
       "a": "Engineer",
       "b": "Buisnessman",
         "c": "Doctor",
        "d":"IAS",


    "correct":"c",
}


]
const total=quizData.length;
let right=0;
let wrong=0;

const anselem=document.querySelectorAll(".answer");

let index=0;
const score=0;
const queselem=document.getElementById("quesbox");
const loadquiz= ()=>{
    if(index==total){
    EndQiz();
    }else{
    reset();}
    const ques=quizData[index];

queselem.innerText=`Q${index+1}. ${ques.question}`;
anselem[0].nextElementSibling.innerText=ques.a;
anselem[1].nextElementSibling.innerText=ques.b;
anselem[2].nextElementSibling.innerText=ques.c;
anselem[3].nextElementSibling.innerText=ques.d;}
const back=()=>{
    if(index!=0){
        index--;
        loadquiz();
        return;
    
    }
  
}

const submitQuiz = () =>{
        const ques=quizData[index];
    const ans=getAnswer()

    if (ans === ques.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadquiz();
    return;
}

const getAnswer=()=>{
let answer;
    anselem.forEach((input) => {
        

    if(input.checked){
answer= input.value;

    }
})
return answer;

}
const reset=()=>{

    anselem.forEach((input) => {
        

   input.checked=false;
})
}
const EndQiz=()=>{
    document.getElementById("box").innerHTML=`
    <h1>

    Thank you! 🥰
    </h1>
    <h3>
    your score is ${right}/${total}
    </h3>
   ` 
   
}


loadquiz();


