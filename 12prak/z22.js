let temperature=0
  let isRaining=confirm("Дождь идет?")
  if (isRaining==true){
    alert('Продолжительность прогулки 0')      
  }
  else{
    temperature=prompt("Какая температура?")
    temperature=Number(temperature)
    if(temperature<0 || temperature>35){
      alert('Продолжительность прогулки 0')  
    }
    else if(temperature==20){
      let minutes=20
      alert('Продолжительность прогулки '+minutes)
    }
    else{
      let prom1=temperature+1
      let prom2=temperature-1
      alert('Продожитльность прогулки составит '+prom1+' или '+prom2)
    }
  }
