/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  const timeString = parseInt(time)
  if (timeString < 12 ) {
     return 'Good Morning'
  } else if ( timeString >= 12 && timeString < 17) {
     return 'Good Afternoon'
  } else {
     return 'Good Evening'
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(params) {
  let greeting = document.getElementById('greeting')
  greeting.innerHTML = params
}