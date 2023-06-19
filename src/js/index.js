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
    const button = document.querySelector("#darkmode-container");
    if (button.querySelector(".material-symbols-outlined").innerText == "dark_mode"){
        button.querySelector(".material-symbols-outlined").innerText = "light_mode";
    } else {
        button.querySelector(".material-symbols-outlined").innerText = "dark_mode";
    }
}


document.querySelector("#send_mail").addEventListener("submit", (data)=>{
        data.preventDefault();
        const name = data.target.elements.name.value;
        const email = data.target.elements.email.value;
        const message = data.target.elements.message.value;
        
        try{
            emailjs.send("service_t1pe6mf","template_xajg445",{
                from_name: `${name}`,
                email_id: `${email}`,
                message: `${message}`
            });

            alert("Erfolgreich gesendet.");
            data.target.reset();
        } catch(error){
            alert("Senden fehlgeschlagen. Bitte später wieder versuchen.");
        }
});
