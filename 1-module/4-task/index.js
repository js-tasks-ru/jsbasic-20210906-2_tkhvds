function checkSpam(str) {
  let lowStr = str.toLowerCase();
  let firstSpamWord = '1xBet';
  let lowOne = firstSpamWord.toLowerCase();
  let SecondSpamWord = 'XXX';
  let lowTwo = SecondSpamWord.toLowerCase();
  return lowStr.includes(lowOne) || lowStr.includes(lowTwo);
}
checkSpam('1XbeT now');
checkSpam('free xxxxx');
checkSpam('innocent rabbit');