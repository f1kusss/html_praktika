let numbers = [1,2,3,4,5,1]
let number = 1
let lastIndex = -1
for (let i = 0; i <= numbers.length - 2; i++) {
    let minValue = numbers[i];
    for (let j = i + 1; j <= numbers.length - 1; j++) {
    if (numbers[j] < minValue) {
    minValue = numbers[j];
    let swap = numbers[i];
    numbers[i] = minValue;
    numbers[j] = swap;
    }
    }
   }
for(let i=numbers.length-1; i>=0;i--){
    if(numbers[i]==number){
        lastIndex=i
        alert(lastIndex)
        break
    }
    else{
        alert('Элемент не найден')
        break
    }
}
