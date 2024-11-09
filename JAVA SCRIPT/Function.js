//  ======  Function     ========


// 1 Named function

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(10,20));



// Anonimas  function



// let add=function(a,b){
//     return a+b;
// }
// console.log(add(10,20));
// console.log(typeof add);



// internal working 
// case 1
//  console.log("start");
 
// var a=10;
// console.log(a);

// var b=20;
// console.log(b);
 

// function sum(){
//     var m=40;
//     var n=50;
//     return m+n;

// }

// var c=30;
// console.log(c);

// console.log(sum());

// var d=40;
// console.log(d);

// console.log("end");


//   =========  Higher order function   ============


//  it is a funcktion  which acccept  another function  as a arguemnt .


//   =========     Callback   ========    

// it is a function which is send as argument of another function


console.log(" start");

function Calculator (a,b,operation){
    return operation(a,b)
}


function sum(a,b){
    return a+b;
}
console.log(sum(10,20));
console.log(Calculator(10,20,sum))




function sub(a,b){
    return a-b;
}
console.log(sub(10,20));
console.log(Calculator(10,20,sub))



function Multiply(a,b){
    return a*b;
}
console.log(Multiply(10,20));
console.log(Calculator(10,20,Multiply))



console.log("end");




