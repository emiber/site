// axios.get('./resources/data/data.json').then(res => {
//     console.log(res.data);
// });

const setBackGround = () => {
    const background = [{ img: 'bg_01.webp', el: 'moon' }, { img: 'bg_02.webp', el: 'sun' }];
    const index = Date.now() % 2;
    const main = document.querySelector('.main');
    const sunMoonEl = document.querySelector(`.${background[index].el}`);
    main.style.backgroundImage = `url('./resources/images/${background[index].img}')`;
    sunMoonEl.style.display = 'block';
}

setBackGround();

