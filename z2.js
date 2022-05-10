let minutes=0
  let isRaining=confirm("Дождь идет?")
  if (isRaining==true){
    alert('Продолжительность прогулки '+minutes)      
  }
  else{
    let temperature=prompt("Какая температура?")
    if(temperature>=10 && temperature<15){
      minutes=30
      alert('Продолжительность прогулки '+minutes)  
    }
    else if(temperature>=15 && temperature<25){
      minutes=40
      alert('Продолжительность прогулки '+minutes)  
    }
    else if(temperature>=25 && temperature<35){
      minutes=20
      alert('Продолжительность прогулки '+minutes)  
    }
    else alert('Продолжительность прогулки '+minutes)
  }
