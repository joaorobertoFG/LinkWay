//Ator///////////
let xAtor = 200
let yAtor = 345
let comprimentoAtor = 40
let alturaAtor = 50
let colisão = false
let meusPontos = 0;

function mostraAtor(){
    image(ator, xAtor, yAtor, comprimentoAtor, alturaAtor)
}

//movimento
function movimentaAtor(){
 
  if (keyIsDown(87)){ 
    yAtor -= 3;  //CIMA (W)
    ator = atorMovimenta [0]
  }
  if (keyIsDown(83)){ 
    if (podeSeMover()){
      yAtor -= -3; //BAIXO (S)
    ator = atorMovimenta [1]
  } 
}
  if (keyIsDown(68)){
    if (podeSeMover2()){
    xAtor -= -3; //DIREITA (D)
    ator = atorMovimenta [2]
  }
}   
  if (keyIsDown(65)){
     if (podeSeMover3()){
    xAtor -= 3; //ESQUERDA (A)
    ator = atorMovimenta [3]   
    }
  }
}

//Colisão
function colisãoAtor(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisão = collideRectCircle(xCarros[i], yCarros [i], comprimentoCarro, alturaCarro, xAtor, yAtor, 10)
    if (colisão){
      colidiu();
      hit.play()
      if (maiorQueZero()) {
          meusPontos -= 1;
      }
    }
  }   
}
function colidiu(){
  yAtor = 345
}
function colisãoAtor2(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length;  i++){
    colisão = collideRectCircle(xCarros2 [i], yCarros2 [i], comprimentoCarro2, alturaCarro2, xAtor, yAtor, 10)
    if (colisão){
      colidiu();
      hit.play()
      if (maiorQueZero()) {
          meusPontos -= 1;
      }   
    }
  }   
}
function colidiu(){
  yAtor = 345
}

function pontos(){
  text(meusPontos, width /14, 32)
  textSize(35)
  textFont(font)
  fill(255,255,255)
}

function marcaPonto(){
  if (yAtor < 0){
    meusPontos += 1;
    colidiu();
    ponto.play()
  }
}
function maiorQueZero(){
  return meusPontos > 0
}
function podeSeMover(){
  return yAtor < 347
  
}
function podeSeMover2(){
  return xAtor < 460
}
function podeSeMover3(){
  return xAtor > -5
}