
let search = document.querySelector('.inputt');
let cards = document.querySelectorAll('.card-film');
search.addEventListener("keyup", (e) => {
    const searchT = e.target.value.toLowerCase();

    cards.forEach((film) => {
        const title = film.querySelector('.tital-film'); 
        if (title && title.textContent.toLowerCase().includes(searchT)) {
            film.style.display = ""; 
        } else {
            film.style.display = "none"; 

        }
    });
});