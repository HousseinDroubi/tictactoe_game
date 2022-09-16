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
let counter=0;

const addBackground = (div)=>{
counter++;
if(counter%2!=0){
    div.classList.add("red-circle");
}else{
    div.classList.add("yellow-circle");
}
}



div_1.addEventListener('click',function(){
    addBackground(div_1);
});
div_2.addEventListener('click',function(){
    addBackground(div_2);
});
div_3.addEventListener('click',function(){
    addBackground(div_3);
});
div_4.addEventListener('click',function(){
    addBackground(div_4);
});
div_5.addEventListener('click',function(){
    addBackground(div_5);
});
div_6.addEventListener('click',function(){
    addBackground(div_6);
});
div_7.addEventListener('click',function(){
    addBackground(div_7);
});
div_8.addEventListener('click',function(){
    addBackground(div_8);
});
div_9.addEventListener('click',function(){
    addBackground(div_9);
});