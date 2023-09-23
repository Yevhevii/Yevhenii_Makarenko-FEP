const BLOCK = document.querySelector(`.block`);
let maxMoveBlockLeft, maxMoveBlockTop;

function getRandomIntInclusive(min = 0, max = 255) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomColor = ()=>{
    first = getRandomIntInclusive();
    second = getRandomIntInclusive();
    third = getRandomIntInclusive();
    return `rgb(${first}, ${second}, ${third})`
}

const randomMovingBlockLeft = (()=>{
    min = 0;
    max = maxMoveBlockLeft;
    return Math.floor(Math.random() * (max - min + 1)) + min;
})

const randomMovingBlockTop = (()=>{
    min = 0;
    max = maxMoveBlockTop;
    return Math.floor(Math.random() * (max - min + 1)) + min;
})

setInterval(()=>{
    const bodyWidth = document.body.clientWidth;
    const bodyHeight = document.body.clientHeight;
    maxMoveBlockLeft = bodyWidth - BLOCK.clientWidth;
    maxMoveBlockTop = bodyHeight - BLOCK.clientHeight;

    BLOCK.style.background = randomColor();
    BLOCK.style.top = randomMovingBlockTop() + `px`;
    BLOCK.style.left = randomMovingBlockLeft() + `px`;

},500);