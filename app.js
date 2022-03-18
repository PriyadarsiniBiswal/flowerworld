const newPages = document.querySelectorAll(".pageload");
const playerPage = document.getElementById("player");

const playBtn = document.getElementById('play');
const cancelBtn = document.getElementById('cancel');
const closeBtn =document.getElementById("closebtn")



newPages.forEach((newPage) => {
   newPage.addEventListener('click', () => {
      playerPage.classList.add('active');
   })
   cancelBtn.addEventListener('click', () => {
      playerPage.classList.remove('active');
   });
})

playBtn.addEventListener('click', () => {
    const videoPlay = document.createElement('div');
    videoPlay.classList.add('playnow');
    videoPlay.innerHTML = `
      <video controls>
         <source src="./Videos/Flower Video.mp4" type="video/mp4">
      </video>  
     
      <p>Please refresh the browser to go back to the homepage.</p>
      `;   
      playBtn.appendChild(videoPlay);
      
})


    
