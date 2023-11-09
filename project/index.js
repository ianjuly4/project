
fetch("http://localhost:3000/project")
  .then(function (response) {
    return response.json();
  })
  .then(function () {
  });
  



//submit event
document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("#dog_form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    portrayPictures(e.target.dog_type.value)
  })
})


//display below form
function portrayPictures(dogs){
  let p = document.createElement('p')
  p.textContent = (dogs = ShibaInu.json())
  document.querySelector(".dogPicturesContainer").appendChild(p)
}

//iteration function
function picturesIteration(array){
  for(const dog of dogPictures){
    if(dog === array)
    return array
  }
}
