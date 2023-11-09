//fetch("http://localhost:3000/project")
  //.then(function (response) {
    //return response.json();
  //})
  //.then(function () {
  //});

const dogPictures = []
const ShibaInu = []
const Husky = []
const Samoyed = []
const BorderCollie = []
const Dachshund = []
const Pitbull = []
const Terrier = []
 
dogPictures.push(ShibaInu, Husky, Samoyed, BorderCollie, Dachshund, Pitbull, Terrier)
//console.log(dogPictures)

function ShibaInuInput() {
  const ShibaInu = [];
  const div = document.createElement('div')
  const img = document.createElement('img')
    img.src = "https://images.dog.ceo/breeds/shiba/shiba-14.jpg"
    img.appendChild(div)
  const p = document.createElement("p")
    p.textContent =  "Hi! I'm Macey. My ancestors are from Japan, but Me, I was born here in Denver. I am only 2 years old, but dont let that fool you I am very strong. Even though I have this cute and cuddly appearance, I hope to be a great huntress one day."
    p.appendChild(div)
  ShibaInu.push(div, img, p)
}
ShibaInuInput()   

document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("#dog_form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    portrayPictures(e.target.dog_type.value)
  })
})

function portrayPictures(dogs){
  let p = document.createElement('p')
  p.textContent = dogs
  document.querySelector(".dogPicturesContainer").appendChild(p)
}

