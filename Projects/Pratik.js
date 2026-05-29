const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach((button)=>{
    console.log(button)
    button.addEventListener('click',(e)=>{
      console.log(e);
      console.log(e.target);
      if(e.target.id === "grey"){
        body.style.backgroundColor = "grey"
      }
      if(e.target.id === "White"){
        body.style.backgroundColor = "white"
      }
      if(e.target.id === "Blue"){
        body.style.backgroundColor = "blue"
      }
      if(e.target.id === "Yellow"){
        body.style.backgroundColor = "yellow"
      }
    })


})
