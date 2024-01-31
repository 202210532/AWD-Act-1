let container = document.getElementById('container');
let greetingText = document.getElementById('greetingText');
let count = 50;
let isDefaultState = true;
let isSpringState = false;

// Function to create snowflakes
function createSnowflakes() {
  for (var i = 0; i < 400; i++) {
    let leftSnow = Math.floor(Math.random() * container.clientWidth);
    let topSnow = Math.floor(Math.random() * container.clientHeight);
    let widthSnow = Math.floor(Math.random() * 50);
    let timeSnow = Math.floor((Math.random() * 5) + 5);
    let blurSnow = Math.floor(Math.random() * 20);

    let div = document.createElement('div');
    div.classList.add('snow');
    div.style.left = leftSnow + 'px';
    div.style.top = topSnow + 'px';
    div.style.width = widthSnow + 'px';
    div.style.height = widthSnow + 'px';
    div.style.animationDuration = timeSnow + 's';
    div.style.filter = "blur(" + blurSnow + "px)";
    container.appendChild(div);
  }
}

// Function to change snowflake image, background, and greeting text for fall
function changeToFall() {
  // Change snowflake image
  let snowflakes = document.querySelectorAll('.snow');
  snowflakes.forEach(snowflake => {
    snowflake.style.backgroundImage = "url(leaf.png)";
  });

  // Change background image
  container.style.backgroundImage = "url(Fallbackground.jpg)";

  // Change greeting text
  greetingText.innerText = "Fall";

  // Update state
  isDefaultState = false;
  isSpringState = false;
}

// Function to change snowflake image, background, and greeting text for winter
function changeToWinter() {
  // Change snowflake image back to snow
  let snowflakes = document.querySelectorAll('.snow');
  snowflakes.forEach(snowflake => {
    snowflake.style.backgroundImage = "url(snow.png)";
  });

  // Change background image back to snow background
  container.style.backgroundImage = "url(Snowbackground.jpg)";

  // Change greeting text back to Winter
  greetingText.innerText = "Winter";

  // Update state
  isDefaultState = true;
  isSpringState = false;
}

// Function to change snowflake image, background, and greeting text for spring
function changeToSpring() {
  // Change snowflake image for spring
  let snowflakes = document.querySelectorAll('.snow');
  snowflakes.forEach(snowflake => {
    snowflake.style.backgroundImage = "url(petal.png)"; // Assuming you have a flowers image
  });

  // Change background image for spring
  container.style.backgroundImage = "url(Springbackground.jpg)";

  // Change greeting text for spring
  greetingText.innerText = "Spring";

  // Update state
  isDefaultState = false;
  isSpringState = true;
}

// Event listener for the "Change Season" button
document.getElementById('changeSnowflake').addEventListener('click', function() {
  if (isDefaultState) {
    changeToFall();
  } else {
    changeToWinter();
  }
});

// Event listener for the "Spring Time" button
document.getElementById('changeToSpring').addEventListener('click', function() {
  if (isSpringState) {
    // If already in spring state, revert to default state
    changeToWinter();
  } else {
    // Change to spring state
    changeToSpring();
  }
});

// Initial creation of snowflakes
createSnowflakes();
