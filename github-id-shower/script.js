const searchBtn = document.querySelector(".searchBtn");
const TextInput = document.querySelector(".UsernameText");
const goBackBtn = document.querySelector(".go-back");
const userInfo = document.querySelector(".userInfo");
// event listener for when user clicks the search button.
searchBtn.addEventListener("click", () => {
  const userName = TextInput.value; //search text
  fetch(`https://api.github.com/users/${userName}`)
    //fetch data from github
    .then((response) => {
      // check for response and if response is found parse to json and if not found then throw error
      if (!response.ok) {
        throw new error("Error , User Not Found "); //check for error if error occurs
      }
      return response.json(); // parse response as json.
    })
    // if response is found , proceed to data .
    .then((data) => {
      // check promise for data fulfillment , if data is found , render the data ,else throw error.

      //hide the search button and text input when you view the profile.

      searchBtn.style.display = "none";
      TextInput.style.display = "none";
      userInfo.innerHTML = `
         <h2> Name : ${data.name}</h2>
         <img src ="${data.avatar_url}"></img>
         <p> Followers : ${data.followers}</p>
         <p>Profile URL: <a href="${data.html_url}">${data.html_url}</a></p>
         <p> Location : ${data.location}</p>
         <p> Public Repositories :${data.public_repos} </p>
         <p> 
         `;
      goBackBtn.style.display = "inline";
    })
    .catch((error) => console.log("error occured ", error)); //if data not present , gimme error'
});
goBackBtn.addEventListener("click", () => {
  userInfo.innerHTML = ""; //clear user info , show the searchbar
  searchBtn.style.display = "inline";
  TextInput.style.display = "inline";
  goBackBtn.style.display = "";
});
