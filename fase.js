function passaFase() {
    if (meusPontos >= 10) {
      background(cenarioDois);
      mostraAtor();
      mostraCarro();
      mostraHeart();
      pontos();
    }
  }

  function ganhaJogo() {
    if (meusPontos == 20) {
      background(fim);  
      tema.stop();
      win.loop();
      canvas.stop();
    }
  }