let goToDairy,goToStore,goToMarket
  let time=prompt("Который час?")
  if(time>=8 && time<13 || time>=14 && time<19){
    goToDairy=true
    alert('Иди на фабрику')
  }
  else{
    if(time>=9 && time<14 || time>=15 && time<17){
      goToStore=true
      alert('Иди в магазин')
    }
    else{
      if(time>=7 && time<20){
        goToMarket=true
        alert('Иди на рынок')
      }
      else{
        goToDairy,goToStore,goToMarket=false,false,false
        alert('Никуда не иди')
      }
    }
  } 
