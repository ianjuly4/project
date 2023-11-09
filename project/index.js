//fetch("http://localhost:3000/project")
  //.then(function (response) {
    //return response.json();
  //})
  //.then(function () {
  //});

const dogPictures = {
  husky : {
    info : "hi",
    imageUrl : "https://images.dog.ceo/breeds/husky/n02110185_248.jpg",
  },
  ShibaInu : {
    info : "Hi! I'm Macey. My ancestors are from Japan, but Me, I was born here in Denver. I am only 2 years old, but dont let that fool you I am very strong. Even though I have this cute and cuddly appearance, I hope to be a great huntress one day.",
    imageUrl : "https://images.dog.ceo/breeds/shiba/shiba-14.jpg",
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("#dog_form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    handleDogPictures(e.target.dog_type.value)
  })
})

function handleDogPictures(dogs){
  let p = document.createElement('p')
  p.textContent = dogs
  document.querySelector(".dogPicturesContainer").appendChild(p)
}

