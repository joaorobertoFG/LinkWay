//carro1, carro2, carro3
let xCarros = [600, 600, 600]
let yCarros = [30, 90, 140]; 
let velocidadeCarros = [2, 3, 2.5];
let comprimentoCarro = 50;
let alturaCarro = 50;
//
let xCarros2 = [0, 0, 0];
let yCarros2 = [280, 250, 200];
let velocidadeCarros2 = [2, 3 ,2.5];
let comprimentoCarro2 = 40;
let alturaCarro2 = 50;

//Carros///////////////////////////
function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
      image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro)
      image(imagemCarros2[i], xCarros2[i], yCarros2[i], comprimentoCarro2, alturaCarro2) 
  }
}

function movimentaCarro(){
    for (let i = 0; i < imagemCarros.length; i++){
  xCarros[i] -= velocidadeCarros[i];
  xCarros2[i] += velocidadeCarros2[i];
  }
}

function carroReset(){
   for (let i = 0; i < imagemCarros.length; i++){
  if (passouTela(xCarros[i])){
      xCarros[i] = 600
      xCarros2[i] = -20
   }
  }
 }    
function passouTela(xCarros, xCarros2){
  return xCarros < -50
  return xCarros2 > 600
}

