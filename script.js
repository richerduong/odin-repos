const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// Create the <p> element
const redParagraph = document.createElement('p');
redParagraph.textContent = 'Hey I\'m red!';
redParagraph.style.color = 'red';
container.appendChild(redParagraph);

// Create the <h3> element
const blueHeader = document.createElement('h3');
blueHeader.textContent = "I'm a blue h3!";
blueHeader.style.color = 'blue';
container.appendChild(blueHeader);

// Create the <div> element
const divElement = document.createElement('div');
divElement.style.border = '1px solid black';
divElement.style.backgroundColor = 'pink';

// Create the <h1> element
const headerElement = document.createElement('h1');
headerElement.textContent = "I'm in a div";
divElement.appendChild(headerElement);

// Create the inner <p> element
const innerParagraph = document.createElement('p');
innerParagraph.textContent = "ME TOO!";
divElement.appendChild(innerParagraph);

container.appendChild(divElement);