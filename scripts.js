//Define all elements
const result_yellow =document.getElementById('result_yellow');
const result_red =document.getElementById('result_red');
const div_1 =document.getElementById('div_1');
const div_2 =document.getElementById('div_2');
const div_3 =document.getElementById('div_3');
const div_4 =document.getElementById('div_4');
const div_5 =document.getElementById('div_5');
const div_6 =document.getElementById('div_6');
const div_7 =document.getElementById('div_7');
const div_8 =document.getElementById('div_8');
const div_9 =document.getElementById('div_9');
// Define all attributes to be used later on
let counter=0;
let array_red=[];
let array_yellow=[];
const array = ["123","456","789","147","258","369","159","357",
                "321","654","987","741","852","963","951","753",
                "213","546","879","417","528","639","519","537",
                "231","564","897","471","582","693","591","573"];
let score_red=0;
let score_yellow=0;

// Restart the game, so all backgrounds we return back as initial case.
const restartGame=()=>{
    array_red=[];
    array_yellow=[];
    counter=0;
    array_divs=[div_1,div_2,div_3,div_4,div_5,div_6,div_7,div_8,div_9];
    for (let x of array_divs){
        if(x.classList.contains('yellow-circle')){
            x.classList.remove('yellow-circle');
        }else{
            x.classList.remove('red-circle');
        }
    }
}

// Add 10 bonus to red 
const addScoreRed=()=>{
    score_red+=10;
    result_red.innerText=`Result-red: ${score_red}`;
    restartGame();
}
// Add 10 bonus to yellow 
const addScoreYellow=()=>{
    score_yellow+=10;
    result_yellow.innerText=`Result-yellow: ${score_yellow}`;
    restartGame();
}

//Here, we are checking the winner after the length of picking up is 3, so, at least the user must pick up 3 positions in order to win.
const checkWinner = () =>{
    if(array_red.length>=3){
        let way='';
        for(let i=array_red.length-3;i<array_red.length;i++){
            way=way.concat(array_red[i]);
        }
        for(let x of array){
            if(x==way){
                addScoreRed();
            }
        }
    }
    if(array_yellow.length>=3){
        let way='';
        for(let i=array_yellow.length-3;i<array_yellow.length;i++){
            way=way.concat(array_yellow[i]);
        }
        for(let x of array){
            if(x==way){
                addScoreYellow();
            }
        }
    }
}
// Add background to the clicked position.
const addBackground = (div,num)=>{
if(!(div.classList.contains("red-circle") || div.classList.contains("yellow-circle"))){
    counter++;
    if(counter%2!=0){
        div.classList.add("red-circle");
        array_red.push(num);
    }else{
        div.classList.add("yellow-circle");
        array_yellow.push(num);
    }
    checkWinner();
    if(counter==9){
        restartGame();
    }
}
}
// Listener for div1
div_1.addEventListener('click',function(){
    addBackground(div_1,"1");
});
// Listener for div2
div_2.addEventListener('click',function(){
    addBackground(div_2,"2");
});
// Listener for div3
div_3.addEventListener('click',function(){
    addBackground(div_3,"3");
});
// Listener for div4
div_4.addEventListener('click',function(){
    addBackground(div_4,"4");
});
// Listener for div5
div_5.addEventListener('click',function(){
    addBackground(div_5,"5");
});
// Listener for div6
div_6.addEventListener('click',function(){
    addBackground(div_6,"6");
});
// Listener for div7
div_7.addEventListener('click',function(){
    addBackground(div_7,"7");
});
// Listener for div8
div_8.addEventListener('click',function(){
    addBackground(div_8,"8");
});
// Listener for div9
div_9.addEventListener('click',function(){
    addBackground(div_9,"9");
});