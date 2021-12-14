const allButton=document.querySelectorAll('button');
const score=document.querySelector('.score');
var val=0;
console.log(allButton);
function makeRandom(){
    var num=Math.floor(Math.random()*allButton.length)
    return num;
}
 function boucle(){
    placeScore(val);
     var hold=makeRandom()
 allButton[hold].classList.add('jiggle');
 allButton[hold].addEventListener('click',()=>{
     allButton[hold].classList.remove('jiggle');
     boucle();
     
 })
 val++;
} 
var one=1,two=2;  
//boucle();
if(two>one){
    boucle();
    one+=8;
}

function placeScore(num){
    score.innerHTML=`${num}`;
    console.log(score);
}