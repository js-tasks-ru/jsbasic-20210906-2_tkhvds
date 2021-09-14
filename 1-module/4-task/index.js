const SPAM_WORD_1 = '1xBet';
const SPAM_WORD_2 = 'XXX';
function checkSpam(str) {
  let lowStr = str.toLowerCase();
 
  let lowOne = SPAM_WORD_1.toLowerCase();
  
  let lowTwo = SPAM_WORD_2.toLowerCase();
  
  return lowStr.includes(lowOne) || lowStr.includes(lowTwo);
}
