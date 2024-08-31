const body = document.querySelector('body');
const colors = document.querySelectorAll('.button');


colors.forEach(function(boxes){ //returns a Nodelist for each color selected.
    boxes.addEventListener('click',function(event){ //runs the event(action) of clicking in a function .
        body.style.backgroundColor = event.target.id;
    })
})
