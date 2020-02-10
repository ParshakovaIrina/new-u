let xhr = new XMLHttpRequest();
xhr.open('GET', "feedback_data.json", false); // либо "file.json"
xhr.send();
let file = xhr.responseText || '';
ytu=JSON.parse(file);
var i=0;
 tex.textContent=ytu[0].text;
 nam.textContent=ytu[0].name;
 inst.textContent=ytu[0].instagram_username;
 

function gonext(){ 
    i++;
    newte(i);
}
function goback(){
    i--;
    newte(i);
}
 function newte(i)
 {
    tex.textContent=ytu[i].text;
    nam.textContent=ytu[i].name;
    inst.textContent=ytu[i].instagram_username;
 }