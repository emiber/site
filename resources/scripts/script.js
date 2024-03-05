const images = ['bg_01.webp', 'bg_02.webp'];

const getBGImage = () => {
    const index = Math.floor(Math.random() * 2);
    return images[index];
}

axios.get('./resources/data/data.json').then(res => {
    console.log(res.data);
});

const main = document.querySelector('.main');
main.style.backgroundImage = `url('./resources/images/${getBGImage()}')`;
