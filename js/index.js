let bankName = 'Now Bank';
let saldo = 500;
let opcaoSelecionada = "saldo";
let encerrarPrograma = false;

function mostrarSaldo() {
    let botaoSaldo = document.querySelector('#saldo').value
    alert(`${botaoSaldo}`)
};


function efetuarSaque(){
    let saque = document.querySelector('#saque').value
    alert(`${saque}`)
};

function efetuarDeposito(){
    let deposito = document.querySelector('#deposito').value
    alert(`${deposito}`)
};


function finalizar(){
let encerrar = document.querySelector('#encerrar').value
    alert(`${encerrar}`)
};

const selecao = opcaoSelecionada
switch (selecao) {
    case 'saldo':
        console.log(`Seu saldo é R$ ${saldo}`);
        break;
    case 'saque':
        let valorSaque = window.Number(prompt(` Digite o valor que deseja sacar "$"  `))
        if (valorSaque > saldo) {
            console.log('Saque não autorizado, valor indisponível')
        } else {
            saldo = saldo - valorSaque;
            console.log(` O valor R$ ${valorSaque} foi autorizado`)
            console.log(`Seu saldo atual é R$ ${saldo}`)
        }
        break;
    case 'deposito':
        valorDeposito = window.Number(prompt(` Digite o valor que deseja depositar "$" `))
        saldo = saldo + valorDeposito
        console.log(`Seu saldo atual é R$ ${saldo}`)
        break;
    case 'encerrar':
        encerrarPrograma = true;
        console.log(`O ${bankName} agradece a preferência, volte sempre!`)
        break;
    default:
        alert('Entrada inválida, escolha novamente a opção desejada')
}










