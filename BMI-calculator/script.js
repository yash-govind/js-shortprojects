
const form  = document.querySelector('form'); //when you click on calculate button addevent listener should run so we have selected form and addded a addevent listener to it to run an event when submitted.

form.addEventListener('submit', function(event){
event.preventDefault();
 let weight = parseInt((document.querySelector('#weight').value));
 let height = parseInt((document.querySelector('#height').value));
  let result = document.querySelector('#results'); //inputs

  if(weight<0 || weight===''|| isNaN(weight)){
    result.innerHTML = `Please Enter a Valid Weight ${weight}`; //checks
  }
 else if(height<0 || height===''||isNaN(height)){
    result.innerHTML = `Please Enter a Valid Height ${height}`;
  }
  //BMI logic --
  else{
    const BMI = (weight/(height*height/10000)).toFixed(3);
    result.innerHTML = `Your BMI is ${BMI}`;
    if(BMI<18.6){
        result.innerHTML = `You are Under Weight : ${BMI}`;
    }
    else if(BMI>=18.6 && BMI<=24.9){
        result.innerHTML = `YOU ARE IN NORMAL RANGE : ${BMI} `
       }
       else{
        result.innerHTML = `YOU ARE OVER WEIGHT: ${BMI} `
       }
  }

})
