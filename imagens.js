function preload(){
  font = loadFont ('ReturnofGanon.ttf')
  cenario = loadImage('cenario/estrada.jpg')
  ator = loadImage('ator/ator-cima.png')
  atorMovimenta = [loadImage('ator/ator-cima.png'), loadImage('ator/ator-baixo.png'), loadImage('ator/ator-direita.png'), loadImage('ator/ator-esquerda.png')];
  carro1 = loadImage('carros/carro-1.png')
  carro2 = loadImage('carros/carro-2.png')
  carro3 = loadImage('carros/carro-3.png')
  carro4 = loadImage('carros/carro-4.gif')
  carro5 = loadImage('carros/carro-4.gif')
  carro6 = loadImage('carros/carro-4.gif')
  heart  = loadImage('heart.png')
  imagemCarros = [carro1, carro2, carro3] 
  imagemCarros2 = [carro4, carro5, carro6] 
  tema = loadSound  ('sons/tema.mp3')
  ponto = loadSound ('sons/heart piece 1.wav')
  hit = loadSound   ('sons/link hurt.wav')
}