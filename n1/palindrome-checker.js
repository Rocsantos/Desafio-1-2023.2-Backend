function palindrome(str) {
  str=str
    .toLowerCase()
    .match(/[a-z0-9]/g)
    .toString()
    .replaceAll(',','');
  let flag=0;
  for(let i=0; i<str.length/2; i++) {
    if(str[i]!=str[str.length-i-1])
      flag++;
  }
  return flag==0;
}

palindrome("eye");
