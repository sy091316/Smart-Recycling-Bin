// TODO: Query for button with an id "theme-button"
let themeButton = document.getElementById("theme-button");

const img = document.getElementById("graph");
const scan = document.getElementById("scan");
const detect = document.getElementById("detect");
const recycle = document.getElementById("recycle");

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {
  // Write your code to manipulate the DOM here
  document.body.classList.toggle("dark-mode");

  //if it is dark mode, then change the image background to black
  if (img.src.endsWith("/img/graph.png")) {
    img.src = "./img/graph2.png";
    scan.src ="./img/scan2.png";
    detect.src ="./img/detect2.png";
    recycle.src ="./img/recycle2.png";
  } else {
    img.src = "./img/graph.png";
    scan.src ="./img/scan.png";
    detect.src ="./img/detect.png";
    recycle.src ="./img/recycle.png";
  }
}


// TODO: Register a 'click' event listener for the theme button
// Set toggleDarkMode as the callback function.
themeButton.addEventListener("click", toggleDarkMode);


// Add your query for the sign now button here
let signNowButton = document.getElementById("sign-now-button");
let count = 2;

const addSignature = (person) => {
  // replace any code that uses document.getElementbyId to reselect the "petition-inputs" and save their values
  
  // old code
  // const name = document.getElementById('name');
  // const signature = document.createElement('p');
  // const signatureText = '😄 ' + name.value + "'s comments: " + thoughts.value;

  // new code - now down to one line, since person was passed as a parameter
  const newSignature = document.createElement('p');
  newSignature.textContent = `😄 ${person.name} 's comments: ${person.thoughts}`;
  const signatures = document.querySelector('.signatures');
  signatures.appendChild(newSignature);
  

  //modify count
  const counter = document.getElementById("counter"); // add this here, not above function
  // remove "2 people signed in" first, change 2 -> 3, paste "3 people signed in"
  counter.remove();
  count = count + 1;
  const newCounter = document.createElement('p');
  newCounter.id = 'counter';
  newCounter.innerText = '🖊️ ' + count + ' people submitted the form';
  const newCounters = document.querySelector('.signatures')
  newCounters.appendChild(newCounter);
}

// const addSignature = (event) => {
//   // Write your code to manipulate the DOM here
//   const name = document.getElementById('name');
//   // console.log(name.value + 'submitted this form.');
//   const email = document.getElementById('email');
//   // console.log(email.value + 'submitted this form.');
//   const thoughts = document.getElementById('thoughts');
//   // console.log(thoughts.value + 'submitted this form.');

//   const signature = document.createElement('p');
//   //modify text
//   const signatureText = '😄 ' + name.value + "'s comments: " + thoughts.value;
//   signature.textContent = signatureText;
//   // signature.innerText = name.value + ' thoughts:' + thoughts.value;
//   const signatures = document.querySelector('.signatures');
//   signatures.appendChild(signature);

//   //modify count
//   const counter = document.getElementById("counter"); // add this here, not above function
//   // remove "2 people signed in" first, change 2 -> 3, paste "3 people signed in"
//   counter.remove();
//   count = count + 1;
//   const newCounter = document.createElement('p');
//   newCounter.id = 'counter';
//   newCounter.innerText = '🖊️ ' + count + ' people submitted the form';
//   const newCounters = document.querySelector('.signatures')
//   newCounters.appendChild(newCounter);
  
//   if (event) {
//     event.preventDefault();
//   }
// }

// Add a click event listener to the sign now button here
// signNowButton.addEventListener("click", addSignature);
// TODO: Remove the click event listener that calls addSignature()




// TODO: Complete validation form
const validateForm = () => {
  let containsErrors = false;
  
  var petitionInputs = document.getElementById("sign-petition").elements;

  // create a new object variable "person" with the appropriate properties
  let person = {
    name: petitionInputs[0].value, // accesses and saves value of first input
    email: petitionInputs[1].value,
    thoughts: petitionInputs[2].value
  }

  // keep same, all petitionInputs apply to this code
  // TODO: Loop through all inputs (-1 to exclude submit button)
  for (let i = 0; i < petitionInputs.length - 1; i++) {
    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    }
    else {
      petitionInputs[i].classList.remove('error');
    }
  }

  // refactored code (email verification)
  if (!person.email.includes('.com')) {
    petitionInputs[1].classList.add('error');
    containsErrors = true;
  }
  else {
    petitionInputs[1].classList.remove('error');
  }

  if (containsErrors == false) {
    // find your call to addSignature, include the "person" object as the parameter
    addSignature(person);
    toggleModal(person);
    // reset 
    for (let i = 0; i < petitionInputs.length - 1; i++) {
      petitionInputs[i].value = "";
      containsErrors = false;
    }
  } 

  //old code
  //check email validation
  // const email = document.getElementById("email");
  // if (!email.value.includes('.com')) {
  //   email.classList.add('error');
  //   containsErrors = true;
  // }
  // else {
  //   email.classList.remove('error');
  // }
  
  // TODO: Validate the value of each input
  // TODO: Call addSignature() and clear fields if no errors
  // if (containsErrors == false) {
  //   addSignature();
  //   for (let i = 0; i < petitionInputs.length - 1; i++) {
  //     petitionInputs[i].value = "";
  //     containsErrors = false;
  //   }
  // }
}

signNowButton.addEventListener('click', validateForm);




// unit 8
// 1. define an animation object
let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
}
// 2. select all revealable containers, add the class "revealable" to each container you want to fade in
// 3. outside of any functions, create a variable called revealableContainers and set it to the result of document.querySelectorAll(".revealable")
let revealableContainers = document.querySelectorAll('.revealable');
//4. create a function called reveal, function willc ontain loop that checks each revelableContainer to see if it is in the right position to be revealed
const reveal = () => {
  // save the height of window
  let windowHeight = window.innerHeight;
  for (let i = 0; i < revealableContainers.length; i++) {
    // find the top of the revealable container
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    // check the topOfRevealableContainer should be loaded in
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      /* add the active class to the revealableContainer's classlist */
      revealableContainers[i].classList.add("active");
    } else {
      /* remove the active class to the revealableContainer's classlist */
      revealableContainers[i].classList.remove("active");
    }
  } 
}

// add "reveal" as an event listener to "window"
window.addEventListener("scroll", reveal);


// unit 8 stretch: add a reduce motion for people who have motion sensitivities

// 1. update animation object with new values
animation = {
  revealDistance: 100,
  transitionDuration: '1s',
  transitionTimingFunction: 'linear'
}

// 2. use getElementById to select every element with the id "reduce-motion"
let reduceMotion = document.getElementById("reduce-motion");

// write a reduceMotion function
const reduceMotionToggle = () => {
  for (let i = 0; i < revealableContainers.length; i++) {
    revealableContainers[i].style.transition = 'none'; //set transition to none
    revealableContainers[i].style.transitionDelay = animation.transitionDelay;
  }
}

// Add an appropriate event listener to your button with the function reduceMotion
reduceMotion.addEventListener("click", reduceMotionToggle);


// unit 9: modal
// call toggleModal after call addSignature
const toggleModal = (person) => {
  // entire modal including the background
  const modal = document.querySelector("#thanks-modal");
  // contains the text that will show the user
  const modalContent = document.querySelector("#thanks-modal-content");
  modal.style.display = "flex";
  // thank you message
  modalContent.textContent = `Thank You, ${person.name}! `;
  
  // scale image every 0.5 seconds (500 miliseconds => every 0.5 seconds)
  intervalId = setInterval(scaleImage, 500);
  
  // hiding modal after a few seconds
  setTimeout(() => {
    modal.style.display = "none";
    clearInterval(intervalId);
  }, 4000)
}

// add animation
let scaleFactor = 1;
const modalImage = document.querySelector("#thanks-modal-img");
const scaleImage = () => {
  if (scaleFactor === 1) {
    scaleFactor = 0.8;
  } else {
    scaleFactor = 1;
  }
  modalImage.style.transform = `scale(${scaleFactor})`;
}

// 2. select the button and save it to the variable, "close_button"
let close_button = document.getElementById('close_button');
// 3. modal display hides
const closeModal = () => {
  // select entire module
  modal = document.querySelector("#thanks-modal");
  // hide modal when user clicks on the close button
  modal.style.display = "none";
}
// 1. call "closemodal" function when user clicks on the close button
close_button.addEventListener("click", closeModal);


// let navbar = document.getElementById("hamburger-1");
// const opennav = () => {
//   if (navbar.style.display === "block") {
//     navbar.style.display = "none";
//   } else {
//     navbar.style.display = "block";
//   }
// }
// navbar.addEventListener("click", opennav);

