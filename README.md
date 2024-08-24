# Challenge Decodificador de Texto

## Descrição

Este projeto é uma aplicação de criptografia e descriptografia de texto, desenvolvido como parte do curso "Iniciante em Programação T7" oferecido pela ONE (Oracle + Alura). O objetivo é permitir que o usuário insira um texto e o criptografe ou descriptografe usando regras específicas. Além disso, o usuário pode copiar o texto resultante para a área de transferência. A aplicação possui uma interface responsiva, garantindo uma boa experiência em dispositivos móveis.

## Funcionalidades

- **Criptografar Texto**:  Substitui caracteres específicos por strings predefinidas.
- **Descriptografar Texto**: Reverte a criptografia, retornando o texto original.
- **Copiar Texto**: Copia o resultado da criptografia/descriptografia para a área de transferência.
- **Interface Responsiva**: Adaptada para diferentes tamanhos de tela, oferecendo uma boa experiência em dispositivos móveis.
- **Alertas**: Notifica o usuário com mensagens de alerta em situações específicas, como quando o texto é copiado ou se nenhum texto for inserido.
  
## Tecnologias Utilizadas

- **HTML5**: Para a estrutura do site.
- **CSS3**: Para estilização e responsividade.
- **JavaScript**: Para a lógica de criptografia, descriptografia e interação com o usuário.

## Capturas de Tela

![Captura de tela da aplicação](./imgs/challenge.png)
![Captura de tela da aplicação](./imgs/challenge.png)

## Como Usar

1. Digite o texto na área designada.
2. Clique em "Criptografar!" para aplicar a criptografia ou em "Descriptografar!" para reverter o texto.
3. O resultado aparecerá na área de resposta.
4. Clique em "Copiar" para copiar o texto criptografado/descriptografado.
5. Opcionalmente, você pode colar o texto copiado de volta na área de texto principal.

## Regras de Criptografia

- e é convertido em `enter`
- i é convertido em `imes`
- a é convertido em `ai`
- o é convertido em `ober`
- u é convertido em `ufat`

## Regras de Descriptografia

- `enter` é convertido em e
- `imes` é convertido em i
- `ai` é convertido em a
- `ober` é convertido em o
- `ufat` é convertido em u

## Autor

- **Tatiane Souza** - [LinkedIn](https://www.linkedin.com/in/sowza82-tatiane-souza/)

## Licença

Este projeto não está aberto para colaborações externas, pois é uma atividade desenvolvida especificamente para o curso "Iniciante em Programação T7" da ONE (Oracle + Alura).
