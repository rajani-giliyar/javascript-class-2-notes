// let d=document.getElementsByTagName("div")
// console.log(d[0].innerText="hello");
// console.log(d[0].innerHTML="<h1>hiii</h1>");

// in this way we write at that time work as a normal
// let d=document.getElementById("one")
// d.style.width="500px";
// d.style.backgroundColor="blue";

// if we do above code inside a function at that it works whenever we want.for  example when we click on btn at that time we want that box or ant element background become different so we use event at that time

// function change_element()
// {
//     let d=document.getElementById("one")
//     d.style.width="500px";
//     d.style.backgroundColor="blue"; 
// }


function addelement()
{
    // let d=document.getElementById("one")
    // d.innerHTML=d.innerHTML+"<h3>Hello</h3>"
    // OR d.innerHTML+="<h3>Hello</h3>"
    // crct way to add elements
    let h=document.createElement("h3")
    let text=document.createTextNode("Hello")
    h.appendChild(text)
    document.getElementById("one").appendChild(h)
    console.log("event works")
    
}

function showPassword()
{
    let inp=document.getElementsByClassName("inp")
    inp[0].type="text"
}
function hidePassword()
{
    let inp=document.getElementsByClassName("inp")
    inp[0].type="password"
}
