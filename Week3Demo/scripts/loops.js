var courses = ['Intro to Web Programming', 'Client-Side JavaScript', 'Bitmap & Vector Graphics',
'Web UI Design with CSS', 'Relational Database', 'Advanced Java'
];
var courseList = 'My courses this term are ';
var msg = document.querySelector('#courses');
/* STEP 1a: A simple FOR loop
A simple loop of this structure needs an initializer (counter variable), 
an exit conditional, and and incrementor/decrementor */
msg.textContent = courseList;

// STEP 1b: Add a conditional for the last item in the array so we can finish the sentence with a period.


/* STEP 2: Exit a loop with break */
var cities = ['Toronto', 'Montreal', 'Ottawa', 'Vancouver', 'Halifax'];
var result = document.querySelector('#searchResult');
var input = document.querySelector('input');
var btn = document.querySelector('button#cities');

btn.addEventListener('click', function () {
var searchName = input.value;
input.value = '';
input.focus();
//searchName = searchName.toLowerCase();
/* STEP 2a: Create a FOR loop to iterate through the cities array */

    /* STEP 2b: Build an IF/ELSE conditional that compares 
    searchName with cities[i] */
    
});



/* STEP 3: Skip a loop interation with continue */
var numberList = document.querySelector('#numberList');
var num = 50;
for (var i = 1; i <= num; i++) {
var sqRoot = Math.sqrt(i);
/* STEP 3a: Build an IF statement that checks whether the 
square root of the number is NOT an integer */
if (true) {
    /* STEP 3b: If the square root of the number is not an integer, 
    we don't want to output it to the paragraph, 
    so skip the rest of the instructions inside this loop and 
    go back up to the FOR, using 'continue' */
    
}
numberList.textContent += i + ' ';
}

/* STEP 4: WHILE and DO/WHILE loops */

i = 0;
var outputWhile = '';
/* STEP 4a: WHILE loop to iterate through the cities array 
(created above in STEP 2) */

console.log(outputWhile);

//i = 0;
var outputDo = '';
/* STEP 4b: DO/WHILE loop - grab the above IF/ELSE and the 
'i++', then create the very same output with DO/WHILE (uncomment the above 'i = 0', first) */

console.log(outputDo);
/* …now try to loop through the same array backwards! */

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code