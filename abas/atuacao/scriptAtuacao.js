let p = document.querySelector("section p")
let img = document.querySelector("section img")
let div = document.querySelector("section div")
let section = document.querySelector("section")
let h1 = document.querySelector("h1")


window.addEventListener("load", () => {
    h1.classList.add("show")
    section.classList.add("show")
    div.classList.add("show")
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
            p.textContent = "Quando sinalizado pelo hipotálamo, O GH(Growth Hormone) sai da Adeno-Hipófise e adentra os capilares sanguíneos, diminuindo temporariamente a quantidade de Carboidratos(glicose) no corpo e o substituindo por lipídios que serão utilizados como fonte de energia. Desta forma, ativando a produção de glicogênese."
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
            p.textContent = "Além de atuar no metabolismo de gorduras e carboidratos, promovendo sua quebra, o GH fará o fígado e outros tecidos sintetizarem IGF-1, semelhante a insulina,  que auxilia no desenvolvimento do corpo, estimulando o  crescimento e proliferação celular.Juntos, o GH e o IGF-1  aumentam a produção de proteínas e a divisão celular"
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