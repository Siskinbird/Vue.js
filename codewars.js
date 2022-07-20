function highestRank(arr){
  let obj = {}
  arr.forEach(el => {
    obj[el] ? obj[el] += 1 : obj[el] = 1
  })
  let val = Object.values(obj)
  let max = Math.max(...val)
  let key = Object.keys(obj).filter(key => obj[key] === max);
  max = Math.max(...key)
  return max
}
highestRank([12,10,8,12,7,6,4,10,12,10])


function howLetter(arrA) {
  let objA = {};
  arrA.forEach(el => {
    objA[el] ? objA[el] +=1 : objA[el] = 1;
  })
  return objA
}

console.log(howLetter(['q','r','d','r','f','d','g','h','f','d','c','f','f','f','g','r','c','b','n','s','y']));