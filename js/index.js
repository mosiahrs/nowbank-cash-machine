let bankName = 'Now Bank';
let saldo = 500;
let opcaoSelecionada;
let encerrarPrograma = false;

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


const switchFunction = opcao => {
    const selecao = opcao;
    switch (selecao) {
        case 'saldo':
            alert(`Seu saldo é R$ ${saldo}`);
            break;
        case 'saque':
            let valorSaque = window.Number(prompt(` Digite o valor que deseja sacar "$"  `));
            if (valorSaque > saldo) {
                console.log('Saque não autorizado, valor indisponível');
            } else {
                saldo = saldo - valorSaque;
                alert(` O valor R$ ${valorSaque} foi autorizado`);
                alert(`Seu saldo atual é R$ ${saldo}`);
            }
            break;
        case 'deposito':
            valorDeposito = window.Number(prompt(` Digite o valor que deseja depositar "$" `));
            saldo = saldo + valorDeposito
            alert(`Seu saldo atual é R$ ${saldo}`);
            break;
        case 'encerrar':
            encerrarPrograma = true;
            alert(`O ${bankName} agradece a preferência, volte sempre!`);
            break;
        default:
            alert('Entrada inválida, escolha novamente a opção desejada');
    }
}











