function hello(){
    console.log("hello world!")
    }

function helloYou(name){
    console.log("hello " + name)
    }

function addNum(num1,num2){
    console.log(num1+num2)
    }


// function formal(name="Sam",title="Sir"){
//     console.log(title + " " + name)
//     }

function formal(name="Sam",title="Sir"){
    return title + " " + name
    }

function timesFive(numInput){
    var result = numInput * 5
    return result
    }





    // Global Scope
var v = "GLOBAL V"
var stuff = "GLOBAL STUFF"

function fun(stuff){
    console.log(v)
    stuff = "Reassign stuff inside func"
    console.log(stuff)
}
console.log(stuff)