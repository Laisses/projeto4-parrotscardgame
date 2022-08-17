const getsCardsInfo = () => [
    {frontSrc: "./assets/bobrossparrot.gif", backSrc: "./assets/front.png", cardName: "bobross"},
    {frontSrc: "./assets/explodyparrot", backSrc: "./assets/front.png", cardName: "explody"},    
    {frontSrc: "./assets/fiestaparrot", backSrc: "./assets/front.png", cardName: "fiesta"},
    {frontSrc: "./assets/metalparrot", backSrc: "./assets/front.png", cardName: "metal"},
    {frontSrc: "./assets/revertitparrot", backSrc: "./assets/front.png", cardName: "revertit"},
    {frontSrc: "./assets/tripletsparrot", backSrc: "./assets/front.png", cardName: "triplets"},
    {frontSrc: "./assets/unicornparrot", backSrc: "./assets/front.png", cardName: "unicorn"},
    {frontSrc: "./assets/bobrossparrot.gif", backSrc: "./assets/front.png", cardName: "bobross"},
    {frontSrc: "./assets/explodyparrot", backSrc: "./assets/front.png", cardName: "explody"},    
    {frontSrc: "./assets/fiestaparrot", backSrc: "./assets/front.png", cardName: "fiesta"},
    {frontSrc: "./assets/metalparrot", backSrc: "./assets/front.png", cardName: "metal"},
    {frontSrc: "./assets/revertitparrot", backSrc: "./assets/front.png", cardName: "revertit"},
    {frontSrc: "./assets/tripletsparrot", backSrc: "./assets/front.png", cardName: "triplets"},
    {frontSrc: "./assets/unicornparrot", backSrc: "./assets/front.png", cardName: "unicorn"},
];

const generateCard = () => {
    const gameBoard = document.querySelector(".game");

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
    
    gameBoard.appendChild(card);
    card.appendChild(front);
    front.appendChild(frontImg);
    card.appendChild(back);
    back.appendChild(backImg);

    console.log(gameBoard)
};

/*const rotateCards = (e) => {    
    const event = e.currentTarget;
    event.classList.toggle("rotate");
    console.log(event.dataset.parrot);
}

document.querySelectorAll(".card").forEach(cards => cards.onclick = rotateCards); */