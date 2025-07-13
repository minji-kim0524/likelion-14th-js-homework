{
  const keys = document.querySelector('.calculator__keys')
  const display = document.querySelector('.calculator__display')

  let preResult = ''
  let operator = ''

  keys.addEventListener('click', (e) => {
    const button = e.target.closest('button')
    const result = display.textContent
    const keyType = button.dataset.key
    const buttonType = button.dataset.buttonType

    // 숫자버튼 처리
    if (buttonType === 'number') {
      if(result === '0') {
        display.textContent = button.textContent
      } else{
        display.textContent += button.textContent
      }
    } else if(buttonType === 'operator') {
      preResult = result
      operator = keyType
      display.textContent = preResult
    } 
      switch(keyType) {
        case 'decimal' : 
          if (!result.includes('.')) {
            display.textContent = result + '.'  
          } 
          break
        case 'clear' : 
          display.textContent = '0'
          break
        case 'equal' : 
          // 연산자 처리
          const newResult = display.textContent
          let finalResult = ''
          switch(operator) {
            case 'plus' : finalResult = parseFloat(preResult) + parseFloat(newResult); break
            case 'minus': finalResult = parseFloat(preResult) - parseFloat(newResult); break
            case 'times': finalResult = parseFloat(preResult) * parseFloat(newResult); break
            case 'divide' : finalResult = parseFloat(preResult) / parseFloat(newResult); break
          }
          display.textContent = finalResult
      }

  })
}