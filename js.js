

    var scroll = document.querySelectorAll('.movie')
    scroll.forEach(function(movie){
movie.animate(
    [
        { transform: "translateX(0px)" },
        { transform: "translateX(-200px)" }
    ],
    {
        duration: 3000,
        iterations: Infinity,

    }


    
)

    })
