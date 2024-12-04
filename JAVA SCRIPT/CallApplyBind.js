// ! ===== Call Apply Bind ======

// we can borrow the function into an object.
// call ,apply,bind are exactly similar the only diff in syntax.

// Call:

// functionRef.call(objectName ,para1,params2,params3);

// Apply:

// functionRef.apply(objectName ,[para1,params2,params3]);
// we have to pass the params in an array

// Bind:

// functionRef.bind(objectName ,para1,params2,params3)();
// bind is required to invoke the function
// where for call and apply its not required

let megha = {
    sname:"megha",
    couse: "JFS",
    greet: function(){
        console.log("this is the hues function with 1000 line sof code");
        return "hii Hello ,HOw are you";
    },
};
console.log(megha);
console.log(megha.greet());


let shubham= {
    sname:"shubham",
    couse: "PFS",
    greet: function(){
        console.log("this is the hues function with 1000 line code code");
        return "hii Hello ,HOw are you";
    },
};
console.log(shubham);
console.log(shubham.greet());


let ishani= {
    sname:"ishani",
    couse: "MERN",
    greet: function(){
        console.log("this is the hues function with 1000 line code code");
        return "hii Hello ,HOw are you!!!!";
    },
};
console.log(ishani);
console.log(ishani.greet());


// Case 2 : with call method

let ritik= {
    sname:"ritik",
    couse: "PFS",
    sayHello: function(){
        return "hii Hello ,How are you!!!!!";
    },
};
console.log(ritik);
console.log(ritik.sname);
console.log(ritik.couse);
console.log(ritik.sayHello);
console.log(ritik.sayHello());

// Syntax functionReference.call(objName);
// console.log("for shivani , Call",ritik.sayHello.call(shivani));

let rajinikant ={
    sname:"rajinikant",
    course:"MERN",
};
console.log(ritik.sayHello.call(rajinikant));

//  Case 3 call apply bind along with the params

// let saquib ={
//     sname: "saquib",
//     salary:
// }



//  Task call apply  bind for utkarsh also
