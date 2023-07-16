// ####################################
// ####### ----- Attendees ----- ######
// ####################################

function attendees() {
  let count = 0
  let numOfAttendees = 5
  let attendeeList = ''
  
  while (count < numOfAttendees) {
    let attendee = prompt("Enter a name:")
    attendeeList = attendeeList + ', ' + attendee
    count = count + 1
  }
  
  alert(attendeeList) 
}

function make2() {
  let count = 0
  let next = 0
  let i = 1
  let numOfNumbers = prompt("How many numbers do you want to add?")
  
  while (i <= numOfNumbers) {
    let number = prompt("Enter a number:")
    count = count + 1
    sum += Number(number)
    
  }
  alert(sum) 
  
}