function updateButtonSize() {
  var buttons = document.querySelectorAll('.btn-responsive');
  buttons.forEach(function(button) {
    if (window.innerWidth < 992) {
      button.classList.remove('btn-lg');
    } else {
      button.classList.add('btn-lg');
    }
  });
}

window.addEventListener('resize', updateButtonSize); // 監聽視窗大小改變
window.addEventListener('load', updateButtonSize); // 初次加載時執行一次