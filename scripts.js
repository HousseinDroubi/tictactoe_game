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
let way_red='';
let way_yellow='';
const p1=1;
const p2=2;
const p3=3;
const p4=4;
const p5=5;
const p6=6;
const p7=7;
const p8=8;
const p9=9;

let score_red=0;
let score_yellow=0;

// Restart the game, so all backgrounds we return back as initial case.
// const restartGame=()=>{
//     array_red=[];
//     array_yellow=[];
//     counter=0;
//     array_divs=[div_1,div_2,div_3,div_4,div_5,div_6,div_7,div_8,div_9];
//     for (let x of array_divs){
//         if(x.classList.contains('yellow-circle')){
//             x.classList.remove('yellow-circle');
//         }else{
//             x.classList.remove('red-circle');
//         }
//     }
// }

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
    if(way_red.length>=3){
        if((way_red.includes(p1) && way_red.includes(p2) && way_red.includes(p3))
        || (way_red.includes(p4) && way_red.includes(p5) && way_red.includes(p6))
        || (way_red.includes(p7) && way_red.includes(p8) && way_red.includes(p9))
        || (way_red.includes(p1) && way_red.includes(p4) && way_red.includes(p7))
        || (way_red.includes(p2) && way_red.includes(p5) && way_red.includes(p8))
        || (way_red.includes(p3) && way_red.includes(p6) && way_red.includes(p9))
        || (way_red.includes(p1) && way_red.includes(p4) && way_red.includes(p7))
        || (way_red.includes(p3) && way_red.includes(p5) && way_red.includes(p7))){
            console.log("winner is red")
    }
    if(way_yellow.length>=3){
    }
}
}
// Add background to the clicked position.
const addBackground = (div,num)=>{
if(!(div.classList.contains("red-circle") || div.classList.contains("yellow-circle"))){
    counter++;
    if(counter%2!=0){
        div.classList.add("red-circle");
        way_red=`${way_red+num}`;
    }else{
        div.classList.add("yellow-circle");
        way_yellow=`${way_yellow+num}`;
    }
    checkWinner();
    if(counter==9){
        // restartGame();
    }
    console.log(way_red);
    console.log(way_yellow);
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