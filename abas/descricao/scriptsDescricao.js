function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.addEventListener("load", () => {
    const square = document.querySelector("#square");
    const h1 = document.querySelector("h1");
    const p = document.querySelector("section p");
    const img = document.querySelector("img")


    const h4s = document.querySelectorAll("h4");

    img.classList.add("show")
    square.classList.add("show");
    h1.classList.add("show");
    p.classList.add("show");

    h4s.forEach((h4, index) => {
        setTimeout(() => {
          h4.classList.add("show");
        }, index * 240); 
      });
});

let btns = document.querySelectorAll("h4")

btns[0].onclick = oqE 
btns[1].onclick = prodNatural
btns[2].onclick = terap
btns[3].onclick = funcoes

let texto = document.querySelector("section p")

function oqE() {
    texto.classList.remove("show")
    sleep(600).then(() => { 
        texto.textContent = "O hormônio de crescimento (GH) é uma proteína fundamental para o desenvolvimento e crescimento humano, especialmente durante a infância e adolescência. Além disso, o GH também desempenha um papel importante no metabolismo e na manutenção da saúde em adultos."
    })

    sleep(600).then(() => {
        texto.classList.add("show")
    })
}

function prodNatural() {
    texto.classList.remove("show")
    sleep(600).then(() => {
        texto.innerHTML = "O GH é produzido pela hipófise anterior e regulado pelo hipotálamo. Fatores que influenciam: Sono profundo, exercício físico intenso, hipoglicemia, estresse e dieta rica em proteínas. <br><br>O GH sintético é produzido por engenharia genética e utilizado em tratamentos médicos. Nomes comerciais: Norditropin, Genotropin, Humatrope."
    })

    sleep(600).then(() => {
        texto.classList.add("show")
    })
}

function terap() {
    texto.classList.remove("show")
    sleep(600).then(() => {
        texto.innerHTML = "Crianças: O GH é utilizado para tratar: Deficiência de GH (nanismo hipofisário). Síndromes genéticas (Turner, Prader-Willi). Insuficiência renal crônica.<br><br>Adultos: O GH é utilizado para tratar: Deficiência grave de GH. Síndrome do intestino curto. Perda muscular por HIV/AIDS ou doenças degenerativas."
    })

    sleep(600).then(() => {
        texto.classList.add("show")
    })
}

function funcoes() {
    texto.classList.remove("show")
    sleep(600).then(() => {
        texto.innerHTML = "Crescimento e Desenvolvimento: O GH estimula o crescimento ósseo e muscular durante a infância e adolescência. <br><br> Metabolismo: O GH desempenha um papel importante no metabolismo de adultos, incluindo: Queima de gordura (Lipólise). Síntese de proteínas (Efeito Anabólico). Regulação da glicose. Manutenção óssea e muscular."
    })

    sleep(600).then(() => {
        texto.classList.add("show")
    })
}


