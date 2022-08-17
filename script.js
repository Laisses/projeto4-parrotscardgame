const rotateCards = (e) => {
    console.log(e.target);
        
    
}

document.querySelectorAll(".card").forEach(cards => cards.onclick = rotateCards);