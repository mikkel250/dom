var btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");


var button3 = document.querySelector('#bnt3');
/* This has some issue despite being exactly the same as the instructions (I even copied/pasted to make sure)
button3.addEventListener('click', () => {
  alert("Hello World");
});
*/
btn.addEventListener('click', function(e) {
  console.log(e)
})
// Note, the variable 'e' is an object that references the EVENT itself
/* 
btn3.addEventListener('click', function(e) {
  console.log(e)
})

btn.addEventListener('click', function(e) {
  console.log(e.target)
})
btn.addEventListener('click', function(e) {
  e.target.style.background = 'blue'
})

function alertFunction() {
	alert("YAY! YOU DID IT!");
}

var button4 = document.querySelector('#btn4');
button4.onclick = alertFunction

// for whatever reason this is still causing an error 
// button3.addEventListener('click', alertFunction);
*/