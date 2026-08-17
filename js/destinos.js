import { destinationData } from './destinationData.js';

const btn = document.querySelectorAll('.destinationButton');
function atualizarconteudo(destination){
    const data = destinationData[destination];
    btn.forEach(function(button){
        button.addEventListener('click', function() {
            //I kept the name "botão" in Portuguese to make it easier to read.
            btn.forEach(function(botao){
                botao.classList.remove('active')
            })
            button.classList.add('active');
            console.log(button.dataset.destination)
            atualizarconteudo(button.dataset.destination);
            console.log(data)
        })
        document.getElementById('nameDestiny').innerHTML = data.name;
        document.getElementById('historyDestiny').textContent = data.description;
        // Style of the first box
        document.getElementById('firstPhotoDestination').src = data.photos[0].src;
        document.getElementById('firstPhotoDestination').alt = data.photos[0].alt;
        document.querySelector('.firstPhotoDestination').style.backgroundColor = data.backgrounds[0];
        // Style of the second box
        document.getElementById('secondPhotoDestination').src = data.photos[1].src;
        document.getElementById('secondPhotoDestination').alt = data.photos[1].alt;
        document.querySelector('.secondPhotoDestination').style.backgroundColor = data.backgrounds[1];
        // Style of the third box
        document.getElementById('thirdPhotoDestination').src = data.photos[2].src;
        document.getElementById('thirdPhotoDestination').alt = data.photos[2].alt;
        document.querySelector('.thirdPhotoDestination').style.backgroundColor = data.backgrounds[2];
        // Style of the fourth box
        document.getElementById('fourthPhotoDestination').src = data.photos[3].src;
        document.getElementById('fourthPhotoDestination').alt = data.photos[3].alt;
        document.querySelector('.fourthPhotoDestination').style.backgroundColor = data.backgrounds[3];
})
}

atualizarconteudo("itacare");