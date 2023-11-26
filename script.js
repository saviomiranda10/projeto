function toggleMode(){
  const html = document.documentElement
   html.classList.toggle("light")
//pegar tag img
   const img = document.querySelector("#profile img")
//se tiver light mode adicionar imagem light
   if(html.classList.contains("light")){
     img.setAttribute('src', './assets/avatar-light.png')
   }
  else {
    // se tiver light mode, manter a imagem normal
    img.setAttribute('src', './assets/avatar.png')
  }
}
 

 
  
  

