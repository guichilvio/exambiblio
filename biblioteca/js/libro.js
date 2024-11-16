
function handleAccess(event) {
    const button = event.target;
    const type = button.getAttribute("data-type");
    const link = button.getAttribute("data-link");

    if (type === "free") {
       
        window.location.href = link;
    } else if (type === "paid") {
    
        alert("Este contenido requiere una suscripción activa. Por favor, suscríbete para acceder.");
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn-access");
    buttons.forEach(button => {
        button.addEventListener("click", handleAccess);
    });
});
