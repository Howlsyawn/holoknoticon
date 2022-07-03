const aboutSection = document.getElementById('about');
const orbSection = document.getElementById('orb');
const tableSection = document.getElementById('table');
const outlineSection = document.getElementById('outline');

const aboutButton = document.getElementById('aboutButton');
const orbButton = document.getElementById('orbButton');
const tableButton = document.getElementById('tableButton');
const outlineButton = document.getElementById('outlineButton');

function HideSections() {
    aboutSection.style.display = 'none';
    orbSection.style.display = 'none';
    tableSection.style.display = 'none';
    outlineSection.style.display = 'none';
    aboutButton.style.color = 'white';
    orbButton.style.color = 'white';
    tableButton.style.color = 'white';
    outlineButton.style.color = 'white';
    window.scrollTo(0, 0);
}
function about() {
    HideSections();
    aboutSection.style.display = 'block';
    aboutButton.style.color = 'red';
}
function orb() {
    HideSections();
    orbSection.style.display = 'block';
    orbButton.style.color = 'red';
}
function table() {
    HideSections();
    tableSection.style.display = 'block';
    tableButton.style.color = 'red';
}
function outline(string) {
    aboutButton.style.color = 'white';
    orbButton.style.color = 'white';
    tableButton.style.color = 'white';
    
    aboutSection.style.display = 'none';
    outlineSection.style.display = 'block';
    if (string == 'center') {
        outlineButton.style.color = 'rgb(192, 0, 0)';
    }
    else {        
        outlineButton.style.color = 'rgb(255, 128, 128)';
    }
    HideOutlines();
    let selected = document.getElementById(string);
    selected.style.display = 'block';
    window.scrollTo(0, 0);
}

function HideOutlines() {
    let outlines = document.getElementsByClassName('outline');
    for (let i = 0; i < outlines.length; i++) {
        outlines[i].style.display = 'none';
    }
}

orb();