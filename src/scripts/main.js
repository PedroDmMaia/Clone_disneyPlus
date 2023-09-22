document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('[data-tab-button]');//selecionando o botão por atributo

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
});

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