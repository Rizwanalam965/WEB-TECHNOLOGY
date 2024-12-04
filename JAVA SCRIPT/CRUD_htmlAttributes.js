

    //! CREATE:
    // setAttribute():
    // Node.setAttribute("attributeName",AttributeValue);

    //! READ
    //! UPDATE
    //! DELETE




//  Section, h1, p ,div ,div ,div ,div


let Section=document.createElement("Section");
console.log(Section);

let h1 =document.createElement("h1");
h1.innerHTML ="HTML Attributes";
h1.setAttribute("style","color:red");
h1.setAttribute("id","heading");
Section.append(h1);
console.log(h1);



let p = document.createElement("p");
p.innerHTML="CRUD Operation";
p.setAttribute("class","para")
Section.append(p);
console.log(p);



let div =document.createElement("div");
div.innerHTML="Crate";
div.setAttribute("class","color1")
Section.append(div);
console.log(div);



let div1 =document.createElement("div");
div1.innerHTML="Read";
div1.setAttribute("class","color2")
Section.append(div1);
console.log(div1);




let div2 = document.createElement("div");
div2.innerHTML="Update";
div2.setAttribute("class","color3")
Section.append(div2);
console.log(div2);


let div3 =document.createElement("div");
div3.innerHTML="Delete";
div3.setAttribute("class","color3")
Section.append(div3);
console.log(div3);

let body=document.body;
body.append(Section);

