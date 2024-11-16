
const cards = document.querySelectorAll('.plan-card');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.modal-overlay');
const form = document.getElementById('payment-form');

let selectedPlan = '';


cards.forEach(card => {
    card.addEventListener('click', () => {
        selectedPlan = card.dataset.plan;
        modal.style.display = 'block';
        overlay.style.display = 'block';
    });
});

overlay.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert(`La suscripción al plan ${selectedPlan} se realizó con éxito.`);
    modal.style.display = 'none';
    overlay.style.display = 'none';
});
