function truncate(str, maxlength) {
  // ваш код...
  let answer = "";
  if (str.length <= maxlength) {
    return str;
  } else {
    for (let i = 1; i != maxlength; i++) {
      answer += str[i-1];
    }
    return answer + "…"; 
  }
}
  