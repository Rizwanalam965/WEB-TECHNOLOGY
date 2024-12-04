//!================= FILTER METHOD=============
var ar=[75,35,64,78,15,62,62,34,38,25,75];
console.log(ar);

// 1.creating one empty Array
// 2.iterating
// 3.based on condition storing in empty array


// case
/*
var filterArray=[]; //one empty array required to store the filter data
for(let i=0;i<ar.length;i++){
    console.log(ar[i]);
    if(ar[i]>=35){

        filterArray.push(ar[i]);
    }
    
}
console.log(filterArray);

*/

// Case 2: for of


var filterArray=[];
console.log(filterArray);
for(let i of ar){
    console.log(i);
    if(ar[i]>=35){
        filterArray.push(i);
    }
    
}

console.log(filterArray);




// ? Case 3 filter with named array fn
// ! filter  with Name function
// filter will iterate on array
// It require a call back function which contains a condition
// ?collectionName.filter(callbackfn);
// callback function should contain one farameter for itrating.
// filter method will iterate store the element which satisfies the condition

console.log(ar);
console.log(ar.filter(checkCondition));

function checkCondition(i){
    return i>=35;
}
console.log(ar);



// if we have only one parameter then ----> we can remove parenthesis
//! ? case 3.1 filter with arrow fn
console.log(ar.filter(i=>{
    return i>=35;
}));

// if we have only one line  code in block ----> we can remove the  block and return stmt also

console.log(ar.filter( i=> i>=35 ));



//! =============map method  ================
 var salaries =[50,75,105,150,260,120,360,420];
//  1 create one empty array
//  2.iteration
//  3.push update element into empty array

//  case 1 for
console.log(salaries);
var newSalaries=[];  //[]
console.log(newSalaries); 
for(let i=0;i<salaries.length;i++){
    console.log("old",salaries[i],"new",salaries[i]+50);
    newSalaries.push(salaries[i]+50);
    
}
console.log(newSalaries);


// case 2----------------

console.log(salaries);
var newSalaries=[];
console.log(newSalaries);
for(let i of salaries){
    newSalaries.push(i+50);
}
console.log(newSalaries);


//! ? Map method with named function===============

// It will  iterate through an array.
// it requires a callback fn
// !collectionName.map(callbackfn);
// callback function  require a variable for iteration
// and it should return the update value

console.log(salaries);
console.log(salaries.map(updateFn));

function updateFn(i){
    return i+50;
}

console.log(salaries);

// As we hava only one parameter so paranthises is not required.




// !===========REDUCE METHOD ===========
var expensive=[152,320,125,265,235,216,350,];
// wap to find the total expensives in a week.

// case 2----
// we need a container 
// we need a variable for iteration

// let total=0;
// console.log(total);
// for(i=0;i<expensive.length;i++){
//     console.log(expensive[i]);
//     total=total+expensive[i];
    
// }

// console.log(total);


// ? case 2 ----- for of
let total=0;
console.log(total);
for(let i of expensive){
    console.log(i);
    total+=i;
    
}
console.log(total);

// ! case 3 reduce method with named fn


// it iterate through an array
// it will add the element into  one variable
// it will return  a single value as output.
// ? Syntax singlevalue=collectionName.reduce(callbackFn,initialvalue);

// the call back should contain 2 parameter

// 1 for container   2. for iteration
// container by default fill the first element of an array
// if we want to provide a define value then ---->we have to pass initiall value for reduce  method

var expensive=[152,320,125,265,235,216,350,];
console.log(expensive);

console.log(expensive.reduce(reduceFunction,0));
function reduceFunction(total,){
    console.log(total);
    return total+1;
    
}


// ? reduce method with arrow function
var expensive=[152,320,125,265,235,216,350,];
console.log(expensive);
let singleValue = expensive.reduce((total,i)=> total+i,0);
console.log(singleValue);
// in js  it will return singleValue
// in react or redux -->it will return value,Function

// ? Example 2

var ar=["j","a","v","a","s","c","r","i","p","t"];
console.log(ar);
// ? for of

let word ="";
console.log(word);
for(let i of ar){
    word=word+i;
}

console.log(word);

//  let output=ar.reduce(callbackfn,initialvalue);

var output=ar.reduce(function(word,i){
    console.log(word);
    return word+i;
    
}, "");
// ? ==================
var output=ar.reduce((word,i)=>word+i,"");
console.log(output);
