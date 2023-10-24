function convertToRoman(num) {
  let algorithmsRoman=[
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ], romanNumber="";
  for(let i=0;i<algorithmsRoman.length;i++) {
    while(num >= algorithmsRoman[i][1]) {
      romanNumber+=algorithmsRoman[i][0];
      num-=algorithmsRoman[i][1];
    }
  }
  return romanNumber;
}

convertToRoman(3999);