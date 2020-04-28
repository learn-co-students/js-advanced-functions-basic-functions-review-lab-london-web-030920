function saturdayFun(activity = "roller-skate"){
return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective (cool="*") {
    return function(adjective="special") {
      return `You are ${cool}${adjective}${cool}!`
    }
  }

  let Calculator = {
     add: function(a,b){
        return a+b
      },
      subtract: function(a,b){
          return a-b
      },
      multiply: function(a,b) {
        return a * b
      },
      divide: function(a,b) {
        return a / b
      }
  }

  const actionApplyer = (integer, array) => {
if (array.length === 0 ){
    return integer
}
else {
    for (const element of array){
        integer = element(integer)
    }
    return integer
}
  }
