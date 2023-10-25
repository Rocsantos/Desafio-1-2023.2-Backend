function rot13(str) {
  function getCode(letter) {
    return letter.charCodeAt(0);
  }
  function toChar(letter) {
    return String.fromCharCode(letter);
  }
  let res="";
  str.toUpperCase().split('').forEach(c=>{
    if(c.match(/[A-Z]/)) {
      let newC=getCode(c)-getCode("A")-13;
      if(newC >= 0) {
        res+=toChar(getCode("A")+newC);
      }
      else res+=toChar(getCode("Z")+newC+1);
    }
    else res+=c;
  });
  return res;
}

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");