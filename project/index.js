
const init = () => {
  const inputForm = document.querySelector("form");

  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("#dog_type");

    console.log(input.value);

    fetch(`http://localhost:3000/dogData/${input.value}`)
      .then(res => res.json())
      .then(data => {


    })
  });
};

document.addEventListener("DOMContentLoaded", init);
