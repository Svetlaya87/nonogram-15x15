let buttonsInfild = document.querySelectorAll(".fild *");
console.log(buttonsInfild);
for(let i=4; i< buttonsInfild.length-5; i = i+5){
    buttonsInfild[i].classList.add("border-right");
    console.log(buttonsInfild[i]);
}

for(let i=75; i< buttonsInfild.length-135; i = i+1){
    buttonsInfild[i].classList.add("border-top");
    console.log(buttonsInfild[i]);
}

for(let i=150; i< buttonsInfild.length-60; i = i+1){
    buttonsInfild[i].classList.add("border-top");
    console.log(buttonsInfild[i]);
}

let array = [
    ["_","_","_","#","#","_","_","_","_","_","#","#","_","_","_"],
    ["_","_","#","#","#","#","_","_","_","#","#","#","#","_","_"],
    ["_","#","#","_","_","#","#","#","#","#","_","_","#","#","_"],
    ["#","_","_","_","_","_","#","#","#","_","_","_","_","_","#"],
    ["#","_","_","_","_","_","_","#","_","_","_","_","_","_","#"],
    ["#","_","_","#","#","_","_","_","_","_","#","#","_","_","#"],
    ["#","_","_","#","#","_","_","_","_","_","#","#","_","_","#"],
    ["#","#","_","_","_","_","_","_","_","_","_","_","_","#","#"],
    ["#","#","_","_","_","_","_","_","_","_","_","_","_","#","#"],
    ["_","#","#","_","_","#","_","_","_","#","_","_","#","#","_"],
    ["_","_","#","#","_","_","#","#","#","_","_","#","#","_","_"],
    ["_","_","_","#","#","_","_","_","_","_","#","#","_","_","_"],
    ["_","_","_","_","#","#","_","_","_","#","#","_","_","_","_"],
    ["_","_","_","_","_","#","#","_","#","#","_","_","_","_","_"],
    ["#","_","#","_","#","_","#","_","#","_","#","_","#","_","#"]];


    function countLeftClues(elem, acc=0){
        let rowClues = [];
        for(let i=0; i < elem.length; i++){
            if(elem[i] === "#"){
                acc++;
                if(i === elem.length-1){
                    rowClues.push(acc);
                    return rowClues;
                }
            }
            if(elem[i] ==="_" && elem[i-1] === "#" && i>0){
                rowClues.push(acc);
                acc=0;
               
            }
        }

        return rowClues;
    }

    let cluesLeft = [];
    for(let i=0; i<array.length; i++){
        
        cluesLeft.push( countLeftClues(array[i], acc=0) );
        
    }


    console.log(cluesLeft);
    let maxLength = Math.max( ...(cluesLeft.map(el=> el.length)) );
    console.log(maxLength);
    cluesLeft =cluesLeft.map(function(el){
        let lengthElement = el.length;
        for(let i=0; i < (maxLength - lengthElement ); i++){
            el.unshift("");
        }
      
        return el;
    });
    console.log(cluesLeft);

    let cluesTop = [];
    for(let i=0, j=0; j<array[i].length; j++){


        let columnClues = [];
        for( i=0; i < array.length; i++){
            if(array[i][j] === "#"){
                acc++;
                if(i === array.length-1){
                    columnClues.push(acc);
                    acc=0;
                    

                }
            }
            if(array[i][j] ==="_"   && i>0 && array[i-1][j] === "#"){
                columnClues.push(acc);
                acc=0;
            }
        }

        
        i=0;
        cluesTop.push(columnClues);
        
    }

    console.log(cluesTop);
    let maxLengthTop = Math.max( ...(cluesTop.map(el=> el.length)) );
    cluesTop =cluesTop.map(function(el){
        let lengthElement = el.length;
        for(let i=0; i < (maxLengthTop - lengthElement ); i++){
            el.unshift("");
            
        }
      
        return el;
    });

    console.log(cluesTop);

    

  


    

    let elementClueTop = document.querySelector(".clue-top");
    let elementClueLeft = document.querySelector(".clue-left");

    for(let i=0; i < cluesTop.length; i++ ){
        let divWrapper = document.createElement("div");
        divWrapper.classList.add("wrapper-top");
        elementClueTop.insertAdjacentElement("beforeend", divWrapper);

        for(let j=0; j< cluesTop[i].length; j++){

            let div = document.createElement("div");
            div.textContent = cluesTop[i][j];
            
            if( cluesTop[i][j] === "0"){
                console.log(cluesTop[i][j]);
                div.classList.add("transparent-zero"); //добавляем нули и делаем их прозрачными, чтобы высота всех ячеек была одинаковой
            }
            divWrapper.insertAdjacentElement("beforeend", div);

            
        }
    }

 

    for(let i=0; i < cluesLeft.length; i++ ){
        let divWrapper = document.createElement("div");
        divWrapper.classList.add("wrapper-left");
        elementClueLeft.insertAdjacentElement("beforeend", divWrapper);

        for(let j=0; j< cluesLeft[i].length; j++){

            let div = document.createElement("div");
            div.textContent = cluesLeft[i][j];
            divWrapper.insertAdjacentElement("beforeend", div);

            
        }
    }
    console.log(elementClueTop, elementClueLeft);
    


    document.addEventListener("DOMContentLoaded", function(){
        let fildWrapper = document.querySelector(".fild");
        
        window.addEventListener("resize", function(e){
            //e.target = buttonsInfild;
            let resHeight = getComputedStyle(buttonsInfild[0], null).height.split("");
            resHeight.splice(-2);
            resHeight  = resHeight.join("")*1;
            //console.log(e.target.innerWidth);
            console.log(resHeight );
            //let clueHeight = ( (res/e.target.innerHeight) * e.target.innerHeight )/15;
            //let clueWidth = ( (res/e.target.innerWidth) * e.target.innerWidth )/15;
            let resWidth = getComputedStyle(buttonsInfild[0], null).width.split("");
            resWidth.splice(-2);
            resWidth  = resWidth.join("")*1;
            //console.log(e.target.innerWidth);
            console.log(resWidth );
            let columnCellClues = document.querySelectorAll(".wrapper-left *");
            let widthCellClues = document.querySelectorAll(".wrapper-top *");
            /*
            for(let i=0; i< columnCellClues.length; i++){
                
                columnCellClues[i].height = `${resHeight}px`;
                
                
                console.log(columnCellClues[i].height, getComputedStyle(columnCellClues[i], null).height);
            }

            for(let i=0; i<  widthCellClues.length; i++){
               
                widthCellClues[i].width = `${resWidth.toFixed(2)}px`;
                
               
            }*/

            /*
            for(let i=0; i<  buttonsInfild.length; i++){
               
                buttonsInfild[i].innerWidth = `${clueWidth.toFixed(2)}px`;
                
               
            }*/

            
        });
    });
    