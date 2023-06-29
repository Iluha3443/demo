
const openBtn = document.querySelector('.open');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn');

openBtn.addEventListener('click', openModal)

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

function openModal() {
    modal.style.display = 'block';
    modal.innerHTML = getAuthForm();
}



function getAuthForm() {
    return  `
<div class="modal-window">
  <div class="modal-content">
    <h2>Authentication
</h2>
    <form class="form" id="auth-form">
      <div class="form-group">
        <input type="email" id="email" required>
        <label for="email">Email</label>
      </div>
      <div class="form-group">
        <input type="password" id="password" required>
        <label for="password">Пароль</label>
      </div>
      <button type="submit" class="submit-btn">Войти</button>
    </form>
    <button class="close-btn">Закрыть</button>
  </div>
</div>
  `
  
}