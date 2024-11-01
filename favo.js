
let favorits =document.querySelectorAll('.favorit')
let search = document.querySelector('.inputt');
search.addEventListener("keyup",(e)=>{


const searchi = e.target.value.toLowerCase();

favorits.forEach((favortt)=>{
  const titlle = favortt.querySelector('.tital-film'); 
  if(titlle&&titlle.textContent.toLowerCase().includes(searchi)){
    favortt.style.display = ""; 
} else {
    favortt.style.display = "none"; 

}
  }


)
})