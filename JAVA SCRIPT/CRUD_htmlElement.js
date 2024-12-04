// !=======   CRUD on HTML Elements  =============



// !CREATE:



// !READ:
// !UPDATE:
// !DELETE:


// !  ====== Create  ======
// tag
// Syntax : document.createElement("node name");
// let h1tag =document.createElement("h1");
// console.log(h1tag);

// content:
// in dom we have to innerTExt,innerHTML,TEXTContent properties in a node object
// This will points to the content of an element
// if we wants to create the content or update the content we have to use follows3
// properties
// 
// Syntax: node.textContent =".....content........";
// Syntax: node.innertext =".....content........";
// Syntax: node.innerHTML =".....content........";

// h1tag.textContent="HEyy body I am from DOm textContent";
// h1tag.innerText="HEyy body I am from DOm text";
// h1tag.innerHTML="HEyy body I am from DOm INNERhtml";

// let container =document.querySelector("body");
// container.append(h1tag);

// container.appendChild(h1tag); //BY USING APPENDCHILD WE CAN ABLE TO APPEND ONLY NODE
// container.appendChild("This is the content"); //BY USING APPENDCHILD WE CAN ABLE TO APPEND ONLY NODE

// container.append("This is the content"); //BY using append we can able to append content also
// container.append(h1tag); //BY using append we can able to append content also

// ! ====  create =======
let h1 =document.createElement("h1");
console.log(h1);

// textContent  , innerText  ,innerHtml
h1.innerHTML="I am h1 tag buddy...."

// append ,appendChild
let body =document.body;
body.append(h1);



// ! ==== READ =====
// DOM SELECTOR

// !====UPDATE
