var currentCard = "start";
var actions = [];


function showCard (which) {
    let a = document.getElementById (which);
    console.log(`showing card: ${which}`);
    let p = document.getElementById('present');

    p.replaceChildren();
    p.appendChild (a.cloneNode(true));
}

showCard("start");