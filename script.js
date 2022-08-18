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

const generateCard = () => {
    const gameBoard = document.querySelector(".game");
    const cardsInfo = getsCardsInfo();
    
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

        card.dataset.parrot = item.cardName;
        frontImg.src = item.frontSrc;
        backImg.src = "./assets/front.png";
        
        front.appendChild(frontImg);
        back.appendChild(backImg);
        card.appendChild(front);
        card.appendChild(back);
        gameBoard.appendChild(card);
    });    
    console.log(gameBoard);
};

generateCard();

const rotateCards = (e) => {    
    const event = e.currentTarget;
    event.classList.toggle("rotate");
}

document.querySelectorAll(".card").forEach(cards => cards.onclick = rotateCards); 