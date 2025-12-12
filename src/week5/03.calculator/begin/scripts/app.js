{
  const display = document.querySelector(".calculator__display");
  const numberBtns = document.querySelectorAll('[data-button-type="number"]');

  // 숫자 버튼 눌렀을 때 화면표시
  numberBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      display.textContent = btn.textContent;
    });
  });
}
