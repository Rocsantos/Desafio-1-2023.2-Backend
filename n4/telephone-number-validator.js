function telephoneCheck(str) {
  let regexTelephone = [
    /([0-9]{3}(-|\s)?){2}([0-9]{4})/g, // 555-555-5555
    /(\([0-9]{3}\)(-|\s)?)([0-9]{3}(-|\s)?[0-9]{4})/g, // (555)555-5555
  ];
  for(let i=0; i<regexTelephone.length; i++) {
    let search = str.search(regexTelephone[i]);
    if(search!=-1) {
      let digits = str.match(/[0-9]/g).length;
      return search == 0?
        digits==10:
        search <= 2?
          str[0]==1:
          false;
    }  
  }
  return false;
}