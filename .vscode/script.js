const parentEl = document.getElementById('36');
const alloEl = document.getElementById('1');
const comfyEl = document.getElementById('2');
const eldosEl = document.getElementById('3');

parentEl.addEventListener('click', textNewElements )

function textNewElements(event) {
  console.log(event.target)
  const newproblem = event.target;
  newproblem.remove()
  }



