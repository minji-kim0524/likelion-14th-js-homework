{
  const accordionContainer = document.querySelector('.accordion_container')
  const accordions = accordionContainer.querySelectorAll('.accordion-wrapper')
  
    accordions.forEach((accordion) => {
    const accordionButton = accordion.querySelector('button')
    accordionButton.addEventListener('click', () => {
      accordion.classList.toggle('is-open')
    })
  })
}