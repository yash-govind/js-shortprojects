const clock = document.querySelector('#clock');
 //set interval is called to run the function every 1 secs 
setInterval(function(){
  let time =  new Date(); // new date object
  clock.innerHTML = time.toLocaleTimeString(time); //tolocalestring gives us time in string format . 
},1000)