let data = {};

axios.get('./resources/data/data.json').then(res => {
    data = res.data;

    setBackGround(data.background);
    setInterval(() => { setSunMoonColor(); }, 15000);
});

const setBackGround = (background) => {
    const index = Date.now() % background.length;
    const main = document.querySelector('.main');
    main.style.backgroundImage = `url('./resources/images/${background[index].img}')`;
    setSunMoonColor(background[index].color);
}

const setSunMoonColor = (color) => {
    const sunMoon = document.querySelector('.sunMoon');
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    sunMoon.style.backgroundColor = color ? color : '#'.concat(randomColor);
}