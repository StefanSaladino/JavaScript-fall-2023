var output = document.querySelector('body p:nth-of-type(2)');
/* STEP 1a: A simple if|else statement */
var homeWorkDone = true;
var coffeeBreak;
if(homeWorkDone){
    coffeeBreak = 20;
} else {
    coffeeBreak = 1;
}
output.textContent = `You will get a break for ${coffeeBreak} minutes.`;

// STEP 1b: Any value that is not false, undefined, null, 0, NaN, or 
//an empty string will evaluate to TRUE when tested using a conditional statement
homeWorkDone = NaN;

/* STEP 2: The more complex if|elseif|else */
var page = document.querySelector('html');
var select = document.querySelector('select');
var icon = document.querySelector('#weatherIcon');
var temp = document.querySelector('#temp');
var comments = document.querySelector('#commentary');
var comments2 = document.querySelector('#commentary2');

/* STEP 2a: Add an event listener for the 'change' event that invokes 
the setWeather() function below */
select.addEventListener("change", setWeather);


function setWeather() {
    var choice = select.value;
    var temperature = temp.value;
    console.log(choice);
    console.log(temperature);
    /* STEP 2b: Craft an IF/ELSEIF/ELSE that changes the src 
    attribute of the icon element to the appropriate 
    .svg file in the images folder */
    if(choice === "sunny"){
        icon.setAttribute("src", "images/sunny.svg");//<img src="" alt= "" id="weatherIcon" width="50" height= "50" />
        if(temperature >= 15){
            page.style.backgroundColor = "orange";
        }else{
            page.style.backgroundColor = "lightblue";
        }
    } else if(choice === "rainy"){
        icon.setAttribute("src", "images/rainy.svg");
        page.style.backgroundColor="lightgray";
    }else{
        icon.setAttribute("src", "images/windy.svg");
        page.style.backgroundColor="lightpink";
    }
    
    /* STEP 3: Add a nested IF/ELSE statement inside the 'sunny' 
    condition above that tests for temperature, and if it is equal 
    to or greater than 15, turn the page background orange, otherwise 
    turn it lightblue */

    /* STEP 4: Logical operators - and, or, not */
    // STEP 4a: AND - &&
    if (choice === "sunny" && temperature < 15) {
        comments.textContent = 'It is ' + temperature + ' degrees outside - that\'s a bit cool.';
        // STEP 4b: AND, once again - &&
    } else if (choice === "sunny" && temperature > 15) {
        comments.textContent = 'It is ' + temperature + ' degrees outside — time to find your sunglasses!';
        // STEP 4c: OR - ||
    } else if (choice === "rainy" || choice === "windy") {
        comments.textContent = 'The weather today is a bit dreary.';
    }

    //STEP 4 d: NOT - !
    if ( choice !== "rainy") {
        comments2.textContent = 'Oh Yes. It\'s not raining. Let\'s go!';
    } else {
        comments2.textContent = 'It\'s a miserable day it\'s raining.';
    }

    // Weather icons by Cole Bemis - https://feathericons.com/, MIT, https://commons.wikimedia.org/w/index.php?curid=60153354
}
/* STEP 5: Switch statements
Sometimes listing a series of conditions and the code 
that might be executed in each case is the friendliest way to structure 
your conditional */

var windSpeed = document.querySelector('#windSpeed');
var windComment = document.querySelector('#windComment');

windSpeed.addEventListener('change', getWindSpeed);

function getWindSpeed() {
    var speed = Number(windSpeed.value);
    // STEP 5a: Build the SWITCH code block
    switch(speed){
        // STEP 5b: Build out few cases, followed by a default
        case 100:
            windComment.textContent = speed + 'km/h - Holy schmoly! Hold on to your hat';
            break;
        case 80:
            windComment.textContent = speed + 'km/h - It\'s a-howling out there!';
            break;
        case 60:
            windComment.textContent = speed + 'km/h - Slightly breezy.';
            break;
        case 40:
            windComment.textContent = speed + 'km/h - Still not good.';
            break;
        case 20:
            windComment.textContent = speed + 'km/h - Somewhat better!';
            break;
        default:
            windComment.textContent = speed + 'km/h - Calm as can be.';
            break;
    }
} // End of setWeather() function

/* STEP 6: Ternary operator
This piece of syntax is a bit less typing, but it is harder to read */
var breakMessage = document.querySelector('#breakTime');
var coffeeBreak = true;

coffeeBreak ? breakMessage.textContent = "Coffee time" : breakMessage.textContent = "Back to Work";
// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals