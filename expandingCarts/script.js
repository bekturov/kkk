const panels = document.querySelectorAll('.panel')
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses() 
            panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
function changeColor(element){
    element.style.color="rgb(64, 44, 87)"
}
function backColor(element){
    element.style.color="rgb(250, 248, 252)"
}