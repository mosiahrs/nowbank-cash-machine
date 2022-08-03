let bankName = 'Now Bank';
let saldo = 1000;
let opcaoSelecionada;
let encerrarPrograma = false;

let depositoContainer = document.getElementById('depositoContainer')
let saqueContainer = document.getElementById('saqueContainer')
let intro = document.getElementById('intro')


function mostrarElementosDeposito() {
    intro.style.display = "none";
    saqueContainer.style.display = "none"
    depositoContainer.style.display = "block"
}
function mostrarElementosSaque() {
    intro.style.display = "none";
    depositoContainer.style.display = "none"
    saqueContainer.style.display = "block"
}

function calcularSaque(){
    let entrada = document.getElementById('saqueInput');
    let saida = document.getElementById('retornoInfo')
    valor = Number(entrada.value)
    if (valor > saldo) {
        saida.innerHTML = `Saque não autorizado, valor indisponível`;
    } else {
        saldo = saldo - valor;
        saida.innerHTML =` O valor R$ ${valor} foi autorizado`;
    }
}

function calcularDeposito() {
    let entrada = document.getElementById('depositoInput');
    let saida = document.getElementById('retornoInfo')
    valor = Number(entrada.value)
    saldo = saldo + valor;
    console.log(saldo)

    saida.innerHTML = `O depósito de R$ ${valor} foi efetuado com sucesso `
}

//Parametros - p/ Loop de Funcionamento
function mostrarSaldo() {
    opcaoSelecionada = 'saldo';
    switchFunction(opcaoSelecionada);
};

function efetuarSaque() {
    opcaoSelecionada = 'saque';
    switchFunction(opcaoSelecionada);
};

function efetuarDeposito() {
    opcaoSelecionada = 'deposito';
    switchFunction(opcaoSelecionada);
};

function finalizar() {
    opcaoSelecionada = 'encerrar';
    switchFunction(opcaoSelecionada);
};

//Loop de Funcionamento

const switchFunction = opcao => {
    const selecao = opcao;
    switch (selecao) {
        case 'saldo':
            let retorno = document.getElementById('retornoInfo').innerHTML = `
            <p> 
            <strong>Você escolheu a opção SALDO</strong> <br>Seu saldo é R$ ${saldo}
            </p>
            `
            console.log(`Seu saldo é R$ ${saldo}`);
            break;
        case 'saque':
            mostrarElementosSaque()
            /*let valorSaque = window.Number(prompt(` Digite o valor que deseja sacar "$"  `));
            if (valorSaque > saldo) {
                alert('Saque não autorizado, valor indisponível');
            } else {
                saldo = saldo - valorSaque;
                alert(` O valor R$ ${valorSaque} foi autorizado`);
                alert(`Seu saldo atual é R$ ${saldo}`);
            }*/
            break;
        case 'deposito':
            mostrarElementosDeposito() /*
            valorDeposito = window.Number(prompt(` Digite o valor que deseja depositar "$" `));
            saldo = saldo + valorDeposito
            alert(`Seu saldo atual é R$ ${saldo}`); */
            break;
        case 'encerrar':
            let finalizaExecucao = document.getElementById('retornoInfo').innerHTML = `
            <p> 
            O <strong> ${bankName} </strong> agradece a preferência, volte sempre!
            </p>
            `
            encerrarPrograma = true;
            console.log(`O ${bankName} agradece a preferência, volte sempre!`);
            const reset = setTimeout(resetarTela, 2000);
            function resetarTela() {
                location.reload();
            }
            break;
        default:
            alert('Entrada inválida, escolha novamente a opção desejada');
    }
}










