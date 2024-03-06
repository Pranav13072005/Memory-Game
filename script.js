let clickedCard = null;
let n=0;
let count=0;
let matches=0;
let preventClick=false;



function updateTries() {
    document.getElementById("tries").innerHTML = count;
}

function updateMatches() {
    document.getElementById("matches").innerHTML = matches;
}
function updateScore(){
    document.getElementById("score").innerHTML = (matches/count)*100;
}

function buttonClick(event){
    const secondClick=event.target;
    if (secondClick.className.includes('disable') || preventClick){
        return;
    }
    secondClick.className=secondClick.className.replace('hide','');
    if(n==0){
        clickedCard=secondClick;
        n=1;
    }
    else{
        if (clickedCard == secondClick){
            return;
        }  
        count+=1;
        updateTries();   
        if(clickedCard.getAttribute('color')===secondClick.getAttribute('color')){
            console.log('colors are matching');
            secondClick.className+=' disable';
            secondClick.className=secondClick.className.replace('hide','');
            clickedCard.className+=' disable';
            clickedCard.className=clickedCard.className.replace('hide','');
            console.log(secondClick.className);
            matches+=1;
            updateMatches();
            if (matches===1){
                var hidden= document.getElementsByClassName("youwin")[0];
                var hidden1 = document.getElementsByClassName("youwin")[1];
                console.log(hidden);
                hidden.classList.remove('hidden');
                hidden1.classList.remove('hidden');
                updateScore();
                var scores=document.getElementById("scores");
                scores.className=scores.className.replace('hidee','');
                var score=document.getElementById("score");
                score.className=score.className.replace('hidee','');
                var playagain=document.getElementsByClassName('playagain')[0];
                playagain.className=playagain.className.replace('hiddenn','');
                var summary = document.getElementById("summary");
                summary.className+="hide2";
                console.log(score);
                //location.replace('index1.html');
            }
        }
        else{
            console.log('colors are not matching');
            preventClick=true;
            setTimeout(() => {
                secondClick.className=secondClick.className.replace('disable','');
                secondClick.className+='hide';
                clickedCard.className=clickedCard.className.replace('disable','');
                clickedCard.className+='hide';
                preventClick=false;
            }, 500);
          
       }
        n=0;
    }
}
document.addEventListener('DOMContentLoaded', function() {

    const colors = ['green','orange','blue','pink','white','black','purple','red','yellow','cyan'];
    const buttons = [...document.querySelectorAll('.button')];
    console.log(buttons);
    for (let color of colors){
        console.log(color);
        //console.log(parseInt(Math.random() * 10));
        let button1index= parseInt(Math.random() * buttons.length);
        console.log(button1index);
        let button1=buttons[button1index];
        button1.className+= ` ${color}`;
        button1.setAttribute('color',color);
        console.log(button1);
        buttons.splice(button1index, 1);
    
        let button2index= parseInt(Math.random() * buttons.length);
        console.log(button2index);
        let button2=buttons[button2index];
        button2.className+= ` ${color}`;
        button2.setAttribute('color',color);
        console.log(button2);
        buttons.splice(button2index, 1);
    }
});
