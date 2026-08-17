const openBtn = document.querySelectorAll('.photoDestination')
const closeBtn = document.querySelectorAll('.spanPhotoDestination')
openBtn.forEach(function(openImg){
    openImg.addEventListener('click',() =>{
    openImg.classList.add('active');
    })
})

closeBtn.forEach(function(closeImg){
    closeImg.addEventListener('click',() =>{
        openBtn.forEach(function(openImg){
            openImg.classList.remove('active')
            console.log("ok")
        })
    })

})