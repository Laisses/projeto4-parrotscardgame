const rotateCards = (e) => {          
    e.currentTarget.classList.toggle("rotate");
}

document.querySelectorAll(".card").forEach(cards => cards.onclick = rotateCards);