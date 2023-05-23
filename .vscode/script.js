

const parentEl = document.getElementById('storm');



parentEl.addEventListener('click', textNewElements )

function textNewElements(event) {
  if (event.target.nodeName === 'BUTTON') {
    const btnEl = document.createElement('button');
    btnEl.classList.add('btn-new-style');
    btnEl.textContent = 'Новая кнопка';
    parentEl.appendChild(btnEl);
  }
};

 