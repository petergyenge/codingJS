function missingChar(str: string, n: number){
  let strN = str[n]
  let result = ""
    for (let i = 0; i < str.length; i++) {
        if(str[i] != strN){
            result += str[i]
            console.log(result)
        }else{
            result == result
            console.log(result)
        }
    }
}


let test = missingChar('kitten', 1) // ktten
console.log(test)
let test2 = missingChar('kitten', 0) // itten
console.log(test2)
let test3 = missingChar('kitten', 4) // kittn
console.log(test3)