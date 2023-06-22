// ####################################
// ####### ----- Fibonacci ----- ######
// ####################################

function fibonacci() {
  let count = 0
  let old = 0
  let previous = 1
  let fibonacci = prompt("What number do you want the Square Series for?")

  while (next <= fibonacci) {
    next = old + previous
    old = previous
    previous = next
    next = old + previous
  }

  alert( "sequence is" +count + old + previous + next)

}
