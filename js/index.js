const logo_container = document.querySelector('.logo-container')

const logo_animation = bodymovin.loadAnimation({
    container: logo_container,
    path: 'https://raw.githubusercontent.com/MigguLarge/startpage4/master/src/jun_filled_stroke.json',
    renderer: 'svg',
    loop: false,
    autoplay: true,
    name: 'logo',
});

logo_animation.setSpeed(2);

logo_container.addEventListener('click', (e) => {
    logo_animation.goToAndPlay(0, true)
})
