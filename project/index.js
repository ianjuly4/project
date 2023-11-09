// dog fetch
function dogFetchRequest(){
  fetch("http://localhost:3000/dogData")
  .then(res => res.json())
  .then(dogdata => dogdata.forEach(dog => renderDog(dog)))
}dogFetchRequest()

// dog forEach 
//dogData.forEach(renderDog(dog){
  //console.log(dog);
//}); 

//renderDog function
function renderDog(dog){
  let p = document.createElement("p")
  p.className = "paragraph"
  p.innerHTML = `
    <img src="${dog.imageUrl}">
    <p>${dog.greeting}</p> 
    `
  document.querySelector('.dogPicturesContainer').appendChild(p)
}


