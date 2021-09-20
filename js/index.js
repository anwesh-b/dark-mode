const bodyDom = document.querySelector('body');
const darkModeBtn = document.querySelector('#dark-mode');

let darkModeState = localStorage.getItem('practice-darkMode') || false;


if (!darkModeState) {
    console.log(darkModeState)
    bodyDom.classList.toggle('dark-mode');
}

darkModeBtn.addEventListener('click', (btn) => {
    darkModeState = !darkModeState;

    localStorage.setItem('practice-darkMode', darkModeState);
    bodyDom.classList.toggle('dark-mode');
})
