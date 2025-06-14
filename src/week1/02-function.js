// 1. 인사말 메시지
function greetUser(username) {
  return '안녕하세요! ' + username + '님. 좋은 하루되세요!'
}

console.log(greetUser('민지'))


// 2. 원가 계산
const calculateOriginalPrice = function (price) {
  return parseInt(price / (1 + 0.033))
}

console.log(calculateOriginalPrice(6000))

// 3. 주류 판매 가능 여부
const registrationCard = {
  name: '김민지',
  age: 20,
  gender: 'female'
}

const canSellAlcohol = age => {
  if(age >= 19) {
  return "주류 구매가 가능합니다."
}else {
  return "19세 미만으로 주류 구매가 불가합니다."
}
}

console.log(canSellAlcohol(registrationCard.age))

// 4. 할인가 계산
const getDiscountedPrice = (originalPrice, discountPercent) => originalPrice-(originalPrice * discountPercent)

console.log(getDiscountedPrice(50000, 0.2))

// 5. 등급 판단
const ranking = score => {
  if(score >= 90) {
    return {score: score, grade: 'A', description: '매우 우수'}
  }else if(score >= 80){
    return {score: score, grade: 'B', description: '우수'}
  }else if(score >= 70){
    return {score: score, grade: 'C', description: '보통'}
  }else if(score >= 60){
    return {score: score, grade: 'D', description: '미달, 통과 기준 근접'}
  }else {
    return {score: score, grade: 'F', description: '낙제'}
  }
}

console.log(ranking(87))