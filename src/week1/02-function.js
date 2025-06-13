// 1. 인사말 메시지
function greetUser(username) {
  return '안녕하세요! ' + username + '님. 좋은 하루되세요!'
}

console.log(greetUser('민지'))


// 2. 원가 계산
const calculateOriginalPrice = function (price) {
  return price / (1 + 0.033)
}

console.log(calculateOriginalPrice(6000))

// 3. 주류 판매 가능 여부
const registrationCard = {
  name: '김민지',
  age: 20,
  gender: 'female'
}

// function canSellAlcohol(age) {
//   if(age >= 19) {
//   return "주류 구매가 가능합니다."
// }else {
//   return "19세 미만으로 주류 구매가 불가합니다."
// }
// }

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
function ranking (score) {
  if(90 <= score  &&  score<= 100) {
    return {score: score, grade: 'A', description: '매우 우수'}
  }else if(80 <= score && score <= 89){
    return {score: score, grade: 'B', description: '우수'}
  }else if(70 <= score && score <= 79){
    return {score: score, grade: 'C', description: '보통'}
  }else if(60 <= score && score <= 69){
    return {score: score, grade: 'D', description: '미달, 통과 기준 근접'}
  }else {
    return {score: score, grade: 'F', description: '낙제'}
  }
}

console.log(ranking(87))