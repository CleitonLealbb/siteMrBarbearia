// função para mudar imagem de fundo
let currentIndex = 0;
function changeBackgroundImage() {
    const images = [
        'url("./src/assets/images/imagem1.svg")',
        'url("./src/assets/images/imagem2.svg")',
        
    ];
    
    document.querySelector('.section--story-imgs').style.backgroundImage = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;

}setInterval(changeBackgroundImage, 3000);
