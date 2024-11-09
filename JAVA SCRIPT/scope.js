// =======   SCOPE  ========

// scope is the visibility of variable
// types of Scope


// console.log("Start");


// var a=10;
// console.log(a);


// var b=20;
// console.log(b);


// var c=30;
// console.log(c);


// console.log("end");




// console.log("Start");


// let a=10;
// console.log(a);


// let b=20;
// console.log(b);


// let c=30;
// console.log(c);


// console.log("end");






// console.log("Start");


// const a=10;
// console.log(a);


// const b=20;
// console.log(b);


// const c=30;
// console.log(c);


// console.log("end");




// console.log("Start");


// let a=10;
// console.log(a);


// let b=20;
// console.log(b);


// let c=30;
// console.log(c);


// console.log("end");



// test 15 question in javascript


//   test 1   ...................................

function iseven(){
var a=10;
if(a%2==0){
    console.log("it is even number",a);
}
else
console.log("it is odd number",a);


}




//   test 2   ...........................


function checknum(){
    var n=121;
    var p=0;
    var r=0;
    n=p
while(n>0){
    r=n%10;
    p=(p*10)+r
    n=n/10;
}
if(n==p){
    console.log("it is a pelindrome");
    
}
else 
console.log("not pelindrom")

}


//   test 3   ........................................


function isreverse(){
    var n=10;
    for(var i=n;i>0;i--){
        console.log(i);
    }
}


//   test 4   ........................................

function checkprime(){
    var n=3;
    var count =0;
    for(var i=0;i<=5;i++){

        if(n%i==0){
            count++;
    }}
    if(count==2){
        console.log("prime number")
    }
    else
    console.log("not prime");
    
}




//   test 5   ........................................


function printPrime() {
    var n = 10;
    for (var i = 2; i <= n; i++) {
        var count = 0;
        for (var j = 1; j <= i; j++) {
            if (i % j == 0) {
                count++;
            }
        }
        if (count == 2) {
            console.log(i);
        }
    }
}


//   test 5   ........................................
function  checkchar(){
    var c='s';
    if(c == 'a','e','i','o','u'){
        console.log("vowel");
        
    }
    else
    console.log("consonenet");
    

}





//   test 5   ........................................


