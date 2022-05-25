let calculateSalary = function(salary){
    if(salary>=100000){
        return(Math.round(salary*0.55))
    }
    else{
        return(Math.round(salary*0.65))
    }
}
console.log(calculateSalary(35000))