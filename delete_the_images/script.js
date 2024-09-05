document.querySelector('#images').addEventListener('click',(e)=>{
     console.log(e.target.id);
   let remove  = e.target.parentNode; 
   remove.remove();

})
