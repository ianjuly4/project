

//fetch request
function fetchData(event) {
  fetch('http://localhost:3000/dogData')
    .then(response => response.json())
    .then(data => {
      const dogType = event.target.dog_type.value; // Store the value in a variable
      let foundDog = data.find(dogFinder);
      console.log(foundDog);
      portrayPictures(foundDog)

      function dogFinder(dog) {
        return dog.breed === dogType; // Use the variable in the dogFinder function
      }
    })
    .catch(error => {
      console.error('Error:', error);   
    });
}

//create submit event
const init = () => {
  const inputForm = document.querySelector("form");

  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    fetchData(event); // Pass the event object to the fetchData function
    console.log(event.target.dog_type.value)
    
  });
};

document.addEventListener("DOMContentLoaded", init);

//create render function 
function portrayPictures(dog) {
  let div = document.createElement('div');
  div.className = "div1";
  let img = document.createElement('img'); // Create an <img> element
  img.src = `${dog.imageUrl}`; // Set the source of the image
  div.appendChild(img); // Append the image to the div
  let p = document.createElement('p');
  p.textContent = `${dog.greeting}`;
  div.appendChild(p); 
  document.querySelector(".dogPicturesContainer").appendChild(div);
}
