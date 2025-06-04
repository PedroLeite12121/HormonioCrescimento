function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.addEventListener("load", async () => {
    const title = document.querySelector("h1");
    const cards = document.querySelectorAll("section div");
    title.classList.add("show")

    await sleep(500)
    
   

    cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add("show");
        }, index * 500); 
      });
});
