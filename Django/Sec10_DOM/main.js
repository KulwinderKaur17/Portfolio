var headerone = document.querySelector("#one");
var headertwo = document.querySelector("#two");
var headerthree = document.querySelector("#three");
// to check our file is connected to the html file
// console.log('connected')
// here event name is mouseover
headerone.addEventListener("mouseover", function(){
    headerone.textContent = "Mouse currently over";
    headerone.style.color = "red";
})

headerone.addEventListener("mouseout", function(){
    headerone.textContent = "Hover over me";
    headerone.style.color = "black";
})
headertwo.addEventListener("click", function(){
    headertwo.textContent = "Clicked!";
    headertwo.style.color = "green";
})

headerthree.addEventListener("dblclick", function(){
    headerthree.textContent = "Double Clicked!";
    headerthree.style.color = "blue";
})