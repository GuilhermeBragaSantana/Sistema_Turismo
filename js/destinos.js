import { destinationData } from './destinationData.js';


const btn = document.querySelectorAll('.destinationButton');

btn.forEach(function(button){
    button.addEventListener('click', function() {
        console.log(button.dataset.destinationData)
    })
})


let currentDestination = 'itacare';