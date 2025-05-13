document.addEventListener('DOMContentLoaded', () => {
    main_card();
})



function main_card() {
    const title_cards = document.querySelectorAll('.card h2')
    const selected_card = document.getElementById('main_card')
    const section = document.getElementById('card_section')
    const cripto = document.querySelector('.cripto')

    title_cards.forEach(title => {
        title.addEventListener('click', function() {
            const card = this.parentNode;
            const card_content = card.innerHTML;

            cripto.style = "display: flex;"
            section.style = "display: none;"
            selected_card.innerHTML = card_content
        })
    })
}