const startWindow = document.querySelector('.startWindow');
const gameWindow = document.querySelector('.gameWindow');
const resultWindow = document.querySelector('.resultWindow');
const finalWindow = document.querySelector('.finalWindow');

const startButton = document.querySelector('.startButton');
const yesButton = document.querySelector('.yesButton');
const noButton = document.querySelector('.noButton');
const againButton = document.querySelector('.againButton');
const refreshButton = document.querySelector('.refresh');

const imgSuperHero = document.querySelector('.imgSuperHero');
const printText = document.querySelector('.commands h2');

const resultText = document.querySelector('.resultText');
const resultImage = document.querySelector('.resultImage');
const scoreImage = document.querySelector('.scoreImage');
const scoreText = document.querySelector('.scoreText');

const heroes = [
    {
        name: 'Homem de Ferro',
        url: 'https://cdn.newsapi.com.au/image/v1/2c1aa69edf09555cb8be6d109c459e70?width=650',
        status: 'yes',
    },
    {
        name: 'Capitão América',
        url: 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/42/1539599705-chris-evans-captain-america-beard-avengers-infinity-war-wakanda.jpg',
        status: 'yes',
    },
    {
        name: 'Homem-aranha',
        url: 'https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/5bc72e6153450aa3a775b950/1539780198994/spider.jpg?format=2500w',
        status: 'no',
    },
    {
        name: 'Pantera Negra',
        url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNjE4Mjk0MjY1MF5BMl5BanBnXkFtZTgwNzg2NjI5MzI@._V1_SX1777_CR0,0,1777,937_AL_.jpg',
        status: 'no',
    },
    {
        name: 'Viúva Negra',
        url: 'https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2018/11/black_widow_2.jpg',
        status: 'yes',
    },
    {
        name: 'Hulk',
        url: 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/37/1536914639-hulk-infinity-war.jpg',
        status: 'yes',
    },
    {
        name: 'Thor',
        url: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/09/Hd-Thor-Avengers-Infinity-War.jpg',
        status: 'yes',
    },
    {
        name: 'Wanda',
        url: 'https://media1.popsugar-assets.com/files/thumbor/XVfrMvH8MiCiCLVXyKTaWyrIOEU/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/04/27/810/n/1922283/tmp_mMWGwY_ea908dd4c7a0fa06_InfinityWar5ac2dbc1d1cae.jpg',
        status: 'no',
    },
    {
        name: 'Capitã Marvel',
        url: 'https://poltronanerd.com.br/wp-content/uploads/2017/08/7-capita-marvel.jpg',
        status: 'yes',
    }
    ,
    {
        name: 'Homem-formiga',
        url: 'https://fsmedia.imgix.net/f4/68/81/03/d193/499b/9980/8fd46309da83/theres-a-new-spin-on-a-popular-avengers-4-quantum-realm-theory.jpeg?rect=0%2C74%2C940%2C470&auto=format%2Ccompress&dpr=2&w=650',
        status: 'yes',
    }
];

let hero = heroes[Math.floor(Math.random() * heroes.length)];
heroes.splice(heroes.indexOf(hero), 1);

const printHero = function () {
    printText.innerHTML = `${hero.name} sobreviveu ao estalo do Thanos?`;
    imgSuperHero.style.backgroundImage = `url(${hero.url})`;
}

printHero();

let score = 10;

function checkYes() {
    if (hero.status === 'yes') {
        resultImage.style.backgroundImage = 'url(https://pbs.twimg.com/media/Dtikq_NX4AEu0Vk.jpg)';
        resultText.innerHTML = 'Acertou!'
    }
    else {
        resultImage.style.backgroundImage = 'url(https://observatoriodatelevisao.bol.uol.com.br/wp-content/uploads/2019/03/faustao.jpg)';
        resultText.innerHTML = 'Errooouu!';
        score -= 1;
    }
    gameWindow.classList.toggle('invisible');
    resultWindow.classList.toggle('invisible');
}

function checkNo() {
    if (hero.status === 'no') {
        resultImage.style.backgroundImage = 'url(https://pbs.twimg.com/media/Dtikq_NX4AEu0Vk.jpg)';
        resultText.innerHTML = 'Acertou!'
    }
    else {
        resultImage.style.backgroundImage = 'url(https://observatoriodatelevisao.bol.uol.com.br/wp-content/uploads/2019/03/faustao.jpg)';
        resultText.innerHTML = 'Errooouu!';
        score -= 1;
    }
    gameWindow.classList.toggle('invisible');
    resultWindow.classList.toggle('invisible');
}

function checkArray() {
    if (heroes.length === 0) {
        scoreImage.style.backgroundImage = 'url(https://image.redbull.com/rbcom/052/2018-04-23/d7e1c1d8-01c6-4876-af0a-78a3f26d2475/0012/0/0/92/650/1067/1500/1/manopla-do-infinito.jpg)';
        resultWindow.classList.toggle('invisible');
        finalWindow.classList.toggle('invisible');
        scoreText.innerHTML = `Você acertou ${score} de 10`
    }
}

function startGame() {
    startWindow.classList.toggle('invisible');
    gameWindow.classList.toggle('invisible');
};

function goBack() {
    checkArray();
    if (heroes.length !== 0) {
        hero = heroes[Math.floor(Math.random() * heroes.length)];
        printHero();
        heroes.splice(heroes.indexOf(hero), 1);
        resultWindow.classList.toggle('invisible');
        gameWindow.classList.toggle('invisible');
    }
}

startButton.onclick = startGame;
yesButton.onclick = checkYes;
noButton.onclick = checkNo;
againButton.onclick = goBack;
refreshButton.onclick = function refresh() {
    location.reload();
};

