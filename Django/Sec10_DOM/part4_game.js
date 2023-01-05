console.log('Connected')

// 1 Restrat the game button
var restrat = document.querySelector("#b")
// 2 Select all the cells/squares
var cells = document.querySelectorAll("td")
// 3 Clear all the cells
function clearBoard(){
    for(var i=0;i<cells.length;i=i+1){
        cells[i]="h";
    }
}



restrat.addEventListener('click',clearBoard);



// Check marker


// var oneone = document.querySelector("#col11");
// oneone.addEventListener('click',function(){
//     if(oneone.textContent===''){
//         oneone.textContent='X';
//     }else if (oneone.textContent==='X'){
//         oneone.textContent='O';
//     } else{
//         oneone.textContent=" ";
//     }
// })

function changeMarker(){
    if(this.textContent===''){
        this.textContent='X';
    }else if (this.textContent==='X'){
        this.textContent='O';
    } else{
        this.textContent=" ";
    }
}

for(var i=0; i<cells.length;i++){
    cells[i].addEventListener('click',changeMarker)
}















// var oneone = document.querySelector("#col11");
// var onetwo = document.querySelector("#col12");
// var onethree = document.querySelector("#col13");
// var twoone = document.querySelector("#col21");
// var twotwo = document.querySelector("#col22");
// var twothree = document.querySelector("#col23");
// var threeone = document.querySelector("#col31");
// var threetwo = document.querySelector("#col32");
// var threethree = document.querySelector("#col33");
// var header = document.querySelector(".container");



// header.textContent = 'hello'
// oneone.textContent = '1000'

// oneone.addEventListener('click',function(){
//     oneone.textContent="X";
// })