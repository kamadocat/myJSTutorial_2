const changeColorButton = document.querySelector('#changeColorButton');
const backgroundWall = document.querySelector('.background-wall');
const colorChar = document.getElementsByClassName('colorChar');
const colorChars = document.querySelectorAll('.colorChar');

function generate_random_num(number) {
    return Math.floor(Math.random() * (number + 1));
}

function coloring() {
    for (let i = 0; i < colorChar.length; i++) {
        let rndCol = 'rgb(' + generate_random_num(200) + ',' + generate_random_num(200) + ',' + generate_random_num(200) + ')';
        colorChar[i].style.color = rndCol;
    }
}

changeColorButton.onclick = () => {
    const rndCol1 = 'rgb(' + generate_random_num(255) + ',' + generate_random_num(255) + ',' + generate_random_num(255) + ')';
    const rndCol2 = 'rgb(' + generate_random_num(255) + ',' + generate_random_num(255) + ',' + generate_random_num(255) + ')';
    document.body.style.background = 'linear-gradient(' + rndCol1 + ', ' + rndCol2 + ')';
    coloring();
    colorChars.forEach((cc) => { cc.removeEventListener('click', coloring) });
}

colorChars.forEach((cc) => { cc.addEventListener('click', coloring) })