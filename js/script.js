const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// add the following: 
// a <p> with red text that says “Hey I’m red!”
const redP = document.createElement('p');
redP.style.cssText = 'color: red';
redP.textContent = "Hey I'm red!";
content.appendChild(redP);

// an <h3> with blue text that says “I’m a blue h3!”
const blueH3 = document.createElement('h3');
blueH3.style.cssText = 'color: blue';
blueH3.textContent = "I'm a blue h3!";
content.appendChild(blueH3);

/* a <div> with a black border and pink background color with the following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”
Hint for this one: after creating the div with createElement, 
append the <h1> and <p> to it before adding it to the container. */
const newDiv = document.createElement('div');
const meToo = document.createElement('p');
const divH1 = document.createElement('h1');
newDiv.appendChild(meToo);
newDiv.appendChild(divH1);
newDiv.style.cssText = 'borderColor: black; backgroundColor: pink';
meToo.style.cssText = 'color: brown';
meToo.textContent = "I'm in a div";
divH1.textContent = "ME TOO!";
newDiv.appendChild(meToo);
newDiv.appendChild(divH1);
content.appendChild(newDiv);

