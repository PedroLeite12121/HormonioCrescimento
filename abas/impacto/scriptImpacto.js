window.addEventListener("load", () => {
    const title = document.querySelector("h1");
    title.classList.add("show")
    const cards = document.querySelectorAll("section div");

    cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add("show");
        }, index * 200); 
      });
});
