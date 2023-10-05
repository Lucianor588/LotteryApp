/* script.js */

// Obtenemos la fecha actual del sistema en formato "ddd/mmm/aaaa"
const currentDate = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('es-ES', options);

// Mostramos la fecha actual en el elemento span
document.getElementById('current-date').textContent = formattedDate;

// Recuperamos los números de recomendación almacenados en el LocalStorage
const storedRecommendations = localStorage.getItem('recommendations');

// Verificamos si hay números almacenados y los mostramos
if (storedRecommendations) {
    try {
        const recommendations = JSON.parse(storedRecommendations);
        document.querySelector('.lottery-number:nth-child(1)').textContent = recommendations.number1 || '08';
        document.querySelector('.lottery-number:nth-child(2)').textContent = recommendations.number2 || '15';
        document.querySelector('.lottery-number:nth-child(3)').textContent = recommendations.number3 || '24';
    } catch (error) {
        console.error('Error al parsear los números de recomendación:', error);
    }
}
