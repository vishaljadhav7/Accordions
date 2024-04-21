const items = document.querySelectorAll('.accordion-item');

items.forEach(item =>{
  
  const title = item.querySelector('.accordion-title');
  // const content = item.querySelector('.accordion-content');
  
  title.addEventListener('click', ()=>{
    
    for(let i = 0 ; i < items.length ; i++){
      if(items[i]!=item){
         items[i].classList.remove("active");
      }else{
        item.classList.toggle("active");
      } 
      
    }
  })
  
})
