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
            const code_type = card.getAttribute('data-code')

            document.getElementById('result').textContent = ""

            //Exibe o card
            cripto.style.display = "flex"
            section.style.display = "none"

            cripto.setAttribute('data-selected', code_type);

            selected_card.innerHTML = card_content

            if (code_type == "Cifra de César") {
                document.getElementById('cesar_spacing').style.display = "block"
            }
            else {
                document.getElementById('cesar_spacing').style.display = "none"
            }
        })
    })
}

//home-btn
function home_btn() {
    const cripto = document.querySelector('.cripto')
    cripto.style.display = "none"
    const section = document.getElementById('card_section')
    section.style.display = "flex"
}

//copiar resultado
function copy_result() {
    const result = document.getElementById('result').textContent
    if (result != "") {
        navigator.clipboard.writeText(result);
        alert("Texto copiado!")
    }
    else {
        alert("Não foi possível copiar cripitografia")
    }
}

//Criptografias
function btn_send() {
    //Tipo de cirpto selecionado
    const code_type = document.querySelector('.cripto').getAttribute('data-selected');

    //input do usuario
    const user_text = document.getElementById('input').value;

    //Mostrar resultado e botão copiar
    //document.getElementById('result').textContent = result
    //document.getElementById('copy_result').style.display = "block";

    //CÓDIGO ALFABÉTICO
    if (code_type == "Código Alfabético") {
        const result = user_text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
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
    else if (code_type == "Base64") {
        result = btoa(user_text)
        document.getElementById('result').textContent = result
        document.getElementById('copy_result').style.display = "block";
    }

    //CIFRA DE CÉSAR
    else if (code_type == "Cifra de César") {
        const shift = parseInt(document.getElementById('spacing').value);

        const result = user_text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .split('')
        .map(char => {
            const cripto = char.charCodeAt(0)
            if (cripto >= 97 && cripto <= 122) {
                return String.fromCharCode(((cripto - 97 + shift) % 26) + 97)
            }
            else {
                return char
            }
        })
        .join('')
        document.getElementById('result').textContent = result
        document.getElementById('copy_result').style.display = "block";
    }

    //ROT13
    else if (code_type == "ROT13") {
        const shift = 13;

        const result = user_text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .split('')
        .map(char => {
            const cripto = char.charCodeAt(0)
            if (cripto >= 97 && cripto <= 122) {
                return String.fromCharCode(((cripto - 97 + shift) % 26) + 97)
            }
            else {
                return char
            }
        })
        .join('')
        document.getElementById('result').textContent = result
        document.getElementById('copy_result').style.display = "block";
    }

    //HEXADECIMAL
    else if (code_type == "Hexadecimal") {
        const result = user_text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .split('')
        .map(char => {
            return char.charCodeAt(0).toString(16);
        })
        .join(', ')
        document.getElementById('result').textContent = result
        document.getElementById('copy_result').style.display = "block";
    }

    //MORSE
    else if (code_type == "Código Morse") {
        const morse_map = {
            a: ".-",   b: "-...", c: "-.-.", d: "-..",
            e: ".",    f: "..-.", g: "--.",  h: "....",
            i: "..",   j: ".---", k: "-.-",  l: ".-..",
            m: "--",   n: "-.",   o: "---",  p: ".--.",
            q: "--.-", r: ".-.",  s: "...",  t: "-",
            u: "..-",  v: "...-", w: ".--",  x: "-..-",
            y: "-.--", z: "--..",
            
            0: "-----", 1: ".----", 2: "..---", 3: "...--",
            4: "....-", 5: ".....", 6: "-....", 7: "--...",
            8: "---..", 9: "----.", " ": "/" 
        };

        const result = user_text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .split('')
        .map(char => morse_map[char] || char )
        .join(' ');

        document.getElementById('result').textContent = result;
        document.getElementById('copy_result').style.display = "block";
    }
}

