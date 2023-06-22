// ####################################
// ####### ----- Factorial ----- ######
// ####################################

function factorial() {
  let count = 1
  let increment = 1
  let next = 1

  let Factorial = prompt("What number do you want the Factorial for?")



  while (count <= Factorial) {
    next = Factorial - increment
    final = next * Factorial
  }
  alert('count is :' +final)

}
