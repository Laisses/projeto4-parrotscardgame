const getsCardsInfo = () => [
    {frontSrc: "./assets/bobrossparrot.gif", cardName: "bobross"},
    {frontSrc: "./assets/explodyparrot.gif", cardName: "explody"},    
    {frontSrc: "./assets/fiestaparrot.gif", cardName: "fiesta"},
    {frontSrc: "./assets/metalparrot.gif", cardName: "metal"},
    {frontSrc: "./assets/revertitparrot.gif", cardName: "revertit"},
    {frontSrc: "./assets/tripletsparrot.gif", cardName: "triplets"},
    {frontSrc: "./assets/unicornparrot.gif", cardName: "unicorn"},
    {frontSrc: "./assets/bobrossparrot.gif", cardName: "bobross"},
    {frontSrc: "./assets/explodyparrot.gif", cardName: "explody"},    
    {frontSrc: "./assets/fiestaparrot.gif", cardName: "fiesta"},
    {frontSrc: "./assets/metalparrot.gif", cardName: "metal"},
    {frontSrc: "./assets/revertitparrot.gif", cardName: "revertit"},
    {frontSrc: "./assets/tripletsparrot.gif", cardName: "triplets"},
    {frontSrc: "./assets/unicornparrot.gif", cardName: "unicorn"},
];

const randomizeCards = (array) => array.sort(() => Math.random() - 0.5);

const generateCard = () => {
    const gameBoard = document.querySelector(".game");
    const cardsInfo = randomizeCards(getsCardsInfo());

    cardsInfo.forEach(item => {
        const card = document.createElement("div");
        const front = document.createElement("div");
        const frontImg = document.createElement("img");
        const back = document.createElement("div");
        const backImg = document.createElement("img");

        card.classList = "card";
        front.classList = "card__face";
        back.classList = "card__face";
        front.classList.add("card__face--front");
        back.classList.add("card__face--back");

        card.setAttribute("data-parrot", item.cardName);
        frontImg.src = item.frontSrc;
        backImg.src = "./assets/front.png";
        
        front.appendChild(frontImg);
        back.appendChild(backImg);
        card.appendChild(front);
        card.appendChild(back);
        gameBoard.appendChild(card);
    });
};

generateCard();

const gameOver = () => {
    const matchedCards = document.querySelectorAll(".not-clickable");
    if (matchedCards.length === 14) {
        alert("Acabou o jogo!");
    }
}

const checkCards = (target) => {
    const flippedCard = target;
    flippedCard.classList.add("flipped");

    const flippedCards = document.querySelectorAll(".flipped");    

    if (flippedCards.length === 2) {
        if (flippedCards[0].getAttribute("data-parrot") === flippedCards[1].getAttribute("data-parrot")) {           
            flippedCards.forEach(card => {
                card.classList.remove("flipped");
                card.classList.add("not-clickable");
            });
        } else {
            flippedCards.forEach(card => {
                card.classList.remove("flipped");
                setTimeout(() => card.classList.remove("rotate"), 1000);
            });
        };
    };

    setTimeout(() => gameOver(), 500);
};

const rotateCards = (e) => {
    const event = e.currentTarget;
    event.classList.toggle("rotate");
    checkCards(event);
}

document.querySelectorAll(".card").forEach(cards => cards.onclick = rotateCards);

