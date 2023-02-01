
function setup() {
  createCanvas(500, 400);
  tema.loop();
}
function draw(){
  background(cenario);
  mostraAtor();
  movimentaAtor();
  mostraCarro();
  movimentaCarro();
  carroReset();
  colisãoAtor();
  colisãoAtor2()
  pontos();
  marcaPonto();
  mostraHeart();
}

function mostraHeart(){
    image(heart, 5, 5, 25, 25)
}



