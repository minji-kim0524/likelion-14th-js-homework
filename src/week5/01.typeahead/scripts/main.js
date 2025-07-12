{
  /* DOM purify */

  const typeahead = document.querySelector('.typeahead')
  const input = typeahead.querySelector('input')
  const countryList = typeahead.querySelector('ul')

  // 입력창(input)에 내용을 입력했을 때 해당 데이터(예측목록)를 불러와서 목록화
  input.addEventListener('input', (e) => {
    const inputContent = e.target.value.trim()
    const inputList = COUNTRIES.filter(({name}) => name.startsWith(inputContent))

    const listTemplate = inputList.reduce((template, inputList) => {
      const inputLength = inputContent.length
      const boldText = inputList.name.substring(0, inputLength)
      const restText = inputList.name.substring(inputLength)     
      
      template += `<li><strong>${boldText}</strong>${restText}</li>`
      return template
    }, '')

    countryList.innerHTML = DOMPurify.sanitize(listTemplate)
    countryList.removeAttribute('hidden')

    if(!inputContent) {
      countryList.setAttribute('hidden', 'true')
      return
    }
  })

  // 자동완성된 데이터를 선택했을 때, 해당 내용 입력창에 반영하기
  countryList.addEventListener('click', (e) => {
    const selectedList = e.target

    if(!selectedList) return
    input.value = selectedList.textContent
    countryList.setAttribute('hidden', 'true')
  })

}