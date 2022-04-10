/*
var fname = 'anand';
var lname = 'meshram';
console.log('my frist name is ' + fname + ' and surname is ' + lname);
console.log(`my frist name is ${fname} and Lname is ${lname}`);
alert('my frist name is ' + fname + ' and surname is ' + lname);
*/
/*
const names = ['anand ','shubham','ankit','abhinav'];
console.log(names[0]);
console.log(names.length);
*/
/*
for(let i=0; i<names.length; i++)
{
    console.log(`my ${names[i]}`);
}
*/
/*
for (let name of names)
{
    console.log(name);
}
*/

function table(){
const name = ['anand','shubham']; 
   
let text = "<tr>";
for (let i = 0; i < name.length; i++) {
  text += "<td>" + name[i] + "</td>";
}
text += "</tr>";

document.getElementById("table").innerHTML = text;
}








































/*
function table(){
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("table").innerHTML = text;
}
*/
