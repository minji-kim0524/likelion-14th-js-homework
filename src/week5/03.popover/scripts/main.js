{// 위쪽 방향 트리거
{
  const popover = document.querySelector('.popover')
  const trigger = document.querySelector('.popover-trigger')
  const container = document.querySelector('.container')

  const triggerPosition = trigger.getBoundingClientRect()
  const triggerPositionCenter = (triggerPosition.left + triggerPosition.right) / 2

  const popoverPosition = popover.getBoundingClientRect()
  const popoverPositionLeft = triggerPositionCenter - popoverPosition.width / 2

  popover.style.setProperty('left', `${popoverPositionLeft}px`)

  const popoverPositionTop = triggerPosition.top - popoverPosition.height - 10

  popover.style.setProperty('top', `${popoverPositionTop}px`)
  popover.setAttribute('hidden', 'true')


  trigger.addEventListener('click', () => {
    if(popover.hasAttribute('hidden')) {
      popover.removeAttribute('hidden', 'false')
    } else {
      popover.setAttribute('hidden', 'true')
    }
  })

  document.addEventListener('click', (e) => {
    const target = e.target
    if(target.closest('.popover') || target.closest('.popover-trigger')) return
    popover.setAttribute('hidden', 'true')
  })
}

// 왼쪽 방향 트리거
{
  const [, trigger] = document.querySelectorAll('.popover-trigger')
  const [, popover] = document.querySelectorAll('.popover')

  const tirggerPositon = trigger.getBoundingClientRect()
  const triggerPositionCenter = (tirggerPositon.top + tirggerPositon.bottom) / 2
  const popoverPositon = popover.getBoundingClientRect()
  const popoverPositonTop = triggerPositionCenter - popoverPositon.height / 2

  const popoverPositionLeft = tirggerPositon.left - popoverPositon.width - 10
  popover.style.setProperty('left', `${popoverPositionLeft}px`)
  popover.style.setProperty('top', `${popoverPositonTop}px`)

  popover.setAttribute('hidden', 'true')

  trigger.addEventListener('click', () => {
  if(popover.hasAttribute('hidden')) {
    popover.removeAttribute('hidden', 'false')
  } else {
    popover.setAttribute('hidden', 'true')
  }
  })

  document.addEventListener('click', (e) => {
    const target = e.target
    if(target.closest('.popover') || target.closest('.popover-trigger')) return
    popover.setAttribute('hidden', 'true')
  })
  
}

// 오른쪽 방향 트리거
{

  const [, , trigger] = document.querySelectorAll('.popover-trigger')
  const [, , popover] = document.querySelectorAll('.popover')

  const tirggerPositon = trigger.getBoundingClientRect()
  const triggerPositionCenter = (tirggerPositon.top + tirggerPositon.bottom) / 2
  const popoverPositon = popover.getBoundingClientRect()
  const popoverPositonTop = triggerPositionCenter - popoverPositon.height / 2

  const popoverPositionRight = tirggerPositon.right - popoverPositon.width - 600
  popover.style.setProperty('right', `-${popoverPositionRight}px`)
  popover.style.setProperty('top', `${popoverPositonTop}px`)

  popover.setAttribute('hidden', 'true')

  trigger.addEventListener('click', () => {
  if(popover.hasAttribute('hidden')) {
    popover.removeAttribute('hidden', 'false')
  } else {
    popover.setAttribute('hidden', 'true')
  }
  })

  document.addEventListener('click', (e) => {
    const target = e.target
    if(target.closest('.popover') || target.closest('.popover-trigger')) return
    popover.setAttribute('hidden', 'true')
  })

}

// 아래 방향 트리거 & 팝오버 js 생성
{
  const [, , , trigger] = document.querySelectorAll('.popover-trigger')
  const popover = document.createElement('div')
  popover.classList.add('popover')
  const popoverContent = document.createElement('p')
  popoverContent.textContent = `팝오버(Popover)는 추가 정보를 담는 UI 요소입니다. 사용자가 버튼을 클릭하면 팝오버가 나타납니다.`
  popover.dataset.position = trigger.dataset.popoverPosition
  popover.append(popoverContent)
  const grid = document.querySelector('.grid')
  grid.append(popover)

  const triggerPosition = trigger.getBoundingClientRect()
  const triggerPositionCenter = (triggerPosition.left + triggerPosition.right) / 2

  const popoverPosition = popover.getBoundingClientRect()
  const popoverPositionLeft = triggerPositionCenter - popoverPosition.width / 2

  popover.style.setProperty('left', `${popoverPositionLeft}px`)

  const popoverPositionBottom = triggerPosition.bottom - popoverPosition.height - 100

  popover.style.setProperty('bottom', `-${popoverPositionBottom}px`)
  popover.setAttribute('hidden', 'true')

  trigger.addEventListener('click', () => {
  if(popover.hasAttribute('hidden')) {
    popover.removeAttribute('hidden', 'false')
  } else {
    popover.setAttribute('hidden', 'true')
  }
  })

  document.addEventListener('click', (e) => {
    const target = e.target
    if(target.closest('.popover') || target.closest('.popover-trigger')) return
    popover.setAttribute('hidden', 'true')
  })

}

// 함수 선언
function generateRandomID(length = 5) {
  return `popover-${Math.random().toString(36).substring(2, length+2)}`
}

function createPopover(trigger) {
  const popover = document.createElement('div')
  popover.classList.add('.popover')
  const popoverContent = document.createElement('p')
  popoverContent.textContent = `팝오버(Popover)는 추가 정보를 담는 UI 요소입니다. 사용자가 버튼을 클릭하면 팝오버가 나타납니다.`
  popover.dataset.position = trigger.dataset.popoverPosition
  const target = trigger.setAttribute('dats-target', '')
  popover.dataset.id = target
  popover.append(popoverContent)
  document.body.append(popover)
}

}