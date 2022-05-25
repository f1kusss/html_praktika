let numbers = [1,2,3,4,5,1]
let number = 1
let lastIndex = -1
for(let i=numbers.length-1; i>=0;i--){
    if(numbers[i]==number){
        lastIndex=i
        break
    }
}
alert(lastIndex)