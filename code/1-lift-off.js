// ####################################
// ####### ----- Lift Off ----- #######
// ####################################

function liftOff() {
  let count = 10
 
  while (count > 0) {
    alert(count + '...')
    count = count - 1
  }
   
  alert('Lift Off!')
}

function make1() {
  let count = 0
  let maximum = prompt("Enter the Maximum:")
  let increment = prompt("Enter the increment:")

  while (count < maximum) {
    alert(count)
    count = count + increment
  }
  
}