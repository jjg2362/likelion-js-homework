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
