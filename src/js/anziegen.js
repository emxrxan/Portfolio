"use-strict";

const show_project = function(){
    document.querySelectorAll(".dropdown_project").forEach(element =>{
        element.classList.toggle("show_dropdown_project");
    });
}

const show_dropdown = function(){
    document.querySelector(".navigation_dropdown").classList.toggle("show_navigation_dropdown")
}

const set_darkmode = function(){
    document.querySelector("body").classList.toggle("darkmode");
    const button = document.querySelector(".darkmode-container > #button");
    if (button.querySelector(".material-symbols-outlined").innerText == "dark_mode"){
        button.querySelector(".material-symbols-outlined").innerText = "light_mode";
    } else {
        button.querySelector(".material-symbols-outlined").innerText = "dark_mode";
    }
}