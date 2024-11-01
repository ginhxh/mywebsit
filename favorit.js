let dele = document.querySelectorAll('.delet');

dele.forEach(button => {
    button.addEventListener('click', () => {
        const favo = button.closest('.favorit');
        if (favo) {
            favo.style.display = "none"; 
        }
    });
});

