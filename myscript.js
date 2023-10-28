function leftColumn() {
    const leftC = document.querySelector('#leftColumn');
    const leftCImg = document.querySelector('#leftColumn').getElementsByTagName('img')

    leftC.style.width = '5%';
    leftCImg[0].style.display = 'none';


    const rightC = document.querySelector('#rightColumn');
    const rightCImg = document.querySelector('#rightColumn').getElementsByTagName('img')

    rightC.style.width = '100%';
    rightCImg[0].style.display = 'inherit';
}

function rightColumn() {
    const rightC = document.querySelector('#rightColumn');
    const rightCImg = document.querySelector('#rightColumn').getElementsByTagName('img')

    rightC.style.width = '5%';
    rightCImg[0].style.display = 'none';


    const leftC = document.querySelector('#leftColumn');
    const leftCImg = document.querySelector('#leftColumn').getElementsByTagName('img')

    leftC.style.width = '100%';
    leftCImg[0].style.display = 'inherit';
}

function bothColumns() {
    const rightC = document.querySelector('#rightColumn');
    const rightCImg = document.querySelector('#rightColumn').getElementsByTagName('img')

    rightC.style.width = '100%';
    rightCImg[0].style.display = 'inherit';


    const leftC = document.querySelector('#leftColumn');
    const leftCImg = document.querySelector('#leftColumn').getElementsByTagName('img')

    leftC.style.width = '100%';
    leftCImg[0].style.display = 'inherit';
}