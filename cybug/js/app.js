function toggle(){
    if (document.querySelector("#dec_ul").style.display == "none"){
        document.querySelector("#dec_ul").style.display = "flex";  
        document.querySelector("header").style.position = "fixed";
        document.querySelector(".crossed").style.display = "block"; 
        document.querySelector(".menu_bar").style.display = "none";   
    }
    else{
        document.querySelector("#dec_ul").style.display = "none";
        document.header.style.position = "relative";}
};
function tot(){
    document.querySelector(".menu_bar").style.display = "block";
    document.querySelector(".crossed").style.display = "none";
    document.querySelector("#dec_ul").style.display = "none";
        document.header.style.position = "relative";
}
function toggle2(){
    if (document.querySelector(".shiny").style.display == "none"){
        document.querySelector(".shiny").style.display = "block";
        document.querySelector(".pop").style.display = " none";
        document.querySelector(".cross").style.display = "block";
          
    }
    else{
        document.querySelector(".shiny").style.display = "none";
    }
};
 function toggle3(){
    document.querySelector(".shiny").style.display = "none";
    document.querySelector(".pop").style.display = " block";
    document.querySelector(".cross").style.display = "none";
 }

function home(){
    location.assign("#home");
    document.querySelector(".shiny").style.display = "none";
    document.querySelector(".pop").style.display = " block";
    document.querySelector(".cross").style.display = "none";
}
function abt(){
    location.assign("#about");
    document.querySelector(".shiny").style.display = "none";
    document.querySelector(".pop").style.display = " block";
    document.querySelector(".cross").style.display = "none";
}
function srv(){
    location.assign("#service");
    document.querySelector(".shiny").style.display = "none";
    document.querySelector(".pop").style.display = " block";
    document.querySelector(".cross").style.display = "none";
}
function port(){
    location.assign("#recent");
    document.querySelector(".shiny").style.display = "none";
    document.querySelector(".pop").style.display = " block";
    document.querySelector(".cross").style.display = "none";
}
function contact(){
    location.assign("#contact");
    document.querySelector(".shiny").style.display = "none";
    document.querySelector(".pop").style.display = " block";
    document.querySelector(".cross").style.display = "none";
}






