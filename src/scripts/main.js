document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('[data-tab-button]');//selecionando o botão por atributo
    const questions = document.querySelectorAll('[data-faq-question]');

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

    questions.forEach(question => {
        question.addEventListener('click', abreOuFechaResposta); //por padrão o próprio elemento vai como argumento, nesse caso, o "question" que esta iterando.
    });
});

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