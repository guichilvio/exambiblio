document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.view-btn');

    function handleSubscription(event) {
        const price = parseInt(event.target.getAttribute('data-price')); 

        if (price === 0) {
           
            window.location.href = `${event.target.getAttribute('data-book')}.pdf`; 
            return;
        }


        const hasSubscription = confirm("¿Ya tienes tu suscripción?");

        if (hasSubscription) {
           
            window.location.href = `${event.target.getAttribute('data-book')}-prueba.pdf`;
        } else {
        
            alert("¡Suscríbete para abrir este contenido!");
        }
    }

    buttons.forEach(button => {
        button.addEventListener('click', handleSubscription);
    });
});
