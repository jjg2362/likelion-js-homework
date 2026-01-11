//1. 환영 메시지 생성

function makeWelcomeMessage(userName, userGrade) {
  const message = {
    VIP: `🌟 VIP ${userName}님, 특별한 혜택이 준비되어 있습니다!`,
    OTHER: `안녕하세요, ${userName}님! 즐거운 쇼핑 되세요.`
  }

  return message[userGrade] || message.OTHER;
}

console.log(makeWelcomeMessage('조재권', 'VIP'));
console.log(makeWelcomeMessage('조재권', ''));

//2. 배송비 계산
const getDeliveyPrice = function (orderPrice, area) {
  const basePrice = 3000;
  const chargePrice = 3000;

  const isCharge = area === '제주' || area === '도서';
  const isFree = orderPrice >= 50000 || orderPrice === 0;

  const totalPrice = !isFree * (basePrice + isCharge * chargePrice);

  return totalPrice;
}

console.log(getDeliveyPrice(49000, '서울')); //기본요금
console.log(getDeliveyPrice(49000, '제주')); //추가요금
console.log(getDeliveyPrice(51000, '서울')); //5만원 이상
console.log(getDeliveyPrice(0, '서울')); //주문금액이 0일 때
console.log(getDeliveyPrice(49000, '')); //배송지가 빈 문자열일 때

