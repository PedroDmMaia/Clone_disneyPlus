document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('[data-tab-button]');//selecionando o botão por atributo
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight; //pegando a altura da section hero

    window.addEventListener('scroll', () => {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero) {
            ocultaElementoDoHeader();
        } else {
            exibeElementoDoHeader();
        }
    });

    //seção de atrações, programação das abas
    buttons.forEach(button => {
        button.addEventListener('click', botao => {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeAbas();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active');
        });
    });


    //seção FAQ, accordion
    questions.forEach(question => {
        question.addEventListener('click', abreOuFechaResposta); //por padrão o próprio elemento vai como argumento, nesse caso, o "question" que esta iterando.
    });
});

function ocultaElementoDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementoDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function abreOuFechaResposta(question) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = question.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    buttons.forEach(button => {
        button.classList.remove('shows__tabs__button--is-active');
    })
}

function escondeAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    tabsContainer.forEach(tabs => {
        tabs.classList.remove('shows__list--is-active');
    });
}