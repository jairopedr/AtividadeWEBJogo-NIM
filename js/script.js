/* 06 - JS: D.O.M. - JOGO DO NIM
Alunos: Jairo, Luana e Yan
Turma: 6° período BSI */
let total = 21;

function subtrair(n) {
  total -= n;
  document.getElementById('total').innerText = total;
  log('Novo total: ' + total);
  disableIllegalButtons();
}

document.getElementById('botao1').addEventListener("click", function(){subtrairPlayerEscolha(1); });//primeiro botão do jogador 1
document.getElementById('botao2').addEventListener("click", function(){subtrairPlayerEscolha(2); });//segundo botão do jogador 1
document.getElementById('botao3').addEventListener("click", function(){subtrairPlayerEscolha(3); });//terceiro botão do jogador 1
document.getElementById('botao1.2').addEventListener("click", function(){subtrairPlayerEscolha2(1); });//primeiro botão do jogador 2
document.getElementById('botao2.2').addEventListener("click", function(){subtrairPlayerEscolha2(2); });//segundo botão do jogador 2
document.getElementById('botao3.2').addEventListener("click", function(){subtrairPlayerEscolha2(3); });//terceiro botão do jogador 2

function subtrairPlayerEscolha(escolha) {
  log('Jogador 1 retirou ' + escolha);
  subtrair(escolha);
  setButtonsEnabled(false);
  if(total == 1) {
    log('<h2>JOGADOR 1 VENCEU!</h2>');
    document.getElementById('total').innerText += ' - JOGADOR 1 VENCEU!';
    setButtonsEnabled(false);//desativar botões
    document.getElementById('resetButton').style.display = 'block';
  } else {
    if(document.getElementById('computadorJogo').checked){
      log('Computador está pensando...')
      setTimeout(jogarComputador, 1000);//chamar função do computador após um tempo 
      document.getElementById('jogador2').style.display = 'none';
    }
    else {
      log('VEZ DO JOGADOR 2...');
      setButtonsEnabled(true);//ativar botoes
      subtrairPlayerEscolha2;
      document.getElementById('nivel').style.display = 'none';
      document.getElementById('mododeJogo').style.display = 'none';
    }
  }
}

function subtrairPlayerEscolha2(escolha) {
  log('Jogador 2 retirou ' + escolha);
  subtrair(escolha);
  setButtonsEnabled(false);
  if (total == 1) {
    log('<h2>JOGADOR 2 VENCEU!</h2>');
    document.getElementById('total').innerText += ' - JOGADOR 2 VENCEU!';
    setButtonsEnabled(false);//desativar botoes
    document.getElementById('botaoDeReset').style.display = 'block';
  } else{
    log('VEZ DO JOGADOR 1...');
    setButtonsEnabled(true);//ativar botoes
  }
}

function jogarComputador() {
  let escolha;

  if (document.getElementById('modoDificil').checked) {
    if (total % 4 == 1) {
      escolha = 1 + Math.floor(Math.random() * 3);
    } else {
      escolha = (total - 1) % 4;
    }
  } else{
    if(total == 2) {
      escolha = 1;
    } else if (total == 3) {
      escolha = 1 + Math.floor(Math.random() * 2);
    } else {
      escolha = 1 + Math.floor(Math.random() * 3);
    }
  }
  log('Computador subtrai ' + escolha);
  subtrair(escolha);

  if (total == 1) {
    log('<h2>COMPUTADOR GANHOU!</h2>');
    document.getElementById('total').innerText += ' - COMPUTADOR GANHOU!';
    setButtonsEnabled(false);
    document.getElementById('botaoDeReset').style.display = 'block';
  } else {
    setButtonsEnabled(true);
  }
}

function log(message) {
  document.getElementById('log').innerHTML += '<li>' + message + '</li>'
}
