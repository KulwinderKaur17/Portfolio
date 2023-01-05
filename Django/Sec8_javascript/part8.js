// Problem1: Print "hello" 5 times



var i = 0;
while (i<5){
    console.log("hello")
    i=i+1
}



for (var i=0; i<5; i++){
    console.log("hello with for loop")
}

// Problem2: Print allodd numbers between 0  to 100
// var i=0;
// while (i<10){ 
//     if(i%2!==0){
//         console.log(i)
//     }
//     i=i+1
// }

for(var i=0; i<10; i++){
    if(i%2!==0){
        console.log(i)
    }
}