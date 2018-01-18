var btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

var btn3 = document.querySelector('#bnt3');
btn3.addEventListener('click', () => {
  alert("Hello World");
});

btn.addEventListener('click', function(e) {
  console.log(e)
})

btn3.addEventListener('click', function(e) {
  console.log(e)
})

btn.addEventListener('click', function(e) {
  console.log(e.target)
})
btn.addEventListener('click', function(e) {
  e.target.style.background = 'blue'
})