import { destinationData } from './destinationData.js';

const btn = document.querySelectorAll('.destinationButton');

btn.forEach(function(button){
    button.addEventListener('click', function() {
        //I kept the name "botão" in Portuguese to make it easier to read.
        btn.forEach(function(botao){
            botao.classList.remove('active')
        })
        button.classList.add('active');
        console.log(button.dataset.destination)
        const destination = button.dataset.destination;
        const data = destinationData[destination];
        document.getElementById('nameDestiny').innerHTML = data.name;
        document.getElementById('historyDestiny').textContent = data.description;
        document.getElementById('imgDestiny-first') = style.backgroung-color : yellow;
    })
})
