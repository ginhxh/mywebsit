
    const goUpBtn = document.getElementById('go-up-btn');

    goUpBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    let like = 0;
    const imglik = document.querySelector('.imglike');
    const likeDisplay = document.querySelector('.like');

    imglik.addEventListener('click', () => {
        like++;
        localStorage.setItem('klike',like.value);

        likeDisplay.innerHTML = `${like}`;
    });

