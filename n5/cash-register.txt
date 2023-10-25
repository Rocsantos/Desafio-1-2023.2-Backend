let coin = [
  ["PENNY", 1],
  ["NICKEL", 5],
  ["DIME", 10],
  ["QUARTER", 25],
  ["ONE", 100],
  ["FIVE", 500],
  ["TEN", 1000],
  ["TWENTY", 2000],
  ["ONE HUNDRED", 10000],
]
function checkCashRegister(price, cash, cid) {
  let change = [], close=[];
  let total=cash*100-price*100, totalcid=0, status;

  for(let c of cid) {
    c[1]*=100
    totalcid+=c[1];
  }

  if(total > totalcid) return { status: "INSUFFICIENT_FUNDS", change };
  if(total == totalcid) totalcid = -1;

  for(let i=coin.length-1; i>=0; i--) {
    if(total>=coin[i][1]) {
      status = "OPEN";
      if(total>=cid[i][1]) {
        total-=cid[i][1];
        change.push([cid[i][0],cid[i][1]/100])
        close.push([cid[i][0],cid[i][1]/100])
      }
      else {
        let val = total%coin[i][1];
        let res = total-val;
        total -= res;
        change.push([cid[i][0], res/100])
        close.push([cid[i][0], res/100])
      }
    }
    else {
      close.push([cid[i][0], 0]);
    }
  }

  if(total>=1) return { status: "INSUFFICIENT_FUNDS", change:[] };
  else if(totalcid==-1) {
    return { status: "CLOSED", change: close.reverse() };
  }
  return { status, change};
}

console.log(
  // checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]),
// Object

  // checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]),
// OPEN

// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]),
// OPEN

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]),
// INSUFFICIENT_FUNDS

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]),
// INSUFFICIENT_FUNDS

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
// CLOSED

);