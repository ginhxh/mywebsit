
    const leftButton = document.querySelector('.left');
    const rightButton = document.querySelector('.right');
    const cardsContainer = document.querySelector('.allcards');


   
    leftButton.addEventListener('click', () => {
        cardsContainer.scrollBy({
            top: 0,
            left: -100,
            behavior: "smooth"
        });
    });

    rightButton.addEventListener('click', () => {
        cardsContainer.scrollBy({
            top: 0,
            left: 100,
            behavior: "smooth"
        });
    });

