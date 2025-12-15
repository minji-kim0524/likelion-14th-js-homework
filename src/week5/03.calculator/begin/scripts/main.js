{
  const keys = document.querySelector(".calculator__keys");
  const display = document.querySelector(".calculator__display");

  let preResult = 0;
  let operator = "";
  let isNewInput = true;

  keys.addEventListener("click", (e) => {
    const button = e.target.closest("button");
    const keyType = button.dataset.key;
    const buttonType = button.dataset.buttonType;

    // 숫자버튼 처리
    if (buttonType === "number" || keyType === "decimal") {
      if (isNewInput) {
        display.textContent =
          keyType === "decimal" ? "0." : button.textContent.trim();
        isNewInput = false;
      } else {
        if (keyType === "decimal") {
          if (!display.textContent.includes(".")) {
            display.textContent += ".";
          }
        } else {
          display.textContent += button.textContent.trim();
        }
      }
    } else if (buttonType === "operator") {
      preResult = parseFloat(display.textContent.trim());
      operator = keyType;
      isNewInput = true;
    }
    switch (keyType) {
      case "clear":
        display.textContent = 0;
        preResult = 0;
        operator = "";
        isNewInput = true;
        break;
      case "equal":
        // 연산자 처리
        const newResult = parseFloat(display.textContent);
        let finalResult = 0;
        switch (operator) {
          case "plus":
            finalResult = parseFloat(preResult) + parseFloat(newResult);
            break;
          case "minus":
            finalResult = parseFloat(preResult) - parseFloat(newResult);
            break;
          case "times":
            finalResult = parseFloat(preResult) * parseFloat(newResult);
            break;
          case "divide":
            finalResult = parseFloat(preResult) / parseFloat(newResult);
            break;
        }
        display.textContent = finalResult;

        preResult = 0;
        operator = "";
        isNewInput = true;
    }
  });
}
