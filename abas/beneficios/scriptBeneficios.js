function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.addEventListener("load", async () => {
    let container = document.querySelectorAll(".container")
    let ps = document.querySelectorAll(".container p")
    let h1 = document.querySelector("section h1")
    let seta = document.querySelector("#seta")
    let img = document.querySelector(".container img")
    let span = document.querySelector("span")

    h1.classList.add("show");
    span.classList.add("show")
    await sleep (500)
    
    

    container.forEach((contain, index) => {
        setTimeout(() => {
          contain.classList.add("show");
        }, index * 200); 
      });

     ps.forEach((p, index) => {
        setTimeout(() => {
          p.classList.add("show");
        }, index * 200); 
    }); 

    await sleep(400)

    img.classList.add("show")

    await sleep(600)
    seta.classList.add("show")
 
})

let h1 = document.querySelector("h1")
let p = document.querySelectorAll("section p")
let img = document.querySelector(".container img")

let btn = document.querySelector("#seta")
let i = 0




btn.addEventListener("click", () => {
  if(i == 0) {
    h1.classList.remove("show")
    p.forEach((p) => {
        p.classList.remove("show");
    }); 
    img.classList.remove("show")

    h1.textContent = 'Riscos'
    p[0].textContent = 'Acromegalia'
    p[1].textContent = 'Resistência à insulina e diabetes tipo 2'
    p[2].textContent = 'Crescimento de órgãos internos'
    p[3].textContent = 'Síndrome do túnel do carpo e dores articulares'
    p[4].textContent = 'Maior risco de câncer'

 
    

    img.src = '/imgs/negativo.png'
    img.style.backgroundImage = "linear-gradient(to left, rgb(46, 46, 46), gray)"

    sleep(100).then(() => { 
      img.classList.add("show")
      h1.classList.add("show")
       p.forEach((p, index) => {
        setTimeout(() => {
          p.classList.add("show");
        }, index * 200); 
    }); 

    })
    
    i = 1
  }
  else{
      img.classList.remove("show")
    h1.classList.remove("show")
    p.forEach((p) => {
        p.classList.remove("show");
    }); 

    h1.textContent = 'Benefícios'
    p[0].textContent = 'Aumento da massa muscular magra'
    p[1].textContent = 'Redução da gordura corporal'
    p[2].textContent = 'Melhora da recuperação muscular'
    p[3].textContent = 'Aumento da densidade óssea'
    p[4].textContent = 'Melhora na aparência da pele e cabelo'
    img.src = '/imgs/ramon.png'
    i = 0


    img.style.backgroundImage = "linear-gradient(to left, rgb(248, 248, 248), gray)"

    

    sleep(10).then(() => { 
        img.classList.add("show")
      h1.classList.add("show")
       p.forEach((p, index) => {
        setTimeout(() => {
          p.classList.add("show");
        }, index * 200); 
    }); })
    
  }
      
    
})

