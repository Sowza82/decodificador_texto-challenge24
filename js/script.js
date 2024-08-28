// Seleciona os elementos necessários
const textArea = document.querySelector('.text-area');
const resposta = document.querySelector('.resposta');
const btnCriptografar = document.querySelector('.btn-criptografar');
const btnDescriptografar = document.querySelector('.btn-desencriptar');
const btnCopiar = document.querySelector('.btn-copiar');
const imagemFront = document.querySelector('.imagem-front'); 
const charCount = document.getElementById('charCount');
const mensagemTemporaria = document.getElementById('mensagem-temporaria');
const backToTopButton = document.querySelector('.back-to-top'); // Novo: botão voltar ao topo

// Função para validar o texto
function validarTexto(texto) {
    const regex = /^[a-z\s]*$/;
    return regex.test(texto);
}

// Função de criptografar
function criptografarTexto(texto) {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

// Função de descriptografar
function descriptografarTexto(texto) {
    return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

// Função para mostrar a mensagem de erro
function mostrarMensagemErro(mensagem) {
    alert(mensagem);
}

// Função para atualizar o contador de caracteres
function atualizarContador() {
    const length = textArea.value.length;
    charCount.textContent = length;
}

// Função para mostrar a mensagem temporária
function exibirMensagemTemporaria(texto) {
    mensagemTemporaria.textContent = texto;
    mensagemTemporaria.style.display = 'block';
    setTimeout(() => {
        mensagemTemporaria.style.display = 'none';
    }, 3000);
}

// Função para tocar som
function tocarSom(caminho) {
    const audio = new Audio(caminho);
    audio.play();
}

// Função para mostrar/ocultar o botão "Voltar ao Topo"
function mostrarBotaoVoltarTopo() {
    if (window.scrollY > 300) { // Ajuste o valor para quando o botão aparecer
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
}

// Adiciona eventos aos botões
if (textArea && resposta && btnCriptografar && btnDescriptografar && btnCopiar && imagemFront && backToTopButton) {
    textArea.addEventListener('input', atualizarContador);

    btnCriptografar.addEventListener('click', () => {
        const texto = textArea.value.trim();

        if (validarTexto(texto)) {
            resposta.value = criptografarTexto(texto);
            textArea.value = '';
            btnCopiar.style.display = 'block';
            imagemFront.style.display = 'none';
            exibirMensagemTemporaria('Texto criptografado com sucesso!');
            tocarSom('assets/sucesso.mp3');  // Adicione o caminho do som de sucesso
        } else {
            mostrarMensagemErro('Texto inválido! Use apenas letras minúsculas e espaços.');
        }
    });

    btnDescriptografar.addEventListener('click', () => {
        const texto = textArea.value.trim();

        if (validarTexto(texto)) {
            resposta.value = descriptografarTexto(texto);
            textArea.value = '';
            btnCopiar.style.display = 'block';
            imagemFront.style.display = 'none';
            exibirMensagemTemporaria('Texto descriptografado com sucesso!');
            tocarSom('assets/sucesso.mp3');  // Adicione o caminho do som de sucesso
        } else {
            mostrarMensagemErro('Texto inválido! Use apenas letras minúsculas e espaços.');
        }
    });

    btnCopiar.addEventListener('click', () => {
        navigator.clipboard.writeText(resposta.value).then(() => {
            exibirMensagemTemporaria('Texto copiado para a área de transferência!');
            tocarSom('assets/copiado.mp3');  // Adicione o caminho do som de cópia
            const colar = confirm('Deseja colar o texto copiado?');
            if (colar) {
                textArea.value = resposta.value;
                resposta.value = '';
            }
            btnCopiar.style.display = 'none';
            imagemFront.style.display = 'block';
        }).catch(err => {
            console.error('Erro ao copiar o texto: ', err);
            mostrarMensagemErro('Erro ao copiar o texto. Verifique o console para mais detalhes.');
        });
    });

    // Inicialmente, a imagem é visível e o botão copiar está escondido
    btnCopiar.style.display = 'none';
    imagemFront.style.display = 'block';

    // Evento de rolagem para mostrar/ocultar o botão "Voltar ao Topo"
    window.addEventListener('scroll', mostrarBotaoVoltarTopo);

    // Evento de clique para rolar suavemente até o topo
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
} else {
    console.error('Um ou mais elementos não foram encontrados.');
    mostrarMensagemErro('Um ou mais elementos não foram encontrados. Verifique o console para mais detalhes.');
}
