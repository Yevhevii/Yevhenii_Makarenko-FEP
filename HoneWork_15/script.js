const BLOCK = document.querySelector(`.block`);
BLOCK.style.left = 0;
BLOCK.style.top = 0;

setInterval(()=>{
    const bodyWidth = document.body.clientWidth;
    const bodyHeight = document.body.clientHeight;
    const maxMoveBlockLeft = bodyWidth - BLOCK.clientWidth;
    const maxMoveBlockTop = bodyHeight - BLOCK.clientHeight;

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

    BLOCK.style.background = randomColor();
    BLOCK.style.top = randomMovingBlockTop() + `px`;
    BLOCK.style.left = randomMovingBlockLeft() + `px`;

},500);