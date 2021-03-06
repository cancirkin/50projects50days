const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('panel-active');
    });
});

function removeActiveClasses(){
    panels.forEach((panel) => {
        panel.classList.remove('panel-active');
    });
}