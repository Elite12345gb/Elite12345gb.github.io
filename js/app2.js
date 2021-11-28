



const infos = document.querySelectorAll(".infot");


function info(){
for (let i = 0; i < infos.length; i++){
    if (!infos[i].classList.contains("alive")){
        infos[i].classList.add("alive");
       }
      
}
}
function infoleave(){
for (let i = 0; i < infos.length; i++){
    if (infos[i].classList.contains("alive")){
        infos[i].classList.remove("alive");
       }
       
}
}