// 위쪽 방향 트리거
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

  const popoverPositionRight = tirggerPositon.right - popoverPositon.width - 100
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

// 아래 방향 트리거
{

  const [, , , trigger] = document.querySelectorAll('.popover-trigger')
  const [, , , popover] = document.querySelectorAll('.popover')

  const triggerPosition = trigger.getBoundingClientRect()
  const triggerPositionCenter = (triggerPosition.left + triggerPosition.right) / 2

  const popoverPosition = popover.getBoundingClientRect()
  const popoverPositionLeft = triggerPositionCenter - popoverPosition.width / 2

  popover.style.setProperty('left', `${popoverPositionLeft}px`)

  const popoverPositionBottom = triggerPosition.bottom - popoverPosition.height - 200

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