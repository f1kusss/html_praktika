let quantity=1
  let number=prompt('Введите число для подсчета цифр:')
  number=Number(number)
  while(number/10>1){
    number/=10
    quantity+=1
  }
  alert("Цифр в числе:"+quantity)
