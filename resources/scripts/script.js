// axios.get('./resources/data/data.json').then(res => {
//     console.log(res.data);
// });


const background = [
    { img: 'bg_01.webp', el: 'moon' },
    { img: 'bg_02.webp', el: 'sun' },
    { img: 'bg_03.webp', el: 'moon' },
    { img: 'bg_04.webp', el: 'moon' },
    { img: 'bg_06.webp', el: 'sunRed' },
    { img: 'bg_07.webp', el: 'sun' },
    { img: 'bg_08.webp', el: 'sun' },
    { img: 'bg_09.webp', el: 'sun' },
    { img: 'bg_10.webp', el: 'sun' },
];

const setBackGround = () => {
    // const background = [{ img: 'bg_01.webp', el: 'moon' }, { img: 'bg_02.webp', el: 'sun' }];
    const index = Date.now() % background.length;
    const main = document.querySelector('.main');
    const sunMoonEl = document.querySelector(`.${background[index].el}`);
    main.style.backgroundImage = `url('./resources/images/${background[index].img}')`;
    sunMoonEl.style.display = 'block';
}

setBackGround();

