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
    operator = keyType

    // 숫자버튼 처리
    if (buttonType === 'number') {
      if(result === '0') {
        display.textContent = button.textContent
      } else{
        display.textContent += button.textContent
      }
    } else if(buttonType === 'operator') {
      preResult = result
      display.textContent = preResult
      operator = keyType
    } else {
      // 연산자 외 (소수점, 등호, AC) 처리
      // switch(keyType) {
      //   case 'plus' : 
      //   display.textContent = parseFloat(preResult) + parseFloat(newResult)
      //   break
      //   case 'minus' : 
      //   display.textContent = parseFloat(preResult) - parseFloat(newResult)
      //   break
      //   case 'times' : 
      //   display.textContent = parseFloat(preResult) * parseFloat(newResult)
      //   break
      //   case 'divide' : 
      //   display.textContent = parseFloat(preResult) / parseFloat(newResult)
      //   break
      // }
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
          const newResult = result
          if(keyType === 'plus') display.textContent = parseFloat(preResult) + parseFloat(newResult)
          if(keyType === 'minus') display.textContent = parseFloat(preResult) - parseFloat(newResult)
          if(keyType === 'times') display.textContent = parseFloat(preResult) * parseFloat(newResult)
          if(keyType === 'divide') display.textContent = parseFloat(preResult) / parseFloat(newResult)
          break
      }
    }
  })
}