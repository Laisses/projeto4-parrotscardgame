const getsCardsInfo = () => [
    {frontSrc: "./assets/bobrossparrot.gif", cardName: "bobross"},
    {frontSrc: "./assets/bobrossparrot.gif", cardName: "bobross"},
    {frontSrc: "./assets/explodyparrot.gif", cardName: "explody"},
    {frontSrc: "./assets/explodyparrot.gif", cardName: "explody"},
    {frontSrc: "./assets/fiestaparrot.gif", cardName: "fiesta"},
    {frontSrc: "./assets/fiestaparrot.gif", cardName: "fiesta"},
    {frontSrc: "./assets/metalparrot.gif", cardName: "metal"},
    {frontSrc: "./assets/metalparrot.gif", cardName: "metal"},
    {frontSrc: "./assets/revertitparrot.gif", cardName: "revertit"},
    {frontSrc: "./assets/revertitparrot.gif", cardName: "revertit"},
    {frontSrc: "./assets/tripletsparrot.gif", cardName: "triplets"},
    {frontSrc: "./assets/tripletsparrot.gif", cardName: "triplets"}, 
    {frontSrc: "./assets/unicornparrot.gif", cardName: "unicorn"},{frontSrc: "./assets/unicornparrot.gif", cardName: "unicorn"},
];

const randomizeCards = (array) => array.sort(() => Math.random() - 0.5);

const generateCard = (n) => {
    const gameBoard = document.querySelector(".game");
    const cardsInfo = randomizeCards(getsCardsInfo().slice(0, n));

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
        card.onclick = rotateCards;
        gameBoard.appendChild(card);
    });
};

const gameOver = () => {
    const cards = document.querySelectorAll(".card");
    const matchedCards = document.querySelectorAll(".not-clickable");
   
    if (matchedCards.length === cards.length) {
        alert(`Você ganhou em ${count} jogadas`);
        clearInterval(id);
        restartGame();
    };
};

const restartGame = () => {
    const reply = (prompt("Você quer jogar de novo?") || "").toLowerCase();

    if (reply === "sim") {
        document.querySelector(".game").innerHTML = "";
        initializeGame();
    };
};

const rotateCards = (e) => {
    const event = e.currentTarget;
    const flipped = document.querySelectorAll(".flipped");
    if (flipped.length === 2) {
        return;
    };
    event.classList.toggle("rotate");
    checkCards(event);
};

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
                setTimeout(() => {
                    card.classList.remove("flipped");
                    card.classList.remove("rotate");
                }, 1000);
            });
        };
    };

    setTimeout(() => gameOver(), 500);
};

let count = 0;
const clickCounter = () => {
    const cards = document.querySelectorAll(".card");    

    cards.forEach(card => card.addEventListener("click", () => {
        count += 1;
    }));
};

let time = 0;
let id;
const startTimer = () => {
    const clock = document.querySelector(".timer__clock");
    time++;
    clock.innerText = time;
}

const initializeGame = () => {
    const numberOfCards = prompt("Com quantas cartas você quer jogar? Escolha um número par entre 4 e 14");
    if (numberOfCards >= 4 && numberOfCards <= 14 && numberOfCards % 2 === 0) {
        generateCard(numberOfCards);
        count = 0;
        time = 0;
        clickCounter();
        id = setInterval(startTimer, 1000);
    } else {
        return initializeGame();
    };
};

initializeGame();