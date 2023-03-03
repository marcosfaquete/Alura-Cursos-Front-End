console.log("Hello World!");

function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomPom;

/*
    <<<    CÓDIGO QUE FUNCIONARIA MAS NÃO É O IDEAL    >>>

//  SOM POM ======================================================
function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}
document.querySelector('.tecla_pom').onclick = tocaSomPom;

//  SOM CLAP ======================================================
function tocaSomClap() {
    document.querySelector('#som_tecla_clap').play();
}
document.querySelector('.tecla_clap').onclick = tocaSomClap;

//  SOM TIM ======================================================
function tocaSomTim() {
    document.querySelector('#som_tecla_tim').play();
}
document.querySelector('.tecla_tim').onclick = tocaSomTim;

//  SOM PUFF ======================================================
function tocaSomPuff() {
    document.querySelector('#som_tecla_puff').play();
}
document.querySelector('.tecla_puff').onclick = tocaSomPuff;

//  SOM SPLASH ======================================================
function tocaSomSplash() {
    document.querySelector('#som_tecla_splash').play();
}
document.querySelector('.tecla_splash').onclick = tocaSomSplash;

//  SOM TOIM ======================================================
function tocaSomToim() {
    document.querySelector('#som_tecla_toim').play();
}
document.querySelector('.tecla_toim').onclick = tocaSomToim;

//  SOM PSH ======================================================
function tocaSomPsh() {
    document.querySelector('#som_tecla_psh').play();
}
document.querySelector('.tecla_psh').onclick = tocaSomPsh;

//  SOM TIC ======================================================
function tocaSomTic() {
    document.querySelector('#som_tecla_tic').play();
}
document.querySelector('.tecla_tic').onclick = tocaSomTic;

//  SOM TOM ======================================================
function tocaSomTom() {
    document.querySelector('#som_tecla_tom').play();
}
document.querySelector('.tecla_tom').onclick = tocaSomTom;
*/