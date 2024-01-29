function checkSpam(str) {
  // ваш код...
  let spamWord_1 = "1XBET";
  let spamWord_2 = "XXX";
  return (str.toUpperCase().includes(spamWord_1) || str.toUpperCase().includes(spamWord_2))
}