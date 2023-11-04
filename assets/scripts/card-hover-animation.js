// Adiciona c=a classe spider-card-hovered conforme passa o mouse sobre a imagem, a aprtir da função addEventListenerToCards 
function handleMouseEnter () {
    // Adiciona uma nova classe a esse elemento
    this.classList.add('spider-card--hovered');
    // Pega id do elemento e coloca no body da página o nome do id + --hovered
    document.body.id = `${this.id}--hovered`;
}

//Remove o zoom da figura qunaod o mouse sair de cima
function handleMouseLeave () {
    this.classList.remove('spider-card--hovered');
    //Deixa vazia o id do body
    document.body.id = '';
}

//Pega o elemento spider-card conforme o mouse (mouseenter) passa por cima da figura
function addEventListnersToCards () {
    const cardElements = document.getElementsByClassName('spider-card');

    for (let index =0; index < cardElements.length; index++) {
        const card = cardElements[index];
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
    }
}

// Prevê o Estado/Evento do Documento
document.addEventListener("DOMContentLoaded", addEventListnersToCards, false);
