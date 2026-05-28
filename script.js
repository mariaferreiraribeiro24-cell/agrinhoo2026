/**
 * AgroFuturo 2026 - Scripts de Interatividade, Acessibilidade e Validação
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. SEÇÕES EXPANSÍVEIS (ACCORDION) ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const content = header.nextElementSibling;
            const isExpanded = header.getAttribute('aria-expanded') === 'true';
            
            // Alterna estado atual
            header.setAttribute('aria-expanded', !isExpanded);
            content.hidden = isExpanded;
            item.classList.toggle('active');
            
            // Acessibilidade de ícone informativo
            const icon = header.querySelector('.icon');
            if (icon) {
                icon.textContent = isExpanded ? '+' : '−';
            }
        });
    });

    // --- 2. FERRAMENTAS DE ACESSIBILIDADE FLUTUANTE ---
    let currentFontSize = 100; // Porcentagem do tamanho base
    const body = document.body;
    
    const btnIncreaseFont = document.getElementById('btn-increase-font');
    const btnDecreaseFont = document.getElementById('btn-decrease-font');
    const btnToggleTheme = document.getElementById('btn-toggle-theme');
    const btnStartVoice = document.getElementById('btn-start-voice');
    const btnStopVoice = document.getElementById('btn-stop-voice');

    // Controle de Fonte
    btnIncreaseFont.addEventListener('click', () => {
        if (currentFontSize < 140) {
            currentFontSize += 10;
            document.documentElement.style.fontSize = `${currentFontSize}%`;
        }
    });

    btnDecreaseFont.addEventListener('click', () => {
        if (currentFontSize > 80) {
            currentFontSize -= 10;
            document.documentElement.style.fontSize = `${currentFontSize}%`;
        }
    });

    // Modo Claro / Escuro
    btnToggleTheme.addEventListener('click', () => {
        body.classList.toggle('light-theme');
    });

    // --- 3. SPEECH SYNTHESIS API (LEITURA POR VOZ) ---
    let speechUtterance = null;
    const synth = window.speechSynthesis;

    btnStartVoice.addEventListener('click', () => {
        if (synth.speaking) {
            synth.cancel();
        }

        // Seleciona e extrai apenas o conteúdo textual do artigo principal (Ignorando botões e formulários)
        const mainContentElement = document.getElementById('main-content');
        if (!mainContentElement) return;

        const readableElements = mainContentElement.querySelectorAll('h2, h3, p, blockquote');
        let textToRead = '';
        
        readableElements.forEach(el => {
            // Garante que não leremos os botões internos do accordion ou formulários de inserção
            if (!el.closest('.accordion-header') && !el.closest('.comment-form') && !el.hidden) {
                textToRead += el.textContent + ' . ';
            }
        });

        if (textToRead.trim() !== '') {
            speechUtterance = new SpeechSynthesisUtterance(textToRead);
            speechUtterance.lang = 'pt-BR';
            speechUtterance.rate = 1.0;

            btnStartVoice.style.backgroundColor = 'var(--color-green-nature)';
            
            speechUtterance.onend = () => {
                btnStartVoice.style.backgroundColor = 'var(--color-blue-metallic)';
            };

            synth.speak(speechUtterance);
        }
    });

    btnStopVoice.addEventListener('click', () => {
        if (synth.speaking) {
            synth.cancel();
            btnStartVoice.style.backgroundColor = 'var(--color-blue-metallic)';
        }
    });

    // --- 4. FORMULÁRIO DE INSCRIÇÃO DO SEMINÁRIO ---
    const seminarForm = document.getElementById('seminar-form');
    const formSuccessDiv = document.getElementById('form-success');

    seminarForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        
        const name = document.getElementById('inp-name').value;
        const email = document.getElementById('inp-email').value;
        
        formSuccessDiv.textContent = `Obrigado, ${name}! Inscrição confirmada com sucesso para o seminário online. Detalhes enviados para ${email}.`;
        formSuccessDiv.hidden = false;
        
        seminarForm.reset();
        
        setTimeout(() => {
            formSuccessDiv.hidden = true;
        }, 8000);
    });

    // --- 5. ÁREA DE COMENTÁRIOS DINÂMICOS ---
    const commentForm = document.getElementById('comment-form');
    const txtComment = document.getElementById('txt-comment');
    const commentsDisplay = document.getElementById('comments-display');

    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const commentText = txtComment.value.trim();
        if (commentText === '') return;

        const card = document.createElement('div');
        card.className = 'comment-card';
        
        const paragraph = document.createElement('p');
        paragraph.textContent = commentText;
        
        card.appendChild(paragraph);
        commentsDisplay.insertBefore(card, commentsDisplay.firstChild);
        txtComment.value = '';
    });
});

4. Estrutura do README.md

Abaixo está o conteúdo gerado para documentação do projeto.
Markdown

# AgroFuturo 2026 - Tecnologia Agrícola e Inteligência Artificial

## 🌾 Tema da Página Criada
A página aborda a **Inovação no Campo e o papel estratégico da Inteligência Artificial (IA) e da Biotecnologia Sustentável no Brasil**. O design visual foi projetado sob um conceito **Premium, Futurista e Altamente Tecnológico**, utilizando uma paleta de cores balanceada entre tons de azul metálico e celeste para representar a inteligência computacional, junto ao verde e ouro que resgatam a nobreza e sustentabilidade do campo brasileiro.

## 🎯 Objetivo da Página
O principal objetivo deste ecossistema é atuar como um centro de conhecimento de alta conversão, informando produtores, especialistas e o público geral sobre as mais modernas transformações do ecossistema de agronegócio nacional. Ao mesmo tempo, a página captura leads qualificados através de um formulário interativo de inscrição para um seminário online focado na expansão de práticas tecnológicas no campo.

## ⚙️ Instruções de Uso da Página Criada

1. **Estrutura de Arquivos:**
   Certifique-se de que os três arquivos (`index.html`, `style.css` e `script.js`) estejam salvos exatamente na **mesma pasta** raiz do seu computador ou servidor local.

2. **Substituição de Imagens:**
   Conforme especificado nos requisitos, foram inseridos os espaços reservados estruturais exatos para as imagens em formato de layout responsivo premium. Para exibir suas fotos reais, basta salvar as imagens desejadas na mesma pasta com os nomes exatos:
   - `Foto1.png`
   - `Foto2.png`
   - `Foto3.png`

3. **Utilização dos Recursos Interativos:**
   - **Seções Expansíveis (Accordion):** Clique sobre as barras de benefícios na seção de Inteligência Artificial para ler os conteúdos de forma limpa e dinâmica.
   - **Formulário à Direita:** Preencha os campos de cadastro para testar o sistema de validação e feedback instantâneo na tela.
   - **Barra de Acessibilidade (Lateral Esquerda):** Use os controles rápidos para aumentar ou diminuir o texto, alternar para o Modo Claro, e iniciar ou pausar a leitura de voz nativa e inteligente baseada em IA de áudio do seu navegador.



