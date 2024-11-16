
function handleWatchButton(event) {
    const videoUrl = event.target.getAttribute("data-video"); 
    const userResponse = confirm("¿Ya tienes tu suscripción?");
    if (userResponse) {
     
        window.location.href = videoUrl;
    } else {

        alert("¡Suscríbete para abrir este contenido!");
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn-watch");
    buttons.forEach(button => {
        button.addEventListener("click", handleWatchButton);
    });
});
