const container = document.querySelector('.container');

const rows = 10;
const cols = 3;

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement('img');
  img.src = imgURL(randomSize(), randomSize());
  container.appendChild(img);
}

// 300-309
function randomSize() {
  return Math.floor(Math.random() * 10) + 300;
}

function imgURL(width, height) {
  return `https://source.unsplash.com/random/${width}x${height}`;
}
