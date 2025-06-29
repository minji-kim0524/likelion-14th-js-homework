{
  
const container = document.querySelector(".carouselContainer")
const contents = container.querySelectorAll('.carouselContents')
const previousBtn = document.querySelector('[alt="이전 탐색"]')
const nextBtn = document.querySelector('[alt="다음 탐색"]')

console.log(contents)

const SELECTED_NAME = 'is-selected'

let selectedIndex = -1


for(let i = 0, l = contents.length; i < l; i++) {
  if(contents.item(i).classList.contains(SELECTED_NAME)) {
    selectedIndex = i
    break
  }
}

if(selectedIndex === 0) {
  previousBtn.style.disabled = true
}else if(selectedIndex === contents.length - 1) {
  nextBtn.style.disabled = true
}

nextBtn.addEventListener('click', () => {
  const selectedContent = container.querySelector('.' + SELECTED_NAME)
  const nextContent = selectedContent.nextElementSibling

  selectedContent.classList.remove(SELECTED_NAME)
  nextContent.classList.add(SELECTED_NAME)

  // if(!nextContent.nextElementSibling) {nextBtn.disabled = true}

  const distance = getComputedStyle(nextContent).getPropertyValue('left')
  contents.style.setProperty('transform', 'translateX(-'+ distance +')')
})

previousBtn.addEventListener('click', () => {
  const selectedContent = container.querySelector('.' + SELECTED_NAME)
  const prevContent = selectedContent.previousElementSibling

  selectedContent.classList.remove(SELECTED_NAME)
  prevContent.classList.add(SELECTED_NAME)

  // if (!prevContent.previousElementSibling) {previousBtn.disabled = true}

  const distance = getComputedStyle(prevContent).getPropertyValue('left')
  contents.style.setProperty('transform', 'translateX(-'+ distance +')')
})

}
