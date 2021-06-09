// var btn  =document.getElementById("btn");
// btn.addEventListener("click", viwe)
// function viwe() {

//   document.getElementById("container").style.opacity="100%"
// var ajax = new XMLHttpRequest();
// ajax.open("GET","https://jsonplaceholder.typicode.com/users");
// ajax.send();
//     var res = '';
//     var data =[];
//     ajax.onreadystatechange = function(){
//         if(ajax.readyState == 4 && ajax.status == 200){
//             var data = JSON.parse(ajax.response);
//              var tdata = '';
//             for(var i=0 ,  datacount = 10 ;i < datacount;i++){

// var tdata = `<div class="num">
// <h1> ${data[i].id}</h1>

// </div>`

//  document.getElementById("container").innerHTML +=tdata;

//             }
       
        
//         }
//     }
// }
var btn  =document.getElementById("btn");
 btn.addEventListener("click", viwe)
 function viwe() {
var ajax = new XMLHttpRequest();
ajax.open("GET","https://jsonplaceholder.typicode.com/users");
ajax.send();
    var res = '';
    var data =[];
    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4 && ajax.status == 200){
            var data = JSON.parse(ajax.response);
             var tdata = '';
            for(var i=0 ,  datacount = 10 ;i < datacount;i++){

var tdata = `<div>
<h1 onclick=show(${data[i].id}) >  id:${data[i].id}</h1>

</div>`

 document.getElementById("container").innerHTML +=tdata;
 
            }
       
        
        }
    }
}
    function show(x){
        alert("show data of this id ");
        // console.log(x)


        var ajax = new XMLHttpRequest();

        
        
        ajax.open("GET","https://jsonplaceholder.typicode.com/users/" + x);
        ajax.send();
            var persondata =[];
            ajax.onreadystatechange = function(){
                if(ajax.readyState == 4 && ajax.status == 200){
                    var persondata = JSON.parse(ajax.response);

                    console.log(persondata.email);
                    console.log(persondata.id);
                    console.log(persondata.name);
                    console.log(persondata.address);
                    document.getElementById("content").style.backgroundColor="gray"
                    document.getElementById("content").style.opacity="100%"
                    document.getElementById("content").style.zIndex="1"
                    document.getElementById("container").style.opacity="0"
                    var mydiv = `<div>
                    <p> my name is : ${persondata.email} </p>
                    <h1 style=" color:blue"> ${persondata.email} </h1>
                    <h1>my street is: <span> ${persondata.address.street} </span></h1>
                    <p>my num: <span> ${persondata.phone} </span></p>
                    <p>website <span> ${persondata.website} </span></p>
                    </div>`
                    document.getElementById("content").innerHTML += mydiv;
    }
            }
        }