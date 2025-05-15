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

//copiar resultado
function copy_result() {
    navigator.clipboard.writeText(document.getElementById('result').textContent)
        .then(() => alert("Texto copiado!"))
        .catch(() => alert("Falha ao copiar o texto"));
}

//Criptografias
function btn_send() {
    //Tipo de cirpto selecionado
    const code_type = document.querySelector('.main_card h2').textContent;
    //input do usuario
    const user_text = document.getElementById('input').value;

    //Mostrar resultado e botão copiar
    //document.getElementById('result').textContent = result
    //document.getElementById('copy_result').style.display = "block";

    //CÓDIGO ALFABÉTICO
    if (code_type == "Código Alfabético") {
        const result = user_text
        .toLowerCase()
        .split('')
        .map(char => {
            const cripto = char.charCodeAt(0)
            if (cripto >= 97 && cripto <= 122) {
                return cripto - 96
            }
            else {
                return char;
            }
        })
        .join(' ');
        document.getElementById('result').textContent = result
        document.getElementById('copy_result').style.display = "block";
    }

    //BASE64
    if (code_type == "Base64") {
        result = btoa(user_text)
        document.getElementById('result').textContent = result
        document.getElementById('copy_result').style.display = "block";
    }

    //CIFRA DE CÉSAR

}