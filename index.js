function isleapYear (year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400==0) {
        return 'Leap'
      }else {
        return 'Not Leap'
      }
    }else {
      return 'Leap'
    }
  }else {
    return 'Not Leap'
  }
}

console.log(isleapYear(2004));