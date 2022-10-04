const dogURL = 'https://dog.ceo/api/breeds/image/random';

async function addDog() {
  const promise = await fetch(dogURL);
  const data = await promise.json();
  const dogImage = document.querySelector('#dog');
  dogImage.src = data.message;
  dogImage.alt = 'Cute doggo';
}

const button = document.querySelector('#button');
button.addEventListener('click', addDog);
