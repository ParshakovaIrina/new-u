let xhri = new XMLHttpRequest();
xhri.open('GET', "blog_posts.json", false); // либо "file.json"
xhri.send();
let file_1 = xhri.responseText || '';
yt=JSON.parse(file_1);

function show_more()
{
 for(key in yt)
 {var newDiv='div_'+key;
 var newLink="'"+yt[key].url+"'";
 //console.log(newDiv);
 console.log(newLink);
  tyui.innerHTML+='<div class="exampl" onClick="window.open'+(newLink)+'"><p id="'+newDiv+'" class="links-text"></p></div>';
  //rt.textContent+=ytu[key].title;
 var z=document.getElementById("div_"+key);
 z.textContent=yt[key].title;
 // r.innerHTML+='<img class="links-images" src="ytu[key].url"></img>' 
 //var newElement = tyui.createElement('div');
  //newElement.id = 'div_'+key;
 // console.log(newElement.id);


  //var r=document.getElementById('div_'+key);
   // r.textContent=ytu[key].title;
   // var y=document.getElementById('divv_'+key);
    //y.onclick=window.open(ytu[key].url);
   // var div = document.getElementById('tyui');
   // var e  = document.createElement('a');
   // e.href = ytu[key].url;
   // e.title = ytu[key].title;
   // e.class="exampl";
  //  e.appendChild(document.createTextNode(ytu[key].title));
   // div.appendChild(e);
  }
  
  //for (i in ytu){
  //  var r=document.getElementById("div_"+i);
   // r.textContent=ytu[i].title;
  //}
};

