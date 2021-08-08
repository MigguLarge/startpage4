const logo_animation = bodymovin.loadAnimation({
    container: document.querySelector('.logo-container'), // Required
    path: 'file:///Users/junhyungchang/Documents/startpage4/src/jun_filled_stroke.json', // Required
    renderer: 'svg', // Required
    loop: false, // Optional
    autoplay: true, // Optional
    name: 'logo', // Name for future reference. Optional.
});

logo_animation.setSpeed(2);
