{
const tabsWrapper = document.querySelector('.tabsWrapper')
const tabs = tabsWrapper.querySelectorAll('.tab')
const contents = document.querySelectorAll('.contents')

const SELECTED_NAME = 'is-selected'

let selectedIndex = -1

for (let i = 0, l = tabs.length; i < l; i++) {
    const tab = tabs.item(i)
    if(tab.classList.contains(SELECTED_NAME)) {
      selectedIndex = i
      break
    }
  }
  
for(const tab of tabs){
    tab.addEventListener('click', () => {
      if(selectedIndex > -1) {  
      const selectedTab = tabs.item(selectedIndex)
      const selectedContent = contents.item(selectedIndex)
      selectedTab.classList.remove(SELECTED_NAME)
      selectedContent.classList.remove(SELECTED_NAME)
      }   

  let activeIndex

  for(i = 0, l = tabs.length; i < l; i++) {
    const compareTab = tabs.item(i)
    if(compareTab === tab) {
      activeIndex = i
      break
    } 
  }
  const activeTab = tabs.item(activeIndex)
  const activeContent = contents.item(activeIndex)

  activeTab.classList.add(SELECTED_NAME)
  activeContent.classList.add(SELECTED_NAME)
  
  selectedIndex = activeIndex

})
}
// 지원하기 버튼 클릭시 지원완료 메세지 띄우기
  const applyButton = document.querySelector('.applyBtn')

  applyButton.addEventListener('click', () => {
    alert('지원이 완료되었습니다')
  })

}