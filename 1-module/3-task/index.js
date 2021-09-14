function ucFirst(str) {
  let newString;
    if (str == ''){
        return '';
    }
    if ( str.length >= 2){
        let firstLetter = str[0].toUpperCase();
        let pieceString = str.slice(1);
        newString = firstLetter + pieceString;
    } else {
        let frstLetter = str[0].toUpperCase();
        return frstLetter;
    }

    return newString;
}
