let fname = "muthu";
let lname = "kumar";
let age = 20;
let eligible = true;
let education = { sslc: 500, hsc: 1200, ug: 100 };

// kength of the string
document.getElementById("demo").innerHTML = fname.length;
// slice properties
let desc =
  "hi i'muthukumar , i'm form coimbatore tamilnadu,i'm an software developer and having knowledge in reactjs";

document.getElementById("demo1").innerHTML = desc.slice(5, 16);
let job = "software developer";
document.getElementById("demo2").innerHTML = job.toUpperCase();
let trimdesc = "   hi i'm muthukumar as an software developer   ";
document.getElementById("demo3").innerHTML = trimdesc.trim();
let replace =
  "The replaceer() method searches a string for a value or a regular expression. The replaceer() method returns a new string with the value(s) replaced. The replaceer() method does not change the original string.";
let text = replace.replace("replaceer", "replace");
document.getElementById("demo4").innerHTML = text;
let replacer =
  "The replaceer() method searches a string for a value or a regular expression. The replaceer() method returns a new string with the value(s) replaced. The replaceer() method does not change the original string.";
let test = replacer.replaceAll("replaceer", "replace");
document.getElementById("demo5").innerHTML = test;
// templates in strings
let strtemp = `Hi,Im "${fname} ${lname}" V.i'm an "Software developer" ,interested in watching cricket and studying`;
document.getElementById("demo6").innerHTML = strtemp;
