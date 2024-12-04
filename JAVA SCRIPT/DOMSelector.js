// ! ============= DOM Selector  =============
// 1.getElementById
// 2.class name
// 3.tagname
// 4.name attribute


// ? ========id name ========
// it will target the element based on id name
// It will target only the first matching element
// It will return only one  element
// ! Syntax document.getElementById("IdvariableName");

// console.log(window.document);
// console.log(document);

let demoId1=document.getElementById("demo1");
console.log(demoId1);

let demoId2 = document.getElementById("demo2");
console.log(demoId2);
let demoId3 =document.getElementById("demo3")
console.log(demoId3);


// ! =====class name =======
// It will target based on class name
// it will return all matching NODES with a class name Provided
// Syntax : document.getElementByClassName("classvariableName");

let demoClass1=document.getElementsByClassName("demo");
console.log(demoClass1);
let  demoClass2 =document.getElementsByClassName("demo1");
console.log(demoClass2);
let demoClass3 =document.getElementsByClassName("demo2")
console.log(demoClass3);


// ! ======= Tag Name  ========
// IT will target the element based on tag name
// it return all the matching node with a tag name
// Syntax:document.getElementByTagName("Tagname");

let h2Tag=document.getElementsByTagName("h2")
console.log(h2Tag);

let bTag =document.getElementsByTagName("b");
console.log(bTag);

let iTag =document.getElementsByTagName("i");
console.log(iTag);


// ! ======= Name Attribute  ===========
// it will target based on name attribute.
// It will return all the matching element with a name attributes.
// Syntax :document.getElementByName("name attribute value");

let userName =document.getElementsByName("userName");
console.log(userName);
console.log(userName[0]);
console.log(userName[1]);

userName[0].value="Shivani";
userName[1].value="kumari";

let userEmail =document.getElementsByName("userEmail");
console.log(userEmail);
console.log(userEmail[0]);
userEmail[0].value ="rizwan@gmail.com"


let userMobileNo =document.getElementsByName("userMObileNo");
userMobileNo[0].value = 6207219696;


// ! =========== query Selector()================
// it will target based on id ,class, tag name.
// it will target only the first matching nodes.
// even it is class name or tag name also
// ?Syntax:  id----->document.querySelector(#variableName)
// ?Syntax:  class----->document.querySelector(.variableName)
// ?Syntax:  tag----->document.querySelector(tagName)

// qs on id
let qsid = document.querySelector("#demo1");
console.log(qsid);

// qs on class
let qsclass = document.querySelector(".demo1");
console.log(qsclass);

// qs on tag
let qstag = document.querySelector("h2");
console.log(qstag);



// ! =========== query SelectorAll() ================
// it will target based on id ,class, tag name.
// it will target All the first matching nodes.
// even it is id also
// ?Syntax:  id----->document.querySelectorAll(#variableName)
// ?Syntax:  class----->document.querySelectorAll(.variableName)
// ?Syntax:  tag----->document.querySelectorAll(tagName)


// qs  on id 
let qsaid =document.querySelectorAll("#demo1");
console.log(qsaid);

// qs  on class
let qsaclass =document.querySelectorAll(".demo1");
console.log(qsaclass);

// qs  on id
let qsatag =document.querySelectorAll("h2");
console.log(qsatag);












