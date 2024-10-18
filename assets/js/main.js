import MultiversoController from "./controllers/MultiversoController.js";

new MultiversoController().iniciar();

const mainAElements = document.getElementsByClassName('main-a');

for (let i = 0; i < mainAElements.length; i++) {
    const element = mainAElements[i];
    element.addEventListener('click', () => {
        new MultiversoController().mostrarPrimeiroFilme(element.textContent);
    });
}