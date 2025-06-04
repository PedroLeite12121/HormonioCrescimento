let p = document.querySelector("section p")
let img = document.querySelector("figure img")
let section = document.querySelector("section")
let h1 = document.querySelector("h1")
let div = document.querySelector("section div")
let containerBtn = document.querySelector(".container")
let legenda = document.querySelector("figcaption")

let indicatorA = document.querySelector("#one")
let indicatorB = document.querySelector("#two")

let indicatorSpan = document.querySelector("span")

window.addEventListener("load", async () => {
    h1.classList.add("show")

    await sleep(500)
    indicatorSpan.classList.add("show")
    
    p.classList.add("show")
    
    
    section.classList.add("show")
    
    await sleep(100)
    img.classList.add("show")
    legenda.classList.add("show")
    await sleep(500)
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

        indicatorB.style.backgroundColor = "rgb(0, 0, 0)"
        indicatorA.style.backgroundColor =  "rgb(155, 155, 155)"

        div.style.transition = "1s"
        div.style.transform = "translateX(200%)"
        sleep(300).then(() => { 
            p.textContent = "Quando sinalizado pelo hipotálamo, O GH (Growth Hormone) sai da Adeno-Hipófise e adentra os capilares sanguíneos, diminuindo temporariamente a quantidade de carboidratos (glicose) no corpo e o substituindo por lipídios que serão utilizados como fonte de energia. Desta forma, ativando a produção de glicogênese."
            img.src = "/imgs/glicose.png"

            legenda.innerText = "Molécula de glicose"
            
            div.style.transition = "0s"
            div.style.transform = "translateX(-200%)"
           
            sleep(10).then(() => { 
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

        indicatorA.style.backgroundColor = "rgb(0, 0, 0)"
        indicatorB.style.backgroundColor = "rgb(155, 155, 155)"

        div.style.transition = "1s"
        div.style.transform = "translateX(-200%)"
        sleep(300).then(() => { 
            p.textContent = "Além de atuar no metabolismo de gorduras e carboidratos, promovendo sua quebra, o GH fará o fígado e outros tecidos sintetizarem IGF-1, semelhante a insulina, que auxilia no desenvolvimento do corpo, estimulando o  crescimento e proliferação celular. Juntos, o GH e o IGF-1  aumentam a produção de proteínas e a divisão celular"
            img.src = "/imgs/igf.png"

            legenda.innerText = "Atuação do GH e produção de IGF-I"

            div.style.transition = "0s"
            div.style.transform = "translateX(200%)"
            
            sleep(10).then(() => { 
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
        legenda.classList.remove("show")
        indicatorSpan.classList.remove("show")



        h1.textContent = "Sistemas Afetados";

        await sleep(1);

        sistemas.forEach((sistema, index) => {
            setTimeout(() => {
                sistema.classList.add("show");
            }, index * 200);
        });

        h1.classList.add("show");
        conteudoAtual = 1;

        seta.classList.add("disableHover")
        containerBtn.classList.add("disableHover")

        await sleep(1000)

        seta.classList.remove("disableHover")
        containerBtn.classList.remove("disableHover")

    } else {

        sistemasContainer.style.zIndex = "-1"
        seta.src = "/imgs/arrow.png"
        seta.classList.remove("mirror")
        sistemas.forEach((sistema) => {
            sistema.classList.remove("show");
        });
        h1.classList.remove("show");

        indicatorSpan.classList.add("show")
        p.classList.add("show")
        btn1.style.display = "block";
        btn2.style.display = "block";
        img.classList.add("show")
        div.classList.add("show");
        legenda.classList.add("show")

        h1.textContent = "Como age no corpo";

        await sleep(1)

        h1.classList.add("show");

        conteudoAtual = 0;

        seta.classList.add("disableHover")
        containerBtn.classList.add("disableHover")

        await sleep(1000)

        seta.classList.remove("disableHover")
        containerBtn.classList.remove("disableHover")
        
    }

    await sleep(500); // Delay before allowing another click
    cooldown = false;
});
