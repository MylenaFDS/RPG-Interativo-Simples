function escolha(opcao) {
    if (opcao === 1) {
        document.getElementById("story").textContent = "Você escolheu ir para a esquerda. Você encontra um rio e decide cruzá-lo.";
        document.getElementById("options").innerHTML = '<button onclick="escolha(3)">Nadar através do rio</button><button onclick="escolha(4)">Procurar uma ponte</button>';
    } else if (opcao === 2) {
        document.getElementById("story").textContent = "Você escolheu ir para a direita. Você se depara com um lobo feroz.";
        document.getElementById("options").innerHTML = '<button onclick="escolha(5)">Lutar contra o lobo</button><button onclick="escolha(6)">Fugir do lobo</button>';
    } else if (opcao === 3) {
        document.getElementById("story").textContent = "Você nada através do rio e chega ao outro lado com segurança. Você continua sua jornada.";
        document.getElementById("options").innerHTML = '<button onclick="escolha(1)">Continuar pela floresta</button>';
    } else if (opcao === 4) {
        document.getElementById("story").textContent = "Você procura uma ponte, mas não encontra nenhuma. O rio é muito largo para atravessar a nado.";
        document.getElementById("options").innerHTML = '<button onclick="escolha(1)">Voltar para a bifurcação</button>';
    } else if (opcao === 5) {
        document.getElementById("story").textContent = "Você luta corajosamente contra o lobo, mas infelizmente ele é muito poderoso e você é derrotado.";
        document.getElementById("options").innerHTML = '<button onclick="escolha(1)">Recomeçar o jogo</button>';
    } else if (opcao === 6) {
        document.getElementById("story").textContent = "Você foge do lobo e volta para a bifurcação. Escolha sabiamente na próxima vez!";
        document.getElementById("options").innerHTML = '<button onclick="escolha(1)">Voltar para a bifurcação</button>';
    }
}
