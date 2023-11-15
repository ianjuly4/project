

//fetch request
const fetchData = (event) => {
  fetch('http://localhost:3000/dogData')
    .then(response => response.json())
    .then(data => {
      const dogType = event.target.dog_type.value; 
      let foundDog = data.find(dogFinder);
      console.log(foundDog);
      portrayPictures(foundDog)

      function dogFinder(dog) {
        return dog.breed === dogType; 
      }
    })
    .catch(error => {
      console.error('Error:', error);   
    });
}
//adoption alert event listener
const adoptionAlert = () => {
  document.querySelector("#dog_type").addEventListener("alert", showAlert)
}

const showAlert = () => {
  alert("WOOF! WOOF! the adoption process is just one WOOF away!        Click Here");
}

const delayInMilliseconds = 3000; 

setTimeout(showAlert, delayInMilliseconds);

//create submit event
const init = () => {
  const inputForm = document.querySelector("form");

  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    fetchData(event); 
    console.log(event.target.dog_type.value)
    
  });
};
document.addEventListener("DOMContentLoaded", init);

//form reset eventListener
const formReset = () =>{
  const form = document.querySelector('.id_form');
  const resetButton = document.querySelector('.button');

resetButton.addEventListener('submit', function() {
form.reset();
})
}
formReset()

//create render function 
const portrayPictures = (dog) => {
  let div = document.createElement('div');
  div.className = "div1";
  let img = document.createElement('img'); 
  img.src = `${dog.imageUrl}`; 
  img.addEventListener("mouseover", showFact)
    function showFact() {
      alert(`${dog.fact}`)
    }
  div.appendChild(img); 
  let p = document.createElement('p');
  p.textContent = `${dog.greeting}`;
  div.appendChild(p); 
  document.querySelector(".dogPicturesContainer").appendChild(div);
}
