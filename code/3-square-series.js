// ####################################
// ##### ----- Square Series ----- ####
// ####################################

function squareSeries() {
 
  let count = 1
  let increment = 1

  let squareSeries = prompt("What number do you want the Square Series for?")

  let list = ''


  while (count <= squareSeries) {
    square = squareSeries * squareSeries
    list = list + ', '+square
    squareSeries = squareSeries - increment
  }
  alert('count is :' +list)
}
