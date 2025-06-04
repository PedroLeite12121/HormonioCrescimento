function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.addEventListener("load", async () => {
    h1.classList.add("show")
    await sleep(700)
    
    texto.classList.add("show")

    await sleep(500)

    btns.forEach((btn, index) => {
        setTimeout(() => {
          btn.classList.add("show");
        }, index * 600); 
    });
})



let btns = document.querySelectorAll(".botoes p")

btns[0].onclick = opiniao
btns[1].onclick = necessario
btns[2].onclick = etico
btns[3].onclick = alternativas

let h1 = document.querySelector("section h1")
let texto = document.querySelector("section p")

async function opiniao() {
    h1.classList.remove("show")
    texto.classList.remove("show")
   
    h1.textContent = "Opinião crítica do grupo"
    texto.textContent = "O uso do hormônio deve ser restrito apenas em casos de necessidade como o déficit hormonal do GH ou em casos denanismo, sobre prescrição médica. Não concordamos com o uso da substância para fins estéticos, já que a mesma não traz benefícios para saúde e é uma prática antiética em esportes como o fisiculturismo, indo contrar os fundamentos da disciplina e o foco. Outras práticas naturais como alimentação, exercícios físicos, saúde, bem estar e o sono, podem ter o mesmo resultado, que a substância, mas de uma forma mais equilibrada e saudável."

    
    sleep(100).then(() => {
        h1.classList.add("show")
        texto.classList.add("show")
    })

    
    btns[0].classList.add("disableHover")

    await sleep(1000)

    btns[0].classList.remove("disableHover")
    
    
}

async function necessario() {
    h1.classList.remove("show");
    texto.classList.remove("show");


    h1.textContent = "É necessário usar essa substância?";
    texto.textContent = "Depende do contexto em que a substância (GH) está sendo utilizada, em casos de pessoas com baixa estatura, baixa velocidade de crescimento devido a deficiência de GH e em casos mais graves o nanismo. Para fins estéticos o seu uso não é recomendado, já que apresenta diversos riscos à saúde como: a resistência à insulina que desencadeia a diabetes, aumenta as chances do desenvolvimento de cânceres, dores nas articulações, retenção de líquido e aumento dos níveis de colesterol. Até mesmo para fins médicos o seu uso deve ser moderado e utilizado sob prescrição médica.";


    sleep(100).then(() => {
    h1.classList.add("show");
    texto.classList.add("show");
    });
    btns[1].classList.add("disableHover")

    await sleep(1000)

    btns[1].classList.remove("disableHover")
}

async function etico() {
   h1.classList.remove("show");
    texto.classList.remove("show");

    h1.textContent = "O uso é ético?";
    texto.textContent = "De acordo com as regras antidopagem, o uso do Hormônio do crescimento GH no fisiculturismo não é considerado ético, e sim uma prática que se encaixa na categoria de doping, já que é um meio ilícito para melhorar o desempenho e seus usuários as aplicam em doses muito superiores às que são recomendadas por médicos em casos de necessidade. Conclui-se que seu uso não é adequado para competições, além de ser proibido e considerado como doping, é um meio injusto de tirar vantagem perante aos outros adversários.";

    sleep(100).then(() => {
        h1.classList.add("show");
        texto.classList.add("show");
    });

    btns[2].classList.add("disableHover")

    await sleep(1000)

    btns[2].classList.remove("disableHover")

}

async function alternativas() {
    h1.classList.remove("show");
    texto.classList.remove("show");

    h1.textContent = "Existem alternativas naturais?";
    texto.textContent = "Sim, um dos maiores aliados é a alimentação, uma alimentação saudável e balanceada é um dos fatores principais para o ganho de massa. Alimentos como: carne vermelha, aveia, frutas, batata doce, proteínas magras, feijão, azeite e ovo, são opções naturais que impactam positivamente a saúde. Outra opção saudável são os exercícios como a musculação, junto de coisas simples como qualidade do sono, hidratação e lazer. Esses fatores ajudam no ganho de massa, desenvolvimento dos músculos e qualidade de vida de uma forma mais saudável, sem precisar da aplicação do hormônio.";

    sleep(100).then(() => {
        h1.classList.add("show");
        texto.classList.add("show");
    });

    btns[3].classList.add("disableHover")

    await sleep(1000)

    btns[3].classList.remove("disableHover")
}

