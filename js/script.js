// Seleciona os elementos
const textArea = document.querySelector('.text-area');
const resposta = document.querySelector('.resposta');
const btnCriptografar = document.querySelector('.btn-criptografar');
const btnDescriptografar = document.querySelector('.btn-desencriptar');
const btnCopiar = document.querySelector('.btn-copiar');
const imagemBoneco = document.querySelector('.imagem-boneco'); 

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

// Função de mostrar mensagem de erro
function mostrarMensagemErro(mensagem) {
    alert(mensagem);
}

// Adiciona eventos de clique aos botões
if (textArea && resposta && btnCriptografar && btnDescriptografar && btnCopiar && imagemBoneco) {
    btnCriptografar.addEventListener('click', () => {
        const texto = textArea.value.trim();

        if (validarTexto(texto)) {
            resposta.value = criptografarTexto(texto);
            textArea.value = '';
            btnCopiar.style.display = 'block'; 
            imagemBoneco.style.display = 'none';
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
            imagemBoneco.style.display = 'none'; 
        } else {
            mostrarMensagemErro('Texto inválido! Use apenas letras minúsculas e espaços.');
        }
    });

    btnCopiar.addEventListener('click', () => {
        navigator.clipboard.writeText(resposta.value).then(() => {
            alert('Texto copiado!');
            const colar = confirm('Deseja colar o texto copiado?');
            if (colar) {
                textArea.value = resposta.value;
                resposta.value = ''; 
            }
        }).catch(err => {
            console.error('Erro ao copiar o texto: ', err);
            mostrarMensagemErro('Erro ao copiar o texto. Verifique o console para mais detalhes.');
        });
    });

    // Inicialmente, a imagem é visível e o botão copiar está escondido
    btnCopiar.style.display = 'none';
    imagemBoneco.style.display = 'block';
} else {
    console.error('Um ou mais elementos não foram encontrados.');
    mostrarMensagemErro('Um ou mais elementos não foram encontrados. Verifique o console para mais detalhes.');
}
