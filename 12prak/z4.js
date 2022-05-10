let multiplicationResult=1
  let i=1
  let n=prompt('До какого чсила считаем?')
  n=Number(n)
  for (i=1;i<=n;i++){
    if(i%2==0){
      multiplicationResult*=i
    }
  }
  alert(multiplicationResult)
