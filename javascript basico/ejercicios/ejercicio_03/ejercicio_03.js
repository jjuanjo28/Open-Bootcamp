function factorial_for (numero) {
  let factorial = 1
    for(let i = 0; i < numero; i++){
    factorial = factorial + (factorial*i)
  }
 return (console.log("factorial_for = ",factorial))
}

function factorial_while (numero) {
    let factorial = 1
    let i = 1
      while(i < numero){
      factorial = factorial + (factorial*i)
      i++
    }
   return (console.log("factorial_while = ",factorial))
  }

  function factorial_while_break (numero) {
    let factorial = 1
    let i = 1
      while(true){
      factorial = factorial + (factorial*i)
      i++
      if(i == numero){
        break
      }
    }
   return (console.log("factorial_while_break = ",factorial))
  }
factorial_for(5)
factorial_while(5)
factorial_while_break(5)