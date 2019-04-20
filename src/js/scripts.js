const startWindow = document.querySelector('.startWindow');
const gameWindow = document.querySelector('.gameWindow');
const resultWindow = document.querySelector('.resultWindow');

const startButton = document.querySelector('.startButton');
const yesButton = document.querySelector('.yesButton');
const noButton = document.querySelector('.noButton');
const againButton = document.querySelector('.againButton');

const imgSuperHero = document.querySelector('.imgSuperHero');
const printText = document.querySelector('.commands h2');

const resultImage = document.querySelector('.resultImage');
const resultText = document.querySelector('.resultText');

const heroes = [
    {
        name: 'Homem de Ferro',
        url: 'https://cdn.newsapi.com.au/image/v1/2c1aa69edf09555cb8be6d109c459e70?width=650',
        status: 'no',
    },
    {
        name: 'Capitão América',
        url: 'https://img.cinemablend.com/quill/b/c/d/1/a/a/bcd1aa35c7ffc7436f280145f32dabc4eb3ab214.jpg',
        status: 'no',
    },
    {
        name: 'Homem-aranha',
        url: 'https://nerdist.com/wp-content/uploads/2017/06/tom-holland-1.jpg',
        status: 'yes',
    }
];

let hero = heroes[Math.floor(Math.random() * heroes.length)];

const printHero = function() {
    printText.innerHTML = `${hero.name} morreu no estalo do Thanos?`;
    imgSuperHero.src = hero.url;
}

printHero();

function checkYes() {
    gameWindow.classList.toggle('invisible');
    resultWindow.classList.toggle('invisible');
    
    if(hero.status === 'yes'){
        resultImage.src = 'https://pbs.twimg.com/media/Dtikq_NX4AEu0Vk.jpg';
        resultText.innerHTML = 'Acertou!'
    }
    else {
        resultImage.src = 'https://www.altoastral.com.br/wp-content/uploads/2016/10/faustao.jpg';
        resultText.innerHTML = 'Errooouu!'
    }
}

function checkNo () {
    gameWindow.classList.toggle('invisible');
    resultWindow.classList.toggle('invisible');
    
    if(hero.status === 'no'){
        resultImage.src = 'https://pbs.twimg.com/media/Dtikq_NX4AEu0Vk.jpg';
        resultText.innerHTML = 'Acertou!'
    }
    else {
        resultImage.src = 'https://www.altoastral.com.br/wp-content/uploads/2016/10/faustao.jpg';
        resultText.innerHTML = 'Errooouu!'
    }
}

function startGame() {
    startWindow.classList.toggle('invisible');
    gameWindow.classList.toggle('invisible');
};

function reload (){
    hero = heroes[Math.floor(Math.random() * heroes.length)];
    printHero();
    resultWindow.classList.toggle('invisible');
    gameWindow.classList.toggle('invisible');
}

startButton.onclick = startGame;
yesButton.onclick = checkYes;
noButton.onclick = checkNo;
againButton.onclick = reload;