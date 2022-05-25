let getPrice = function(time,quick=Boolean){
    priceH=1500
    if (quick){
        if(time>=150){
            priceH-=250
            return priceH*time/2
        }
        return priceH*time/2
    }
    else{
        if(time>=150){
            priceH-=250
            return priceH*time
        }
    return priceH*time
    }
}
console.log(getPrice(100,true))