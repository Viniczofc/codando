const array = [
  "Meu despertador não tocou e eu só acordei quando o vizinho começou a furar a parede.",
  "A internet caiu exatamente na hora que eu ia enviar.",
  "Meu computador resolveu atualizar sozinho e ficou 2 horas nisso.",
  "Confundi o prazo com o calendário da semana passada.",
  "Meu gato andou no teclado e fechou tudo sem salvar.",
  "O aplicativo travou e perdi o que tinha feito.",
  "Meu celular descarregou e eu não vi as mensagens.",
  "Tive um problema urgente aqui em casa.",
  "Passei mal durante a madrugada e precisei descansar.",
  "Achei que era para amanhã.",
  "O arquivo corrompeu e não consegui abrir de novo.",
  "Enviei, mas parece que deu erro no sistema.",
  "Fiquei preso no trânsito por causa de um acidente.",
  "Acordei com uma dor de cabeça absurda.",
  "Meu cachorro sumiu e eu precisei procurar.",
  "Deu um pico de energia aqui e desligou tudo.",
  "Eu anotei errado na agenda.",
  "O site simplesmente não carregava.",
  "Esqueci o carregador em outro lugar.",
  "Meu navegador fechou sozinho.",
  "Precisei resolver uma emergência familiar.",
  "Meu relógio estava com o horário errado.",
  "Confundi o link da reunião.",
  "Meu microfone não estava funcionando.",
  "O PDF ficou todo desconfigurado quando fui enviar.",
  "A plataforma saiu do ar bem na hora.",
  "Meu HD ficou cheio do nada.",
  "Eu salvei na pasta errada e não achei depois.",
  "Meu antivírus bloqueou o arquivo.",
  "Tive uma consulta que atrasou muito.",
  "Meu ônibus quebrou no caminho.",
  "O elevador travou e fiquei preso.",
  "Achei que já tinha enviado.",
  "Meu Wi-Fi resolveu reiniciar sozinho.",
  "Recebi uma ligação urgente no meio do processo.",
  "O teclado começou a falhar.",
  "Meu computador começou a fazer um barulho estranho e desliguei com medo.",
  "Confundi o horário por causa do fuso.",
  "Meu calendário não sincronizou.",
  "A luz piscou e perdi tudo.",
  "Estava finalizando quando o sistema saiu do ar.",
  "O arquivo ficou grande demais e não anexou.",
  "Meu backup não funcionou.",
  "Acordei atrasado porque meu celular atualizou durante a noite.",
  "Meu irmão usou meu computador e mudou tudo.",
  "O app pediu login de novo e eu não lembrava a senha.",
  "Meu cachorro mordeu o cabo do roteador.",
  "Estava aguardando confirmação e não vi o tempo passar.",
  "Meu bloco de notas não salvou automaticamente.",
  "Achei que tinha clicado em enviar, mas não foi."
];

const botao = document.getElementById('btn');

botao.addEventListener("click", function() {
    const random = Math.floor(Math.random() * array.length);
    document.getElementById('desculpa').textContent = array[random];
});

console.log(array.length)