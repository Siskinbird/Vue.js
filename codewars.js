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


