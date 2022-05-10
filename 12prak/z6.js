let isPalindrom=false
  let poly=prompt('Введите число для определения')
  let ylop=poly.split('').reverse().join('')
  poly=Number(poly)
  ylop=Number(ylop)
  if(poly==ylop){
   isPalindrom=true 
  }
  if(isPalindrom==true){
    alert("Это число палиндром")
  }
  else{
    alert("Это число не палиндром")
  }
