let p = document.querySelector("section p")
let img = document.querySelector("section img")
let section = document.querySelector("section")
let h1 = document.querySelector("h1")
let div = document.querySelector("section div")
let containerBtn = document.querySelector(".container")

window.addEventListener("load", () => {
    img.classList.add("show")
    p.classList.add("show")
    h1.classList.add("show")
    section.classList.add("show")
    containerBtn.classList.add("show")
})









let btn1 = document.querySelector("#buttonA")
let btn2 = document.querySelector("#buttonB")

btn1.onclick = retornar
btn2.onclick = avancar


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


let i = 0
function retornar() {
    if(i != 0) {
        btn1.classList.remove("show")
        btn1.classList.add("hide")
         
        btn1.classList.remove("hide")
        btn2.classList.add("show")

        i = i - 1

        div.style.transition = "1s"
        div.style.transform = "translateX(200%)"
        sleep(600).then(() => { 
            p.textContent = "Quando sinalizado pelo hipotálamo, O GH (Growth Hormone) sai da Adeno-Hipófise e adentra os capilares sanguíneos, diminuindo temporariamente a quantidade de Carboidratos (glicose) no corpo e o substituindo por lipídios que serão utilizados como fonte de energia. Desta forma, ativando a produção de glicogênese."
            img.src = "/imgs/glicose.png"

            div.style.transition = "0s"
            div.style.transform = "translateX(-200%)"
           
            sleep(100).then(() => { 
                div.style.transition = "1s"
                div.style.transform = "translateX(0%)"
            
            })
        });
    
    }
}


function avancar() {
    if(i != 1) {
        btn2.classList.remove("show")
        btn2.classList.add("hide")
        btn1.classList.remove("hide")
        btn1.classList.add("show")
        i = i + 1



        div.style.transition = "1s"
        div.style.transform = "translateX(-200%)"
        sleep(600).then(() => { 
            p.textContent = "Além de atuar no metabolismo de gorduras e carboidratos, promovendo sua quebra, o GH fará o fígado e outros tecidos sintetizarem IGF-1, semelhante a insulina, que auxilia no desenvolvimento do corpo, estimulando o  crescimento e proliferação celular. Juntos, o GH e o IGF-1  aumentam a produção de proteínas e a divisão celular"
            img.src = "/imgs/igf.png"

            div.style.transition = "0s"
            div.style.transform = "translateX(200%)"
            
            sleep(100).then(() => { 
                div.style.transition = "1s"
                div.style.transform = "translateX(0%)"
            })
        });
    
    }
}


let conteudoAtual = 0

let cooldown = false; 

containerBtn.addEventListener("click", async () => {
    if (cooldown == true) {
        return
    };
    cooldown = true;

    let sistemasContainer = document.querySelector("#sistemas")
    let sistemas = document.querySelectorAll(".two div");

    let seta = document.querySelector(".container img")

    if (conteudoAtual === 0) {

        sistemasContainer.style.zIndex = "1"
        seta.src = "/imgs/arrowFlipped.png"
        seta.classList.add("mirror")

        btn1.style.display = "none";
        btn2.style.display = "none";
        img.classList.remove("show")
        p.classList.remove("show")
        h1.classList.remove("show");
        div.classList.remove("show");
        



        h1.textContent = "Sistemas Afetados";

        await sleep(100);

        sistemas.forEach((sistema, index) => {
            setTimeout(() => {
                sistema.classList.add("show");
            }, index * 200);
        });

        h1.classList.add("show");
        conteudoAtual = 1;

    } else {

        sistemasContainer.style.zIndex = "-1"
        seta.src = "/imgs/arrow.png"
        seta.classList.remove("mirror")
        sistemas.forEach((sistema) => {
            sistema.classList.remove("show");
        });
        h1.classList.remove("show");

        p.classList.add("show")
        btn1.style.display = "block";
        btn2.style.display = "block";
        img.classList.add("show")
        div.classList.add("show");

        h1.textContent = "Como age no corpo";

        await sleep(10)

        h1.classList.add("show");

        conteudoAtual = 0;
    }

    await sleep(1000); // Delay before allowing another click
    cooldown = false;
});
