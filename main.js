const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop:true,
    delay:75
});

typewriter
    .typeString('Calendario WRC 2022')
    .pauseFor(2000)
    .start();


