let dark =document.querySelectorAll('.moon')
let body=document.querySelector('body')
let footer=document.querySelector("footer")
let listFooter=document.querySelector(".list-foter")
let sun =document.querySelectorAll('.sun')
let comment =document.querySelector('.comnts-place')




    sun.forEach(button =>{
        button.addEventListener('click',()=>{
    body.style.backgroundColor="aliceblue"
    body.style.color="black"
    footer.style.backgroundColor="rgb(251, 248, 248)"
    footer.style.color="black"




    }
    )} 
)
dark.forEach(button =>{

    button.addEventListener('click',()=>{
        body.style.backgroundColor = "gray";
        body.style.color = "white";
        footer.style.backgroundColor = "black";
        footer.style.color = "white";
        listFooter.style.color = "white";
        comment.style.color="black"


    })
})