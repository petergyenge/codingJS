function last2(str: string): number {

    let lastTwoChar = ""
  
    let counter = 0
  
    let i = 0
    while (str[i] !== undefined) {
  
      if (str[i + 1] == undefined && str[i + 2] == undefined) {
        lastTwoChar = str[i] + str[i - 1]
      }
  
      if (lastTwoChar == (str[i] + str[i + 1])) {
        console.log(lastTwoChar + "inIf")
        counter++
  
      }
        console.log(str[i] + str[i + 1] + "TökömMár");
      
        console.log(lastTwoChar + "inWhile")
      i++
    } return counter
  
  }
  
  
  
  let test1 = last2("hixxhi")
  console.log(test1);
  
  let test2 = last2("xaxxaxaxx")
  console.log(test2);
  
  
  let test3 = last2("axxaaxx")
  console.log(test3);
  
  
  
  
  export { }